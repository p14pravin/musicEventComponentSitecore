using Microsoft.EntityFrameworkCore;
using TicketService.Data;
var builder = WebApplication.CreateBuilder(args);

//cross origin
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNextJs",
        policy => policy.WithOrigins("http://localhost:3000") // Next.js dev server
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

// Register EF Core DbContext
builder.Services.AddDbContext<TicketContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowNextJs");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
