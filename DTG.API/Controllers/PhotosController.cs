using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DTG.API.Controllers.Reources;
using DTG.API.Data;
using DTG.API.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DTG.API.Controllers
{


[Route("/api/vehicles/{vehicleId}/photos")]
  public class PhotosController : Controller
  {
    private readonly int MAX_BYTES = 1 * 1024 * 1024;
    private readonly string[] ACCEPTED_FILE_TYPES = new[] { ".jpg", ".jpeg", ".png" };
    private readonly IHostingEnvironment host;
    private readonly IVehicleRepository repository;
    private readonly IUnitOfWork unitOfWork;
    private readonly IMapper mapper;
    private readonly IVehiclePhotoRepository vehiclePhotoRepository;
    public PhotosController(IVehiclePhotoRepository vehiclePhotoRepository, IHostingEnvironment host, IVehicleRepository repository, IUnitOfWork unitOfWork, IMapper mapper)
    {
      this.mapper = mapper;
      this.unitOfWork = unitOfWork;
      this.repository = repository;
      this.host = host;
      this.vehiclePhotoRepository = vehiclePhotoRepository;
    }
    [HttpPost]
    public async Task<IActionResult> Upload(int vehicleId, IFormFile file)
    {
      var vehicle = await repository.GetVehicle(vehicleId, includeRelated: false);
      if (vehicle == null)
        return NotFound();

   if (string.IsNullOrWhiteSpace(host.WebRootPath))
   {
       host.WebRootPath = System.IO.Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
   }
  

      if (file == null) return BadRequest("Null file");
      if (file.Length == 0) return BadRequest("Empty file");
      if (file.Length > MAX_BYTES) return BadRequest("Max file size exceeded");
      if (!ACCEPTED_FILE_TYPES.Any(s => s == Path.GetExtension(file.FileName))) return BadRequest("Invalid file type.");

      var uploadsFolderPath =  Path.Combine( host.WebRootPath, "uploads");
  


      if (!Directory.Exists(uploadsFolderPath))
        Directory.CreateDirectory(uploadsFolderPath);

      var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
      var filePath = Path.Combine(uploadsFolderPath, fileName);

      using (var stream = new FileStream(filePath, FileMode.Create))
      {
        await file.CopyToAsync(stream);
      }

      var photo = new VehiclePhoto { FileName = fileName };
      vehicle.VehiclePhotos.Add(photo);
      await unitOfWork.CompleteAsync();

      return Ok(mapper.Map<VehiclePhoto, VehiclePhotoResource>(photo));
    }
 


  [HttpGet]
    public async Task<IEnumerable<VehiclePhotoResource>> GetPhotos(int vehicleId) 
    {
      var photos = await vehiclePhotoRepository.GetPhotos(vehicleId);
      
      return mapper.Map<IEnumerable<VehiclePhoto>, IEnumerable<VehiclePhotoResource>>(photos);
    }

  }
        
}
