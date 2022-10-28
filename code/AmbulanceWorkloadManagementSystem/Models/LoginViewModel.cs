using AmbulanceWorkloadManagementSystem.Models.UserModel;
using AmbulanceWorkloadManagementSystem.Models.OTPModel;

namespace AmbulanceWorkloadManagementSystem.Models
{
    public class LoginViewModel
    {
        public User? User { get; set; }
        public OTP? OTP { get; set; }
    }
}
