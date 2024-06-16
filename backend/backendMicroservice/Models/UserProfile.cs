namespace backendMicroservice.Models
{
    public class UserProfile
    {
        public Guid UserId { get; set; }
        public string ProfileIconColor { get; set; }
        public string Bio { get; set; }
        public string Gender { get; set; }
        public string Twitter { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string FavoritePokemonName { get; set; }
        public string FavoritePokemonImage { get; set; }
    }
}
