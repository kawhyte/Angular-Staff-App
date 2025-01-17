using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace DTG.API.Models
{
   // User Buyer and Sellers
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfEmployment { get; set; }
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

         public string Email { get; set; }
        public string TelephoneNumber { get; set; }
        public string Extension { get; set; }
        public string Cellular { get; set; }

        public ICollection<MemberPhoto> Photos { get; set; }
       // public ICollection<Vehicle> Vehicles { get; set; }
        public ICollection<Contact> Contact { get; set; }
        public ICollection<Like> Liker { get; set; }
        public ICollection<Like> Likee { get; set; }

        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesReceived { get; set; }
        public User()
        {
            //Vehicles = new Collection<Vehicle>();
            Photos = new Collection<MemberPhoto>();
            Contact = new Collection <Contact>();
        }
    }
}