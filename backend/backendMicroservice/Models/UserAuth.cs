namespace backendMicroservice.Models
{
    public class UserAuth
    {
        public Guid UserId { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string DateOfBirth { get; set; }
        public bool Announcements { get; set; }
        public bool IsGlobalAdmin { get; set; }
    }
}
