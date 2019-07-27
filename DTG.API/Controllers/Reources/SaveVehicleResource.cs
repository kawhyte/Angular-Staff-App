using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using DTG.API.Models;

namespace DTG.API.Controllers.Reources
{
    public class SaveVehicleResource
    {
        public int? Id { get; set; }
        public int ModelId { get; set; }
        public bool IsRegistered { get; set; }
        [Required]
        public ContactResource Contact { get; set; }
        public ICollection<int> Features { get; set; }
      //  public ICollection<Bids> Bids { get; set; }
        public decimal LowestProjectBid { get; set; }
        public int CreatedByUserId { get; set; }
        public decimal ProjectBudget { get; set; }

        public DateTime ProjectEndDate { get; set; }

        public SaveVehicleResource()
        {
            Features = new Collection<int>();
           // Bids = new Collection<Bids>();
        }
    }
}