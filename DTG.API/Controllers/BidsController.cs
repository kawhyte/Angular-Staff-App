using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DTG.API.Controllers.Reources;
using DTG.API.Data;
using DTG.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DTG.API.Controllers
{
    [Route("/api/vehicles/{vehicleId}/bids")]
    public class BidsController: Controller
    {

        // api/vehicles/1/bids
    private readonly IVehicleRepository repository;
    private readonly IUnitOfWork unitOfWork;
    private readonly IMapper mapper;
    private readonly IBidRepository bidRepository;
    public BidsController(IBidRepository bidRepository, IVehicleRepository repository, IUnitOfWork unitOfWork, IMapper mapper)
    {
      this.mapper = mapper;
      this.unitOfWork = unitOfWork;
      this.repository = repository;
      this.bidRepository = bidRepository;
    }

  [HttpGet]
    public async Task<IEnumerable<BidResource>> GetBids(int vehicleId) 
    {
      var bids = await bidRepository.GetBids(vehicleId);
      
      return mapper.Map<IEnumerable<Bids>, IEnumerable<BidResource>>(bids);
    }



   [HttpPost]
    public async Task<IActionResult> SaveBids(int vehicleId,[FromBody] BidResource bidResource) 
    {
        if (!ModelState.IsValid) {
            return BadRequest("Invalid request");
        }

        if (bidResource.VehicleId != vehicleId) {
            return BadRequest("Invalid vehicle id");
        }


    var vehicle = await repository.GetVehicle(vehicleId, includeRelated: false);
      
      if (vehicle == null)
         return NotFound();

    var bid = mapper.Map<BidResource, Bids>(bidResource);

      vehicle.Bids.Add(bid);

        //**** _context.update(vehicle);


      await unitOfWork.CompleteAsync();

      return Ok(mapper.Map<Bids, BidResource>(bid));
      
    }

    }
}