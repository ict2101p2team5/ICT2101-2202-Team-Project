using AmbulanceWorkloadManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AmbulanceWorkloadManagementSystem.Controllers
{
    public class StaffController : Controller
    {
        // GET: StaffController
        public ActionResult Index()
        {
            return View();
        }
    }
}
