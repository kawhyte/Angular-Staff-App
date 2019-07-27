using System.Collections.Generic;
using System.Threading.Tasks;
using DTG.API.Models;

namespace DTG.API.Data
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true); 
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
        Task<QueryResult<Vehicle>> GetVehicles(VehicleQuery filter);
  
    }
}