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

        public bool addInterest(Interest interest)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("AddInterest", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        // Add parameters
                        cmd.Parameters.AddWithValue("@UserId", interest.UserId);
                        cmd.Parameters.AddWithValue("@Interest", interest.InterestName);

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

        public bool updateInterest(Interest interest)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("UpdateInterest", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        // Add parameters
                        cmd.Parameters.AddWithValue("@InterestId", interest.InterestId);
                        cmd.Parameters.AddWithValue("@Interest", interest.InterestName);

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

        public UserProfile getProfile(Guid userId)
        {
            UserProfile userProfile = null;

            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("GetUserProfile", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        // Add parameters
                        cmd.Parameters.AddWithValue("@UserId", userId);

                        conn.Open();

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                userProfile = new UserProfile
                                {
                                    UserId = reader.GetGuid(reader.GetOrdinal("UserId")),
                                    ProfileIconColor = reader.GetString(reader.GetOrdinal("ProfileIconColor")),
                                    Bio = reader.GetString(reader.GetOrdinal("Bio")),
                                    Gender = reader.GetString(reader.GetOrdinal("Gender")),
                                    Twitter = reader.GetString(reader.GetOrdinal("Twitter")),
                                    Facebook = reader.GetString(reader.GetOrdinal("Facebook")),
                                    Instagram = reader.GetString(reader.GetOrdinal("Instagram")),
                                    FavoritePokemonName = reader.GetString(reader.GetOrdinal("FavoritePokemonName")),
                                    FavoritePokemonImage = reader.GetString(reader.GetOrdinal("FavoritePokemonImage"))
                                };
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle exception (log it, rethrow it, etc.)
                throw new Exception("An error occurred while retrieving the user profile.", ex);
            }

            return userProfile;
        }

        public User LoginUser(string username, string password)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("UserLogin", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@Username", username);
                        cmd.Parameters.AddWithValue("@Password", password);

                        conn.Open();

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                reader.Read();
                                string storedHashedPassword = reader["Password"].ToString();
                                if (BCrypt.Net.BCrypt.Verify(password, storedHashedPassword))
                                {
                                    User user = new User
                                    {
                                        UserId = reader.GetGuid(reader.GetOrdinal("UserId")),
                                        Username = reader.GetString(reader.GetOrdinal("Username")),
                                        Fullname = reader.GetString(reader.GetOrdinal("Fullname")),
                                        Email = reader.GetString(reader.GetOrdinal("Email")),
                                        DateOfBirth = reader.GetString(reader.GetOrdinal("DateOfBirth")),
                                        Announcements = reader.GetBoolean(reader.GetOrdinal("Announcements")),
                                        IsGlobalAdmin = reader.GetBoolean(reader.GetOrdinal("IsGlobalAdmin")),
                                        DateTime = reader.GetDateTime(reader.GetOrdinal("CreatedAt"))
                                    };
                                    return user;
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle exception (log it, rethrow it, etc.)
            }

            return null;
        }

        public bool UpdateUserProfile(UserProfile userProfile)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("UpdateUserProfile", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        // Add parameters
                        cmd.Parameters.AddWithValue("@UserId", userProfile.UserId);
                        cmd.Parameters.AddWithValue("@ProfileIconColor", (object)userProfile.ProfileIconColor ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@Bio", (object)userProfile.Bio ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@Gender", (object)userProfile.Gender ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@Twitter", (object)userProfile.Twitter ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@Facebook", (object)userProfile.Facebook ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@Instagram", (object)userProfile.Instagram ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@FavoritePokemonName", (object)userProfile.FavoritePokemonName ?? DBNull.Value);
                        cmd.Parameters.AddWithValue("@FavoritePokemonImage", (object)userProfile.FavoritePokemonImage ?? DBNull.Value);

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
