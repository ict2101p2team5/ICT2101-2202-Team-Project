using AmbulanceWorkloadManagementSystem.Models.OTPModel;
using AmbulanceWorkloadManagementSystem.Models.UserModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AmbulanceWorkloadManagementSystem.Controllers
{
    public class LoginController : Controller
    {
        // GET: LoginController
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult VerifyLogin(User user)
        {
            User verifyUser = UserManagement.Instance.GetUser(user.EmployeeID!);

            if (user.EmployeeID!.Equals(verifyUser.EmployeeID) && user.Password!.Equals(verifyUser.Password))
                ViewBag.VerifyOTP = true;
            else
                ViewBag.Alert = "Username or password is incorrect!";

            return View("Index");
        }

        [HttpPost]
        public ActionResult VerifyOTP(OTP otp) 
        {
            if (otp.OneTimePassword!.Equals("a&e"))
                return RedirectToAction("Index", "Staff");
            else
                ViewBag.Alert = "OTP is invalid!";

            return View("Index");
        }
    }
}
