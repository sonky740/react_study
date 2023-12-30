import { useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient, fetchEvent, deleteEvent } from '../../util/http';

import Header from '../Header';
import ErrorBlock from '../UI/ErrorBlock';
import Modal from '../UI/Modal';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const {
    mutate: deleteEventMutation,
    isPending: isPendingDeletion,
    isError: isErrorDeletion,
    error: deleteError,
  } = useMutation({
    mutationFn: ({ id }) => deleteEvent({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none', // 기존 쿼리가 자동으로 재요청되지 않도록 설정
      });
      navigate('../');
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  const handleDelete = () => {
    deleteEventMutation({ id });
  };

  let content = null;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        Loading...
      </div>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Failed to load event"
        message={error.info?.message || 'Failed to load event.'}
      />
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('ko-KR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button type="button" onClick={handleStartDelete}>
              Delete
            </button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting...</p>}
            {!isPendingDeletion && (
              <>
                <button
                  type="button"
                  onClick={handleStopDelete}
                  className="button-text"
                >
                  Cancel
                </button>
                <button type="button" onClick={handleDelete} className="button">
                  Delete
                </button>
              </>
            )}
            {isErrorDeletion && (
              <ErrorBlock
                title="Failed to delete event"
                message={deleteError.info?.message || 'Failed to delete event.'}
              />
            )}
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
