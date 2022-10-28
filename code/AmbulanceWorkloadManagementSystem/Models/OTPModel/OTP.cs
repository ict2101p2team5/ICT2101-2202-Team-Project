namespace AmbulanceWorkloadManagementSystem.Models.OTPModel
{
    public class OTP
    {
        public string? OneTimePassword { get; set; }

        public OTP() { }

        public OTP(string? oneTimePassword)
        {
            OneTimePassword = oneTimePassword;
        }
    }
}
