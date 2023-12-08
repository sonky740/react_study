import { useParams } from 'react-router-dom';

export default function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>Event Id: {params.eventId}</p>
    </div>
  );
}
