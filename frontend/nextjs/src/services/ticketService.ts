export async function getRemainingTickets(eventId: number) {
  const res = await fetch(`https://localhost:7295/api/Tickets/${eventId}/remaining`);
  if (!res.ok) throw new Error("Failed to fetch remaining tickets");
  return await res.json();
}

export async function decrementTicket(eventId: number) {
  const res = await fetch(`https://localhost:7295/api/Tickets/${eventId}/decrement`, {
    method: "PATCH"
  });
  if (!res.ok) throw new Error("Failed to decrement ticket");
  return await res.json();
}
