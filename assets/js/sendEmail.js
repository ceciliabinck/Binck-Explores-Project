function sendMail(contactForm) {
            /**
         * It will send the form with these data
         */
    emailjs.send("gmail", "binck_explores", {
        "from_first_name": contactForm.first_name.value,
        "from_last_name": contactForm.last_name.value,
        "from_email": contactForm.email.value,
        "interested_in": contactForm.interested_in.value,
        "message": contactForm.message.value,
    })
    .then(
        /**
         * Alert when form is send correctly
         */
        function(response) {
            alert("Thank you for your email. We have received your email.");
        },
                /**
         * Alert when form is send wrong
         */
        function(error) {
            alert("Sorry your email failed to reach us. Please try again later.")
        }
    );
    return false;
}
