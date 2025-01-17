using System;
using System.Collections.Generic;
using DTG.API.Models;

namespace DTG.API.Dtos
{
    public class UserForDetailDto
    {

        public int Id { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public string KnownAsLast { get; set; }

        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string CurrentRole { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }

        public string Email { get; set; }
        public string TelephoneNumber { get; set; }
        public string Extension { get; set; }
        public string Cellular { get; set; }

        public ICollection<PhotoForDetailDto> Photos { get; set; }


    }
}