using codefusion.backend.Models;

namespace codefusion.backend.Factories
{
    public class UtilsFactory : IUtilsFactory
    {
        public UtilsFactory()
        {

        }

        public IList<Tools> GetUtilTypes()
        {
            var utilList = new List<string>();
            utilList.Add("CSV to JSON Converter");
            utilList.Add("Base64 encoder/decoder");
            utilList.Add("JSON formatter");
            utilList.Add("YAML to JSON");
            utilList.Add("URL encoder/decoder");
            utilList.Add("Timestamp to Date Converter");
            utilList.Add("Query Params to JSON");
            utilList.Add("HEX to RGB Converter");
            utilList.Add("Image to Base64 Converter");
            utilList.Add("JSON to CSV Converter");
            utilList.Add("JSON to YAML");
            utilList.Add("Number Base Changer");
            utilList.Add("Regex Tester");
            utilList.Add("CSS Units Converter");
            utilList.Add("Image Resizer");
            utilList.Add("JWT Parser");
            utilList.Add("Hash Generator");




            // Create a list of tools
            List<Tools> toolList =
            [
                new Tools
                {
                    Id = 1,
                    Title = "CSV to JSON",
                    Description = "Convert CSV data to JSON format",
                    Link = "csv-to-json"
                },
                new Tools
                {
                    Id = 2,
                    Title = "Base64 Encode/Decode",
                    Description = "Encode or decode Base64 strings",
                    Link = "base64-encode-decode"
                },
                new Tools
                {
                    Id = 3,
                    Title = "JSON Formatter",
                    Description = "Format and beautify JSON",
                    Link = "json-formatter"
                },
                new Tools
                {
                    Id = 4,
                    Title = "YAML to JSON",
                    Description = "Convert YAML to JSON",
                    Link = "yaml-to-json"
                },
                new Tools
                {
                    Id = 5,
                    Title = "URL Encode/Decode",
                    Description = "Encode or decode URLs",
                    Link = "url-encode-decode"
                },
                new Tools
                {
                    Id = 6,
                    Title = "Timestamp to Date Converter",
                    Description = "Convert timestamps to human-readable dates",
                    Link = "timestamp-to-date"
                },
                new Tools
                {
                    Id = 7,
                    Title = "Query Params to JSON",
                    Description = "Convert query parameters to JSON",
                    Link = "query-params-to-json"
                },
                new Tools
                {
                    Id = 8,
                    Title = "HEX to RGB Converter",
                    Description = "Convert HEX color codes to RGB values",
                    Link = "hex-to-rgb"
                },
                new Tools
                {
                    Id = 9,
                    Title = "Image to Base64 Converter",
                    Description = "Convert images to Base64 strings",
                    Link = "image-to-base64"
                },
                new Tools
                {
                    Id = 10,
                    Title = "JSON to CSV",
                    Description = "Convert JSON data to CSV",
                    Link = "json-to-csv"
                },
                new Tools
                {
                    Id = 11,
                    Title = "JSON to YAML",
                    Description = "Convert JSON to YAML format",
                    Link = "json-to-yaml"
                },
                new Tools
                {
                    Id = 12,
                    Title = "Number Base Changer",
                    Description = "Convert numbers between different bases",
                    Link = "number-base-changer"
                },
                new Tools
                {
                    Id = 13,
                    Title = "Regex Tester",
                    Description = "Test regular expressions",
                    Link = "regex-tester"
                },
                new Tools
                {
                    Id = 14,
                    Title = "Image Resizer",
                    Description = "Resize images with custom dimensions",
                    Link = "image-resizer"
                },
                new Tools
                {
                    Id = 15,
                    Title = "CSS Units Converter",
                    Description = "Convert between different CSS units",
                    Link = "css-units-converter"
                },
                new Tools
                {
                    Id = 16,
                    Title = "JWT Parser",
                    Description = "Parse and decode JWT tokens",
                    Link = "jwt-parser"
                }

            ];

            return toolList;
        }

    }
}