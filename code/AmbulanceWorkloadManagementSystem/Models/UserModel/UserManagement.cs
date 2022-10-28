using AmbulanceWorkloadManagementSystem.Interfaces;

namespace AmbulanceWorkloadManagementSystem.Models.UserModel
{
    public sealed class UserManagement : IUser
    {
        public static UserManagement Instance
        {
            get
            {
                if (Instance is null)
                {
                    Instance = new UserManagement();
                }

                return Instance!;
            }
            private set => Instance = value;
        }

        private UserManagement() { }

        public User GetUser(string employeeID) 
        {
            // get from DB

            return new User(employeeID, "1234", 0);
        }
    }
}
