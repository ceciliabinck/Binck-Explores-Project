/** 
 * Load function for retrieving local JSON file.
 */
window.onload = function() {
    fetch(`assets/json/gallery.json`)
        .then(response => response.json())
        .then(data => {
            loadData(data)
            console.log("step one")
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

    $("img").click(function() {
        $('#modal-img').empty();
        $("#descript").empty();
        console.log("hello")
        $("#modal-img").append(`<img class="img-fluid" src="${imageDetails[6].imagesrc}"/>`);
        $("#descript").append(`<p>${imageDetails[6].description}</p>`);
        console.log("step 3")
    });

}



/*$("this img").click(function() {

    $("#modal-img").append(`<img id="model-img" class="img-fluid" src="${this.src}"/>`);
    $("#descript").append(`<p id="descript">${this.alt}</p>`);
})*/



/*$(("this").attr("src"))
    .click(function() {
        console.log("game")
    })

let img = {
    popimg = src,
    popdes = alt,
    popup = $("this").click(function() {
        $("#modal-img").append(`<img id="model-img" class="img-fluid" src="${this.src}"/>`);
        $("#descript").append(`<p id="descript">${this.alt}</p>`)
    })
}*/