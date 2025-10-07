using AutoMapper;
using Domain;

namespace Application.Core;

// config for mapper
public class MappingProfiles:Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}