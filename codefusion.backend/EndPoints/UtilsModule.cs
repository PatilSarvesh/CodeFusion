using Carter;
using codefusion.backend.Factories;

namespace codefusion.backend.EndPoints
{
    public class UtilsModule : CarterModule
    {
        public UtilsModule(): base("/utils") { }

        public override void AddRoutes(IEndpointRouteBuilder app)
        {
            app.MapGet("", async () =>
            {
                string[] a = ["CSV to JSON Converter"];
                return Results.Json(a);
            });

            app.MapGet("GetUtils",  (IUtilsFactory factory) =>
            {
                var res = factory.GetUtilTypes();
                return Results.Json(res);
            });

        }
    }
    
}