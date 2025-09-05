Created Project- 
dotnet new webapi -n TicketService

Add EF Core Packages

dotnet add package Microsoft.EntityFrameworkCore --version 6.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 6.0.0


Install EF CLI
dotnet tool install --global dotnet-ef
# or if already installed:
dotnet tool update --global dotnet-ef

Create folder Models and file Models/EventTicket.cs:
Create folder Data and file Data/TicketContext.cs:

dotnet ef dbcontext scaffold "Server=localhost\SQLEXPRESS;Database=EventTicketsDb;Trusted_Connection=True;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models --context TicketContext --context-dir Data --table EventTickets --force

This will:
create Models/EventTicket.cs (matching DB columns)
create Data/TicketContext.cs (DbContext wired to the DB)

dotnet run

https://localhost:7295/swagger/index.html
https://localhost:7295/
http://localhost:5076
