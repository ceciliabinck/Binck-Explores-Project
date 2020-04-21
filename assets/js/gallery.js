var caption = document.querySelector("#gallery figcaption"),
    thumbs = document.getElementById("thumbs"),
    fullsize = document.getElementById("fullsize");
thumbs.addEventListener("click", function(e) {
    var filename = e.target.src.split("/").pop();
    fullsize.src = "assets/img/Gallery/full" + filename;
    caption.innerHTML = e.target.alt;
})

function popupImg(params) {

}