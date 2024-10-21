namespace codefusion.backend.Factories
{
    public interface IEncodeDecodeFactory
    {
        public string EncodeBase64(string vale);
        public string DecodeBase64(string vale);
    }
}