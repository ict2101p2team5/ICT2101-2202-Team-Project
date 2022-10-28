namespace AmbulanceWorkloadManagementSystem.Models.JobAllocationModel
{
    public class JobAllocation
    {
        public int JobID { get; set; }
        public string? Status { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string? Role { get; set; }
        public string? EmployeeID { get; set; }

        public JobAllocation(int jobID, string? status, DateTime startTime, DateTime endTime, string? role, string? employeeID)
        {
            JobID = jobID;
            Status = status;
            StartTime = startTime;
            EndTime = endTime;
            Role = role;
            EmployeeID = employeeID;
        }
    }
}
