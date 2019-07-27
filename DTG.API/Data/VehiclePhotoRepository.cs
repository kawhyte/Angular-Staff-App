using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTG.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DTG.API.Data
{
    public class VehiclePhotoRepository :  IVehiclePhotoRepository
    {
    private readonly DataContext context;
    public VehiclePhotoRepository(DataContext context)
    {
      this.context = context;
    }
    public async Task<IEnumerable<VehiclePhoto>> GetPhotos(int vehicleId)
    {
      return await context.VehiclePhoto
        .Where(p => p.VehicleId == vehicleId)
        .ToListAsync();
    }
    }
}