using Carter;
using codefusion.backend.Factories;
using Microsoft.AspNetCore.Mvc;

namespace codefusion.backend.EndPoints
{
    public class ToJSONModule : CarterModule
    {
        public ToJSONModule() : base("/utils") { }

        public override void AddRoutes(IEndpointRouteBuilder app)
        {
            // app.MapGet("", async () =>
            // {
            //     string[] a = ["CSV to JSON Converter"];
            //     return Results.Json(a);
            // });

            app.MapGet("/csvtojson", (IJSONFactory factory, string csv) =>
            {
                var res = factory.ConvertCSVToJSON(csv);
                return Results.Ok(res);
            });

            app.MapGet("formatjson", (IJSONFactory factory, string json) =>
            {
                var res = factory.FormatJSON(json);
                return Results.Ok(res);
            });

        }
    }
}