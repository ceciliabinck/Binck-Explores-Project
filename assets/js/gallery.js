/*var caption = document.querySelector("#gallery figcaption"),
    thumbs = document.getElementById("thumbs"),
    fullsize = document.getElementById("fullsize");
thumbs.addEventListener("click", function(e) {
    var filename = e.target.src.split("/").pop();
    fullsize.src = "assets/img/Gallery/full" + filename;
    caption.innerHTML = e.target.alt;
})*/



$("input").click(function() {
    console.log("Hello")
});

function getpopupImg() {
    fetch(`assets/json/gallery.json?image=${image-src}&description=${description}&type=text`)
    if (response) {

    }(response => response.json())
    .then(rawData => {
        generateQuestionsAnswers(rawData);
    });
    console.log("${description}");

};

/*let description = gallery.json
for (let i = 0; i < description.length; i++) {
    console.log(description[i] + "Hello");
let img = $(this).attr("src")
        let newimg = "image-src"
}*/