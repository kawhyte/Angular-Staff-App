using System;
using System.Collections.Generic;

namespace DTG.API.Dtos
{
    public class UserForListDto
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
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }

        public ICollection<ContactForListDto> Contact { get; set; }
    }
}