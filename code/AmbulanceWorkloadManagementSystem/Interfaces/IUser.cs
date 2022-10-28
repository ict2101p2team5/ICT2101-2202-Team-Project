using AmbulanceWorkloadManagementSystem.Models.UserModel;

namespace AmbulanceWorkloadManagementSystem.Interfaces
{
    public interface IUser
    {
        public User GetUser(string employeeID);
    }
}
