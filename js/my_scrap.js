$(document).on("click",'.default-star',function () {
    $(this).replaceWith('<i class="fas fa-star full-star"></i>');
})
$(document).on("click",'.full-star',function () {
    $(this).replaceWith('<i class="far fa-star default-star"></i>');
})