# Lotem's Website

## [Click here to checkout my personal-website](https://lotemmichael.github.io/PersonalWebsite/)

Here is short explanation of what you can find in my presonal website.

##  About page
 In my about page you can find a picture of myself and a short paragraph of my current status. At the bottom part of the page I implemented a 3*2 grid there you kind find more about me (education, employment and hobbies).


### Using java-script for Grid items dark effect
```
/* about-scripts */
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
```
I used js to implement the dark effect on each grid item. When the mouse is over a specific item it adds the img-darken style to the background and removes it when the mouse is out.

##  Contact page

In my contact page, I implemented a contact form where whoever will visit my site could contact me, 
by using the FormSubmit.co service - when a message is sent, it will be forward to my email with all the relevant details.
Also on this page, you can find links to my social-media pages and other contact details of me.


### Using java-script for input validation 
```
/* contact-scripts */
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

    alert("Your message has been sent successfully!");
    return true;
}
```

I implemented a function that checks the follow inputs:
1. full name - at least 5 characters.
2. valid email (using a REGEX that I found on google).
3. message - at least 30 characters. 

if one of the above conditions doesn't exist the function pops a short error message with the missing condition. 
when all three conditions exist, the function pops an alert that the message has been sent successfully. 


## Inspiration 
the inspiration for my website was from the next tutorial's:

1. [Learn How to Build a Professional Website | Udemy, Jordan Hudgens](https://www.youtube.com/watch?v=5bMdjkfvONE&list=RDCMUCzw4hbQIePVtyJQzE_F8QDg&index=1)
2.  [Create a Responsive Transparent Contact Form using HTML & CSS](https://www.youtube.com/watch?v=p_QjYcQV1Bc&t=576s)
3. [Contact Us Form Validation Using Javascript | Form Validation In Javascript](https://www.youtube.com/watch?v=WY4rvU4ImgE)
