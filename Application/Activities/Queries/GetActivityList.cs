using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    //define a query to get a list of activities
    public class Query:IRequest<List<Activity>>{}

    
    // define a handler for query 
    // use EntityFramework to retrieve data from db
    public class Handler : IRequestHandler<Query, List<Activity>>
    {
        private readonly AppDbContext _context;
        
        public Handler(AppDbContext context)
        {
            _context = context;
            
        }
        
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.Activities.ToListAsync(cancellationToken);
        }
    }
}