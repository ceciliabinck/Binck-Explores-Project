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
    /** 
     * get data and append in modal
     */

function loadData(dataSource) {
    let imageDetails = dataSource;
    // console.log(imageDetails)
    console.log(imageDetails[1].description)


    $("img").click(function() {
        $("#descript").append(`<p id="descript">${imageDetails[1].description}</p>`);
        console.log("modal click test ")




    })
}