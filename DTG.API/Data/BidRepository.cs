using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTG.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DTG.API.Data
{
    public class BidRepository: IBidRepository
    {
      private readonly DataContext context;
      public BidRepository(DataContext context)
      {
        this.context = context;
      }
      public async Task<IEnumerable<Bids>> GetBids(int vehicleId)
      {
        return await context.Bids
          .Where(p => p.VehicleId == vehicleId)
          .ToListAsync();
      }

      // public void AddBid(Bids bid) {
      //   context.Add(bid);
      //   context.Remove(bid);
      //   context.Update(bid);
      // }
    }
}