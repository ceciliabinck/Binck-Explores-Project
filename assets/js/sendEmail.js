function sendMail(contactForm) {
    emailjs.send("gmail", "binck_explores", {
        "from_first_name": contactForm.first_name.value,
        "from_last_name": contactForm.last_name.value,
        "from_email": contactForm.email.value,
        "interested_in": contactForm.interested_in.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            alert("Thank you for your email. We have received it.");
        },
        function(error) {
            alert("Sorry your email failed to reach us. Please try again later.")
        }
    );
    return false;
}
