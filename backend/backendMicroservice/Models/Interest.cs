namespace backendMicroservice.Models
{
    public class Interest
    {
        public Guid UserId { get; set; }
        public int InterestId { get; set; }
        public string InterestName {  get; set; }
    }
}
