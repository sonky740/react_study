import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { queryClient, fetchEvent, updateEvent } from '../../util/http';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import ErrorBlock from '../UI/ErrorBlock';

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();
  const id = params.id;

  // loader가 있어도 아래 구문이 삭제되지 말아야 하는 이유는
  // useQuery가 캐시를 사용하기 때문이다.
  const { data, isError, error } = useQuery({
    queryKey: ['events', { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    staleTime: 10000,
  });

  // const { mutate: updateEventMutation } = useMutation({
  //   mutationFn: ({ id, event }) => updateEvent({ id, event }),
  //   onMutate: async ({ id, event }) => {
  //     await queryClient.cancelQueries({ queryKey: ['events', { id }] });
  //     const previousEvent = queryClient.getQueryData(['events', { id }]);

  //     queryClient.setQueryData(['events', { id }], event);

  //     return {
  //       previousEvent,
  //     };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['events', { id }], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', { id }]);
  //   },
  // });

  function handleSubmit(formData) {
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content = null;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || 'Failed to load event.'}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Cancel
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  const id = params.id;
  return queryClient.fetchQuery({
    queryKey: ['events', { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
}

export async function action({ request, params }) {
  const id = params.id;
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({
    id,
    event: updatedEventData,
  });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}
