function sendMail(contactForm) {
    emailjs.send("gmail", "binck_explores", {
        "from_first_name": contactForm.first_name.value,
        "from_last_name": contactForm.last_name.value,
        "from_email": contactForm.emailaddress.value,
        "interested_in": contactForm.interested.value,
        "message_request": contactForm.messagesummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error)
        }
    );
    return false;
}

