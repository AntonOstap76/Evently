using Application.DTOs;
using AutoMapper;
using Domain;
using Microsoft.EntityFrameworkCore.Migrations.Operations.Builders;

namespace Application.Core;

// config for mapper
public class MappingProfiles:Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        
        //map created activity from client to DTO for validation
        CreateMap<CreateActivityDTO, Activity>();

        CreateMap<EditActivityDTO, Activity>();

    }
}