using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace DTG.API.Controllers.Reources
{
    public class VehicleResource
    {
    public int Id { get; set; }
        public KeyValuePairResource Model { get; set; }
        public KeyValuePairResource Make { get; set; }
        public bool IsRegistered { get; set; }
        public ContactResource Contact { get; set; }
        public DateTime LastUpdate { get; set; }
        public DateTime ProjectStartDate { get; set; }
        public DateTime ProjectEndDate { get; set; }

        public int CreatedByUserId { get; set; }
        public decimal LowestProjectBid { get; set; }
        public decimal ProjectBudget { get; set; }
        public ICollection<KeyValuePairResource> Features { get; set; }
       
        public VehicleResource()
        {
            Features = new Collection<KeyValuePairResource>();
        }        
    }
}