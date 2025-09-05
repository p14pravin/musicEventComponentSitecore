# TicketService Backend (ASP.NET Core 6 Web API)

This is the backend service for the **Music Event Ticketing Application Component**.  
It provides APIs for managing counts tickets in **SQL Server**.

---

## 📂 Project Structure
backend/
│
├── TicketService/ # Main Web API project
│ ├── Controllers/ # API Controllers
│ ├── Data/ # DbContext (EF Core)
│ ├── Models/ # Entity Models
│ ├── Program.cs # Entry point
│ └── appsettings.json # Config (connection string etc.)

## Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [SQL Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [SQL Server Management Studio (SSMS)](https://aka.ms/ssmsfullsetup) (for DB access)

## Tech Stack

.NET 6 Web API
Entity Framework Core 6 (SQL Server)
Swagger / OpenAPI (API docs)

## Database

CREATE DATABASE EventTicketsDb;

CREATE TABLE EventTickets (
    EventId INT PRIMARY KEY IDENTITY,
    RemainingTickets INT
);

INSERT INTO EventTickets (EventID, RemainingTickets)
VALUES (1001, 25);

Update connection string
In TicketService/appsettings.json:

"ConnectionStrings": {
  "TicketDb": "Server=localhost\\SQLEXPRESS;Database=EventTicketsDb;Trusted_Connection=True;TrustServerCertificate=True;"
}

## Running the API
From the backend folder:
dotnet build
dotnet run --project TicketService

The API will be available at:
https://localhost:7295/swagger/index.html
Swagger UI will show available endpoints.

GET /api/tickets/{id}/remaining
Fetch ticket info (including remainingTickets).

POST /api/tickets/{id}/decrement
Decrement the remainingTickets count by 1 (book a ticket).

## Packages need to be install

dotnet add package Microsoft.EntityFrameworkCore --version 6.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 6.0.0

Install EF CLI
dotnet tool install --global dotnet-ef
or if already installed:
dotnet tool update --global dotnet-ef
