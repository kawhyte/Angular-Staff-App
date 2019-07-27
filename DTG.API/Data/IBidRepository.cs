using System.Collections.Generic;
using System.Threading.Tasks;
using DTG.API.Models;

namespace DTG.API.Data
{
    public interface IBidRepository
    {
         Task<IEnumerable<Bids>> GetBids(int vehicleId);
         //void AddBid(Bids bid);
    }
}