import { Suspense } from 'react';
import { json, useLoaderData, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    // return response; // defer를 사용하면 response를 사용할 수 없다.
    const resData = await response.json();
    return resData.events;
  }
}

// react의 메소드는 사용불가
export function loader() {
  return defer({
    events: loadEvents(),
  });
}
