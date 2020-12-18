let nav = $("#nav");

$("#navToggle").on("click", function(event) {
    event.preventDefault(); /* действие по умолчанию не выполнится */
    nav.toggleClass("show"); /* добавить класс */
})