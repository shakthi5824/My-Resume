window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});



document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.textContent = "All fields are required.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Sending...";
    status.style.color = "blue";

    try {
        let response = await fetch("your-api-url-here", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            status.textContent = "Message sent successfully!";
            status.style.color = "green";
            document.getElementById("contactForm").reset();
        } else {
            status.textContent = "Something went wrong. Try again!";
            status.style.color = "red";
        }

    } catch (error) {
        status.textContent = "Network error!";
        status.style.color = "red";
    }
});






//    const form = document.getElementById("contactForm");
// const statusMsg = document.getElementById("formStatus");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

//     statusMsg.innerHTML = "Sending...";

//     emailjs.send("zBvVotvtI6yUgAg7e", "zBvVotvtI6yUgAg7e", params)
//     .then(function(response) {
//         statusMsg.style.color = "green";
//         statusMsg.innerHTML = "Message sent successfully!";
//         form.reset();
//     }, function(error) {
//         statusMsg.style.color = "red";
//         statusMsg.innerHTML = "Failed to send message. Try again!";
//     });
// });





// const form = document.getElementById("contactForm");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Input values
//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let message = document.getElementById("message").value.trim();

//     // Error element references
//     let nameError = document.getElementById("nameError");
//     let emailError = document.getElementById("emailError");
//     let messageError = document.getElementById("messageError");
//     let statusMsg = document.getElementById("formStatus");

//     // Reset messages
//     nameError.textContent = "";
//     emailError.textContent = "";
//     messageError.textContent = "";
//     statusMsg.textContent = "";

//     let isValid = true;

//     // Name validation
//     if (name === "") {
//         nameError.textContent = "Name is required!";
//         isValid = false;
//     }

//     // Email validation (simple regex)
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email === "") {
//         emailError.textContent = "Email is required!";
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         emailError.textContent = "Enter a valid email!";
//         isValid = false;
//     }

//     // Message validation
//     if (message === "") {
//         messageError.textContent = "Message is required!";
//         isValid = false;
//     } else if (message.length < 10) {
//         messageError.textContent = "Message must be at least 10 characters!";
//         isValid = false;
//     }

//     // If valid → success message
//     if (isValid) {
//         statusMsg.style.color = "green";
//         statusMsg.textContent = "Form submitted successfully!";
//         form.reset();
//     }
// });


function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_0bzsrmm","template_d41tpwq",parms).then(alert("Email Sent!!"))
}






 


            

