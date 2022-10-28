namespace AmbulanceWorkloadManagementSystem.Models.UserModel
{
    public class User
    {
        public string? EmployeeID { get; set; }
        public string? Password { get; set; }
        public int EmployeeLevel { get; set; }

        public User() { }

        public User(string? employeeID, string? password, int employeeLevel)
        {
            EmployeeID = employeeID;
            Password = password;
            EmployeeLevel = employeeLevel;
        }
    }
}
