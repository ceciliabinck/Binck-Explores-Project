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
        });
}

/** 
 * Get the loadData of set index to append in modal after clicking modal button.
 */
function loadData(dataSource) {
    let imageDetails = dataSource;

    $("#pic-pop").click(function() {
        $("#modal-img").append(`<img id="model-img" class="img-fluid" src="${imageDetails[3].imagesrc}"/>`);
        $("#descript").append(`<p id="descript">${imageDetails[3].description}</p>`);
        console.log("modal click test ")
    })
}