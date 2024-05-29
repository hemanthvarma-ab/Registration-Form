function validateform(){
    var name=document.getElementById('name').value;
    var zipCode=document.getElementById('zipcode').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var mobile=document.getElementById('mobile no').value;
    var email_Reg=/^[a-zA-Z0-9._-]+@vitstudent\.ac\.in$/;
    var password_Reg=/^(?=(?:[^A-Z]*[A-Z]){1,})(?=(?:[^a-z]*[a-z]){1,})(?=(?:\D*\d){1,})(?=(?:[^\W_]*[\W_]){1,}).{10,100}$/;
    var error_message="";
    if (!name || !email || !zipCode || !password || !mobile){
        error_message+="All fields are mandatory\n";
    }
    if (!zipCode.match(/^\d{5}$/)){
        error_message+="Zip code should be exactly five digits\n";
    }
    if (!email.match(email_Reg)){
        error_message+="Email validation allows only VIT mails\n";
    }
    if (!password.match(password_Reg)){
        error_message+="Password conditions not met\n";
    }
    if (!mobile.match(/^\d{10}$/)){
        error_message+="Mobile number should be 10 digits only\n";
    }
    if (error_message!==""){
        alert(error_message);
        return false;
    }
    if (error_message===""){
        alert("Registered successfully!");
        return true;
    }
}