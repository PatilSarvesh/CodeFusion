namespace codefusion.backend.Factories
{
    public interface IJSONFactory
    {
        public string ConvertCSVToJSON(string csv);
        public string FormatJSON(string json);
    }
}