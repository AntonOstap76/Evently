using Microsoft.EntityFrameworkCore;
using Persistence;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

//add dbcontext
builder.Services.AddDbContext<AppDbContext>(options =>
{
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});


builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
        app.MapOpenApi();
      
        app.MapScalarApiReference( options=> 
        {
                options.Title = "Evently";
                options.Theme = ScalarTheme.Mars;
                options.DefaultHttpClient = new(ScalarTarget.CSharp, ScalarClient.HttpClient);
                options.ShowSidebar = true;
        });
}

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

//try seed data to db
try
{
        var context = services.GetRequiredService<AppDbContext>();
        await context.Database.MigrateAsync();
        await DbInitializer.SeedData(context);
}
catch (Exception ex)
{
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while migrating the database.");
}

app.Run();
