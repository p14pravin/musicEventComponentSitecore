"use client";

import { Field, Text, withDatasourceCheck } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";
import { JSX, useEffect, useState } from "react";

// API service functions
async function getRemainingTickets(eventId: number) {
  const res = await fetch(`https://localhost:7295/api/tickets/${eventId}/remaining`);
  if (!res.ok) throw new Error("Failed to fetch tickets");
  return await res.json();
}

async function decrementTicket(eventId: number) {
  const res = await fetch(`https://localhost:7295/api/tickets/${eventId}/decrement`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to decrement ticket");
  return await res.json();
}

type TicketCounterProps = ComponentProps & {
  fields: {
    eventID: Field<string>;
    description: Field<string>;
    soldOut: Field<string>;
    buyNow: Field<string>;
  };
};

const TicketCounter = (props: TicketCounterProps): JSX.Element => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // Convert Sitecore field to number
  const eventId = parseInt(props.fields.eventID?.value || "0", 10);

useEffect(() => {
    if (!eventId) return;
    (async () => {
      try {
        const data = await getRemainingTickets(eventId);
        setCount(data.remainingTickets); // ✅ store only the number
      } catch (err) {
        console.error(err);
      }
    })();
  }, [eventId]);

  const handleBook = async () => {
    setLoading(true);
    try {
      const updatedCount = await decrementTicket(eventId);
      setCount(updatedCount.remainingTickets);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="event-info p-4 mt-2 shadow rounded bg-white mb-5">
      <div className="row">
        <div className="col-md-4">
          <button
            onClick={handleBook}
            disabled={loading || count === 0}
            className="mt-2 px-4 py-2 btn btn-primary rounded disabled:bg-gray-400"
          >
            {count === 0 ? <Text field={props.fields.soldOut} /> : loading ? "Booking..." : <Text field={props.fields.buyNow} />}
          </button>
        </div>
        <div className="col-md-8">
            {/* <p>Event ID: <Text field={props.fields.eventID} /></p> */}
            {count === null ? (
              <p>Loading tickets..</p>
                ) : (
              <div className="text-center"><p><Text field={props.fields.description} /> </p><h2>{count}</h2></div>
              )}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<TicketCounterProps>(TicketCounter);

