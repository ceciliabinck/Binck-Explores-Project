$("img").click(function() {
    /**Makes sure the id is empty before beginning */
    $('#modal-img').empty();
    $("#descript").empty();
    /**The path to get the data */
    let imageSource = $(this).attr("src");
    let imageDescription = $(this).attr("alt")
        /**putting the data in the modal */
    $("#modal-img").append(`<img class="img-fluid" src="${imageSource}"/>`);
    $("#descript").append(`<p>${imageDescription}</p>`);
})