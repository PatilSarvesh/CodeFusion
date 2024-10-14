using codefusion.backend.Models;

namespace codefusion.backend.Factories
{
    public interface IUtilsFactory
    {
        public IList<Tools> GetUtilTypes();
    }
}