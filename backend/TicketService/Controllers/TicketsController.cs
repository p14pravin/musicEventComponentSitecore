using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketService.Data;
using TicketService.Models;

namespace TicketService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly TicketContext _context;
        public TicketsController(TicketContext context) => _context = context;

        // GET: api/tickets
        [HttpGet("{eventId}/remaining")]
        public async Task<IActionResult> GetRemainingTickets(int eventId)
        {
            var ticket = await _context.EventTickets.FindAsync(eventId);
            if (ticket == null) return NotFound();
            return Ok(ticket); // returns full object { eventId, remainingTickets }
        }

        // PATCH: api/tickets/1/decrement
        [HttpPatch("{eventId}/decrement")]
        public async Task<IActionResult> DecrementTicket(int eventId)
        {
            var ticket = await _context.EventTickets.FindAsync(eventId);
            if (ticket == null)
                return NotFound();

            if (ticket.RemainingTickets > 0)
            {
                ticket.RemainingTickets -= 1;
                await _context.SaveChangesAsync();
            }

            return Ok(ticket);
        }


        // GET: api/tickets/1
        [HttpGet("{eventId}")]
        public async Task<ActionResult<EventTicket>> Get(int eventId)
        {
            var ticket = await _context.EventTickets.FindAsync(eventId);
            if (ticket == null) return NotFound();
            return ticket;
        }

        // POST: api/tickets
        [HttpPost]
        public async Task<ActionResult<EventTicket>> Post(EventTicket ticket)
        {
            _context.EventTickets.Add(ticket);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { eventId = ticket.EventId }, ticket);
        }

        // PUT: api/tickets/1
        [HttpPut("{eventId}")]
        public async Task<IActionResult> Put(int eventId, EventTicket ticket)
        {
            if (eventId != ticket.EventId) return BadRequest();

            _context.Entry(ticket).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.EventTickets.AnyAsync(e => e.EventId == eventId))
                    return NotFound();
                throw;
            }
            return NoContent();
        }

        // DELETE: api/tickets/1
        [HttpDelete("{eventId}")]
        public async Task<IActionResult> Delete(int eventId)
        {
            var ticket = await _context.EventTickets.FindAsync(eventId);
            if (ticket == null) return NotFound();
            _context.EventTickets.Remove(ticket);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
