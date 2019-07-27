using System.Collections.Generic;

namespace DTG.API.Models
{
    public class QueryResult <T>
    {
        // Used for pagiination on the client
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
        
    }
}