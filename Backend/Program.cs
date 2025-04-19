
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

var todos = new List<Todo>
    {
        new Todo { Id = 1, Title = "Learn C#", IsCompleted = true },
        new Todo { Id = 2, Title = "Learn ASP.NET Core", IsCompleted = true },
        new Todo { Id = 3, Title = "Build awesome apps", IsCompleted = true }
    };

app.UseCors("AllowAll");

app.MapGet("/", () =>
{
    return Results.Text("Hello World!");
});

app.MapGet("/todos", () =>
{
    return todos;
});

app.MapPost("/todos", (Todo todo) =>
{
    todos.Add(todo);
    Console.WriteLine("Todo added"); ;
});

app.Run();

public class Todo
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public bool IsCompleted { get; set; }
}

