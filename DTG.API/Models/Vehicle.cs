using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTG.API.Models
{   
    [Table("Vehicles")]
    public class Vehicle
    {
        public int Id { get; set; }
        public int ModelId { get; set; }
        public Model Model { get; set; }
        public bool IsRegistered { get; set; }
        [Required]
        [StringLength(255)]
        public string ContactName { get; set; }

        [StringLength(255)]
        public string ContactEmail { get; set; }

        [Required]
        [StringLength(255)]
        public string ContactPhone { get; set; }
        public DateTime LastUpdate { get; set; }
        public ICollection<VehicleFeature> Features { get; set; }
        public ICollection<VehiclePhoto> VehiclePhotos { get; set; }
        public ICollection<Bids> Bids { get; set; }
       // public User User { get; set; }
        //public int UserId { get; set; }

        //public Bids Bids { get; set; }
        //public int BidId { get; set; }

        
        public int CreatedByUserId { get; set; }
        public decimal ProjectBudget { get; set; }
        public decimal LowestProjectBid { get; set; }
        public DateTime ProjectStartDate { get; set; }
        public DateTime ProjectEndDate { get; set; }

        public Vehicle()
        {
            Features = new Collection<VehicleFeature>();
            VehiclePhotos = new Collection<VehiclePhoto>();
            Bids = new Collection<Bids>();
        }
}

}