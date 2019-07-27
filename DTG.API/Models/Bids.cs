using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTG.API.Models
{
    // Collection of all bid - VehicleId is a foreign key 
     [Table("Bids")]    
     public class Bids
    {
        public int Id { get; set; }
        public decimal Bidvalue { get; set; }
        public int BidderId { get; set; }
        public DateTime  BidDate { get; set; }

        public Vehicle Vehicle { get; set; }
        public int VehicleId { get; set; }
  
    }
    }
