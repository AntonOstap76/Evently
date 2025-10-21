
using Application.Activities.Commands;
using Application.Activities.Queries;
using Application.DTOs;
using Domain;

using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

public class ActivitiesController:BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        //  controller don`t know what is in application layer
        // for getting access for query need to instantiate a new instance of the GetActivityList.class 
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
       return HandleResult(await Mediator.Send(new GetActivityDetails.Query { Id = id }));
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDTO activityDto)
    {
        return HandleResult(await Mediator.Send(new CreateActivity.Command { ActivityDTO = activityDto}));
    }

    [HttpPut]
    public async Task<ActionResult> UpdateActivity(EditActivityDTO activity)
    {
            return HandleResult(await Mediator.Send(new EditActivity.Command { ActivityDto = activity }));
           
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
       return HandleResult(await Mediator.Send(new DeleteActivities.Command { Id = id }));
    }
    
}