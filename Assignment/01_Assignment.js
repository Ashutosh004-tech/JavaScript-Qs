// create a function that generate a 4 digit OTP

const OTP = function () {
  const val = Math.floor(Math.random() * 9000 + 1000);
  return val;
};
let otpval = OTP();
console.log(otpval);

let userEnterOtp = prompt("Enter OTP"); // Effor if it execute using bash/command prompt

if (otpval == userEnterOtp) {
  console.log("Logged in");
} else {
  console.log("Invalid Otp");
}
