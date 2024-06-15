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

        [HttpPost]
        [Route("addinterest")]
        public IActionResult AddInterest([FromBody] Interest interest)
        {
            if (interest == null)
            {
                return BadRequest("Interest is null.");
            }

            bool result = _databaseMethods.addInterest(interest);
            if (result)
            {
                return Ok("Interest added successfully.");
            }
            else
            {
                return StatusCode(500, "An error occurred while adding a new interest.");
            }
        }

        [HttpPost]
        [Route("updateinterest")]
        public IActionResult UpdateInterest([FromBody] Interest interest)
        {
            if (interest == null)
            {
                return BadRequest("Interest is null.");
            }

            bool result = _databaseMethods.updateInterest(interest);
            if (result)
            {
                return Ok("Interest updated successfully.");
            }
            else
            {
                return StatusCode(500, "An error occurred while updating your interest.");
            }
        }
    }
}
