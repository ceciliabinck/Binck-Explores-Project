function sendMail(contactForm) {
    console.log("check");
    emailjs.send("gmail", "binck_explores", {
        "from_first_name": contactForm.first_name.value,
        "from_last_name": contactForm.last_name.value,
        "from_email": contactForm.email.value,
        "interested_in": contactForm.interested_in.value,
        "message": contactForm.message.value,
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


function sendMailclick(function(){
    let successMsg = "Thanks for your email it has been successful";
    let failMessage = "Sorry your email failed to reach us. Please try again later";
    `$("#ID).append(<p>${successMsg}</p>)`
})