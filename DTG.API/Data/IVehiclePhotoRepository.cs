using System.Collections.Generic;
using System.Threading.Tasks;
using DTG.API.Models;

namespace DTG.API.Data
{
    public interface IVehiclePhotoRepository
    {
          Task<IEnumerable<VehiclePhoto>> GetPhotos(int vehicleId);
    }
}