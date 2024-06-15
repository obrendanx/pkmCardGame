using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace userMicroservice.Model
{
    public Guid id {get; set;}
    public string username {get;set;}
    public string password {get;set;}
    public string email { get;set;}
    public string dateOfBirth { get;set;}
    public bool Announcements { get;set;}
    public bool IsGlobalAdmin { get;set;}
    public string DateTime {  get;set;} = DateTime.UtcNow
}