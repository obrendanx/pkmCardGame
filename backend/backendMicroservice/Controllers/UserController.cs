using backendMicroservice.DataAccessLayer;
using backendMicroservice.Models;
using Microsoft.AspNetCore.Mvc;

namespace backendMicroservice.Controllers
{
    [Produces("application/json")]
    [Route("api/user")]
    public class UserController : Controller
    {
        private readonly DatabaseMethods _databaseMethods;

        public UserController(DatabaseMethods databaseMethods)
        {
            _databaseMethods = databaseMethods;
        }

        [HttpPost]
        [Route("adduser")]
        public IActionResult AddUser([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest("User is null.");
            }

            bool result = _databaseMethods.addUser(user);
            if (result)
            {
                return Ok("User added successfully.");
            }
            else
            {
                return StatusCode(500, "An error occurred while adding the user.");
            }
        }
    }
}
