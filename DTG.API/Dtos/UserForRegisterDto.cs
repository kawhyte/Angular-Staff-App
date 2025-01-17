using System;
using System.ComponentModel.DataAnnotations;

namespace DTG.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 char")]
        public string Password { get; set; }


        [Required]
        public string Gender { get; set; }

        // [Required]
        public string KnownAs { get; set; }
        
        public string KnownAsLast { get; set; }
        [Required]
        public string Lastname { get; set; }
        [Required]
        public string Firstname { get; set; }

        // [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public DateTime DateOfEmployment { get; set; }

        public string CurrentRole { get; set; }

        // [Required]
        public string City { get; set; }

        // [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }


    }
}