using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace DTG.API.Controllers.Reources
{
    public class MakeResource : KeyValuePairResource
    {
        
       public ICollection<KeyValuePairResource> Models { get; set; }

        public MakeResource()
        {
            Models = new Collection<KeyValuePairResource>();
        }
    }
}