using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Config;

public class ActivitiesConfig : IEntityTypeConfiguration<Activity>
{
    public void Configure(EntityTypeBuilder<Activity> builder)
    {
        //convert local time to utc time to  be able to save seed data to db
        // convert utc time to local when receiving from db
        builder.Property(a=>a.Date)
            .HasConversion(v=>v.ToUniversalTime(),
                           v=>DateTime.SpecifyKind(v, DateTimeKind.Utc).ToLocalTime());
    }
}