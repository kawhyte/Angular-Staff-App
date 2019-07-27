using System;

namespace DTG.API.Controllers.Reources
{
    public class BidResource
    {
        public int Id { get; set; }
        public decimal Bidvalue { get; set; }
        public int BidderId { get; set; }
        public DateTime  BidDate { get; set; }

        public Models.Vehicle Vehicle { get; set; }
        public int VehicleId { get; set; }
  
    }
}