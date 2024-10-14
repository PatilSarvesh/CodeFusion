using System.Text.Json;

namespace codefusion.backend.Factories
{
    public class JSONFactory : IJSONFactory
    {
        public JSONFactory()
        {

        }

        public string ConvertCSVToJSON(string csv)
        {
            var lines = csv.Split('\n').Select(line => line.Split('\t')).ToList();
            var headers = lines.First();

            var jsonList = lines.Skip(1).Where(line => line.Length == headers.Length).Select(line =>
                headers.Zip(line, (h, v) => new { h, v })
                       .ToDictionary(x => x.h.Trim(), x => x.v.Trim()))
                .ToList();

            var options = new JsonSerializerOptions
            {
                WriteIndented = true // Enable pretty-printing
            };

            return JsonSerializer.Serialize(jsonList, options);
            // return  a;
        }

        public string FormatJSON(string json)
        {
            return JsonSerializer.Serialize(JsonSerializer.Deserialize<object>(json), new JsonSerializerOptions { WriteIndented = true });
        }
    }
}