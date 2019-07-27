using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DTG.API.Models
{
    [Table("VehiclePhotos")]   
    public class VehiclePhoto
    {
       public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string FileName { get; set; }

        public int VehicleId { get; set; }
    }
}