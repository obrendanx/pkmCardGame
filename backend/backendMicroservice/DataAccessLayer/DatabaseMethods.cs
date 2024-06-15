using backendMicroservice.Models;
using System;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using BCrypt.Net;

namespace backendMicroservice.DataAccessLayer
{
    public class DatabaseMethods
    {
        private readonly string _connectionString;

        public DatabaseMethods(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public bool addUser(User user)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("AddUser", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        //Hash Password
                        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.Password);

                        // Add parameters
                        cmd.Parameters.AddWithValue("@FullName", user.Fullname);
                        cmd.Parameters.AddWithValue("@Username", user.Username);
                        cmd.Parameters.AddWithValue("@Email", user.Email);
                        cmd.Parameters.AddWithValue("@Password", hashedPassword);
                        cmd.Parameters.AddWithValue("@DateOfBirth", user.DateOfBirth);
                        cmd.Parameters.AddWithValue("@Announcements", user.Announcements);
                        cmd.Parameters.AddWithValue("@IsGlobalAdmin", user.IsGlobalAdmin);
                        cmd.Parameters.AddWithValue("@CreatedAt", user.DateTime);

                        conn.Open();
                        cmd.ExecuteNonQuery();
                    }
                }

                return true;
            }
            catch (Exception ex)
            {
                // Handle exception (log it, rethrow it, etc.)
                return false;
            }
        }
    }
}
