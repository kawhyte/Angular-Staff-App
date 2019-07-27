using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DTG.API.Controllers.Reources;
using DTG.API.Data;
using DTG.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DTG.API.Controllers
{
    [Route("/api/vehicles")]
    public class VehiclesController : Controller
    {
        private readonly IMapper mapper;
        private readonly IVehicleRepository repository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IBuyerSellerRepository repo;

        public VehiclesController(IBuyerSellerRepository repo, IMapper mapper, IVehicleRepository repository, IUnitOfWork unitOfWork)
        {
            this.repo = repo;
            this.unitOfWork = unitOfWork;
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> CreateVehicle([FromBody] SaveVehicleResource vehicleResource)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var vehicle = mapper.Map<SaveVehicleResource, Vehicle>(vehicleResource);
            
        if(vehicle.LowestProjectBid >= vehicle.ProjectBudget ){
            return BadRequest("Your bid cannot be higher than the current bid");

        }
        
            DateTime dateTime = new DateTime();
            dateTime = DateTime.Now;
            DateTime newDateTime = new DateTime();
            TimeSpan NumberOfDays = new TimeSpan(2, 0, 0, 0, 0);
            newDateTime = dateTime.Add(NumberOfDays);

            vehicle.LastUpdate  = DateTime.Now;
            vehicle.ProjectStartDate = DateTime.Now;
            vehicle.ProjectEndDate = newDateTime;

            



            repository.Add(vehicle);
            await unitOfWork.CompleteAsync();

            vehicle = await repository.GetVehicle(vehicle.Id);

            var result = mapper.Map<Vehicle, VehicleResource>(vehicle);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVehicle(int id, [FromBody] SaveVehicleResource vehicleResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

         
            var vehicle = await repository.GetVehicle(id);

            if (vehicle == null)
                return NotFound(); 


            int bidresult = DateTime.Compare(vehicle.ProjectEndDate, DateTime.Now);

            if (bidresult < 0)
                return BadRequest(ModelState);
                //return Ok("The Bidding has ended for this project");
            

            mapper.Map<SaveVehicleResource, Vehicle>(vehicleResource, vehicle);
            vehicle.LastUpdate = DateTime.Now;

            await unitOfWork.CompleteAsync();

            vehicle = await repository.GetVehicle(vehicle.Id);
            var result = mapper.Map<Vehicle, VehicleResource>(vehicle);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            var vehicle = await repository.GetVehicle(id, includeRelated: false);

            if (vehicle == null)
                return NotFound();

            repository.Remove(vehicle);
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVehicle(int id)
        {
            var vehicle = await repository.GetVehicle(id);

            if (vehicle == null)
                return NotFound();

            var vehicleResource = mapper.Map<Vehicle, VehicleResource>(vehicle);

            return Ok(vehicleResource);
        }

        [HttpGet]
        public async Task<QueryResultResource<VehicleResource>> GetVehicles(VehicleQueryResource filterResource)
        {
            var filter = mapper.Map<VehicleQueryResource, VehicleQuery>(filterResource);
            var queryResult = await repository.GetVehicles(filter);

            return mapper.Map<QueryResult<Vehicle>, QueryResultResource<VehicleResource>>(queryResult);
        }

// [       HttpGet("/bids")]
//         public async Task<IEnumerable<MakeResource>> GetMakes()
//         {
//             var bids = await repository.Makes.Include(m => m.Models).ToListAsync();

//             return _mapper.Map<List<Make>, List<MakeResource>>(makes);
//         }





    }

}