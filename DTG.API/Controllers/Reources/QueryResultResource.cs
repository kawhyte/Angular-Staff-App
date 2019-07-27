using System.Collections.Generic;

namespace DTG.API.Controllers.Reources
{
    public class QueryResultResource <T>
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}