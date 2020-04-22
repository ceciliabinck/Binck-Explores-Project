/*var caption = document.querySelector("#gallery figcaption"),
    thumbs = document.getElementById("thumbs"),
    fullsize = document.getElementById("fullsize");
thumbs.addEventListener("click", function(e) {
    var filename = e.target.src.split("/").pop();
    fullsize.src = "assets/img/Gallery/full" + filename;
    caption.innerHTML = e.target.alt;
})*/

/** 
 * Load function for retrieving local JSON file.
 */
window.onload = function() {
    fetch(`assets/json/gallery.json`)
        .then(response => response.json())
        .then(data => {

            loadData(data)

        })
        .catch(error => {

                console.log(error)

            }

        );

}

function loadData(dataSource) {
    let imageDetails = dataSource;
    console.log(imageDetails)
}



$("input").click(function() {




});