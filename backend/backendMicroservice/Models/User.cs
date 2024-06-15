using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace backendMicroservice.Models
{
    public class User
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Fullname { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string DateOfBirth { get; set; }
        public bool Announcements { get; set; }
        public bool IsGlobalAdmin { get; set; }
        public DateTime DateTime { get; set; }
    }
}
