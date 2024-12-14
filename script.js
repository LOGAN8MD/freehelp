
// JavaScript to handle scroll event and add/remove class for navbar styling
window.onscroll = function() {
    // Get the navbar element
    var navbar = document.getElementById("navbar");
    var navElement = document.querySelector('.fixNav');

// Change the 'top' value to '0rem'


    // Check the page scroll position
    if (window.scrollY > 600) { // Change this value based on when you want the color to change
        navbar.classList.add("scrolled");
        navElement.style.top = '0rem';
        navbar.style.visibility = "visible";
         // Add 'scrolled' class when scrolled down
    } 
    else if (window.scrollY < 600 && window.scrollY >50){
        navbar.style.visibility = "hidden";
    }
    else {
        navbar.classList.remove("scrolled"); // Remove 'scrolled' class when on top
        navElement.style.top = '2rem';
        navbar.style.visibility = "visible";
    }
};

// Initialize EmailJS with your user ID (replace "user_xxx" with your actual user ID)
// (function() {
//     emailjs.init("JqG3qkYOmgxuLj1Yn");  // Replace "user_xxx" with your EmailJS user ID
// })();



// document.querySelector('.contact_form').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevents the default form submission behavior

//     // Get form values
//     var firstName = document.getElementById('first_name').value;
//     var lastName = document.getElementById('last_name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     console.log(firstName);
//     console.log(lastName);
//     console.log(email);
//     console.log(message);


//     // Define template parameters for EmailJS
//     var templateParams = {
//         first_name: firstName,
//         last_name: lastName,
//         email: email,
//         message: message
//     };


//     const serviceID = "service_9bf8mbl"
//     const templateID = "template_nny7glx"
  
//     emailjs.sendForm(serviceID, templateID,    this).then(
//       () => {
//         value = "Sen  d Email"
//         alert("Sent!")
//       },
//       (err) => {
//         value = "Send Email"
//         alert(JSON.stringify(err))
//       },
//     )


// });




// Initialize EmailJS with your user ID
(function() {
    emailjs.init("JqG3qkYOmgxuLj1Yn");  // Replace "user_xxx" with your EmailJS user ID
})();

document.querySelector('.contact_form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission behavior

    // Get form values
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log(firstName);
    console.log(lastName);
    console.log(phone);
    console.log(email);
    console.log(message);

    // Define template parameters for EmailJS
    var templateParams = {
        first_name: firstName,
        last_name: lastName,
        phone:phone,
        email: email,
        message: message
    };

    const serviceID = "service_9bf8mbl";
    const templateID = "template_nny7glx";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            // Show success pop-up
            document.getElementById("popup").style.display = "flex";
        },
        (err) => {
            alert(JSON.stringify(err)); // Handle error
        }
    );
});

// Handle closing the pop-up and resetting the form
document.getElementById("closePopup").addEventListener('click', function() {
    // Hide the pop-up
    document.getElementById("popup").style.display = "none";

    // Reset the form and enable it for a new submission
    document.querySelector('.contact_form').reset();
});

