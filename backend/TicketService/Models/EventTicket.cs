using System;
using System.Collections.Generic;

namespace TicketService.Models
{
    public partial class EventTicket
    {
        public int EventId { get; set; }
        public int RemainingTickets { get; set; }
    }
}
