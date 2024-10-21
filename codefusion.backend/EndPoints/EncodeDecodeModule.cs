using Carter;
using codefusion.backend.Factories;

namespace codefusion.backend.EndPoints
{
    public class EncodeDecodeModule : CarterModule
    {
        public EncodeDecodeModule(): base("/utils") { } 
        public override void AddRoutes(IEndpointRouteBuilder app)
        {
            app.MapGet("/encodeToBase64", async (IEncodeDecodeFactory factory, string input ) =>
            {
                var res = factory.EncodeBase64(input);

                return Results.Ok(res);
            });
            app.MapGet("/decodeBase64", async (IEncodeDecodeFactory factory, string input ) =>
            {
                var res = factory.DecodeBase64(input);

                return Results.Ok(res);
            });
        }
    }
}