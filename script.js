const form=document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();

})

const validateInputs=()=>{
    const usernameValue = username.value.trim();
    const emaiValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordvalue =confirmPassword.value.trim();

    if(usernameValue===''){
        setError(username , 'Username is required');

    }else{
        setSuccess(username);
    }
    if(passwordValue===''){
        setError(password , 'password is required');
    }
    else if(passwordValue.length < 8){
        setError(password , 'Password must be at least 8 character');
    }
    else{
        setSuccess(password);
    }
    if(confirmPasswordvalue === ''){
        setError(confirmPassword , "please confirm your password");

    }
    else if(confirmPasswordvalue!==passwordValue){
        setError(confirmPassword ,"password doesnt match");
    }
    else{
        setSuccess(confirmPassword)
    }

    if(emaiValue===''){
        setError(email , "email is required");
    }
     else if(!isValidEmail(emaiValue)){
        setError(email , "provide a valid  email")
        ;
     }
     else{
        setSuccess(email);
     }
}

 const setError= (element , message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");
 }
const setSuccess = element=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText= '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}
function isValidEmail(email) {
    // Define the regular expression pattern
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the pattern
    return emailPattern.test(email);
}