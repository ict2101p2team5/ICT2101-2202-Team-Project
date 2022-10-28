namespace AmbulanceWorkloadManagementSystem.Models.StaffAvailabilityModel
{
    public class StaffAvailability
    {
        public int StaffAvailabilityID { get; set; }
        public bool Available { get; set; }
        public string? Role { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string? EmployeeID { get; set; }

        public StaffAvailability(int staffAvailabilityID, bool available, string? role, DateTime startTime, DateTime endTime, string? employeeID)
        {
            StaffAvailabilityID = staffAvailabilityID;
            Available = available;
            Role = role;
            StartTime = startTime;
            EndTime = endTime;
            EmployeeID = employeeID;
        }
    }
}
