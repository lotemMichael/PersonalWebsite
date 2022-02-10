


/* about-scripts */
/* implement the dark effect on each grid item.
When the mouse is over a specific item it adds the img-darken style to the background,
and removes it when the mouse is out. */
const aboutItems = document.querySelectorAll('.about-item-wrapper') 

aboutItems.forEach(aboutItem => {
    aboutItem.addEventListener('mouseover', () => {
        console.log(aboutItem.childNodes[1].classList);
        aboutItem.childNodes[1].classList.add('img-darken');

    })

    aboutItem.addEventListener('mouseout', () => {
        aboutItem.childNodes[1].classList.remove('img-darken');
    })
})


/* contact-scripts */

/* validate function that checks the follow inputs conditions:
1. full name - at least 5 characters.
2. valid email (using a REGEX that I found on google).
3. message - at least 30 characters. 
if one of the above conditions doesn't exist the function pops a short error message with the missing condition. 
when all three conditions exist, the function pops an alert that the message has been sent successfully.  */
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
       
    error_message.style.padding = "10px";

    var text;
    if(name.length < 5){
    text = "Please Enter Your Full Name";
    error_message.innerHTML = text;
    return false;
    }      

    const emailRegex = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
    if(!email.match(emailRegex)){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
    }

    if(message.length <= 30){
    text = "Please Enter More Than 30 Characters";
    error_message.innerHTML = text;
    return false;
    }

    alert("Your message has been sent succesfully!");
    return true;
}