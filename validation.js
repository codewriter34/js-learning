var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// function to validate input works
function validateName(){
  var name = document.getElementById("contact-name").value;
  if(name.length == 0){
    nameError.innerHTML = "Name is required";
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Only letters and spaces are required";
    return false;
  }
  if(name.length > 30){
    nameError.innerHTML = "Name most not be greater than 30";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
// for phone
function validatePhone(){
  var phone = document.getElementById("contact-phone").value;
  
  if(phone.length == 0){
     phoneError.innerHTML = "Phone is required";
     return false;
  }
  if(phone.match(/^[a-z][a-z\s]*$/)){
    phoneError.innerHTML = "Phone is requires only numbers";
    return false;
  }
  if(phone.length < 8 || phone.length > 13){
    phoneError.innerHTML = "Phone must be between 8-13 numbers ";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
// for email
function validateEmail(){
  var email = document.getElementById("contact-email").value;

  if(email.length == 0){
    emailError.innerHTML = "Email is required";
    return false;
  }
  if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML = "Invalid Email format"
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
//submit bttn
function validateForm(){
   if(!validateName() || !validatePhone() || !validateEmail()){
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix all errors";
    setTimeout(function(){ submitError.style.display = "none"; 9000});
    return false;
   }
}
