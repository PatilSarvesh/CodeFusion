namespace codefusion.backend.Factories
{
    public class EncodeDecodeFactory : IEncodeDecodeFactory
    {
        public EncodeDecodeFactory()
        {

        }

        public string EncodeBase64(string vale)
        {
            var plainText = System.Text.Encoding.UTF8.GetBytes(vale);
            var encodedText = System.Convert.ToBase64String(plainText);
            return encodedText;
        }

        public string DecodeBase64(string vale)
        {
            var base6rbytes = System.Convert.FromBase64String(vale);
            var decodedText = System.Text.Encoding.UTF8.GetString(base6rbytes);
            return decodedText;
        }
    }
}