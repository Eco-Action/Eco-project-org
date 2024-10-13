import React, { useEffect, useState } from 'react';

const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h3 className="text-lg font-semibold text-green mb-2">{event.title}</h3>
    <p className="text-sm text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
    <p className="text-sm text-gray-700 mb-2">{event.description}</p>
    <p className="text-sm font-medium text-green">Location: {event.location}</p>
  </div>
);

const EventSharing = ({ searchQuery }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/community/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on search query
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div>
      {/* <h2 className="text-2xl font-bold text-green-600 mb-4">Environmental Events</h2> */}
      <div className="overflow-y-auto w-full h-[300px] grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default EventSharing;
