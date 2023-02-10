var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error');





function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML="Name required";
        return false;
    }
    if(!name.match("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")){
    nameError.innerHTML = 'Write full name';
    return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
    }



function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
}   

    if(!email.match( /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;


}

function validateSubject(){
    var subject = document.getElementById('contact-subject').value;

    if(subject.length == 0){
        subjectError.innerHTML = "Subject is required";
        return false;
    }

    subjectError.innerHTML =  '<i class="bi bi-check-circle-fill"></i>';
    return true;
}


function validateMessage()
{
    var message = document.getElementById('contact-message').value;

    if(message.length == 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    messageError.innerHTML =  '<i class="bi bi-check-circle-fill"></i>';
    return true;
}


function validateForm(){
    let emailError = validateEmail()
    let nameError = validateName()
    let subjectError = validateSubject()
    let messageError = validateMessage()
    if(!emailError || !nameError || !subjectError || !messageError )
    {
        submitError.style.display = 'block';
        submitError.innerHTML = "Error found!";
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
    else{
        alert("Response submitted")
    }
}