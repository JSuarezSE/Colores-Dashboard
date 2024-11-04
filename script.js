function cambioNav() {
  $(".navbar").css("background-color", `${$(".form-control-color").val()}`);
}
function cambioLetra() {
  $(".navbar-brand").css("color", `${$("#exampleColorInput1").val()}`);
}
function cambioBtnNav() {
  $(".btn-cambio").css({
    "background-color": `${$("#exampleColorInput2").val()}`,
    border: `1px solid ${$("#exampleColorInput2").val()}`,
  });
}
function cambioBordeNav() {
  $(".navbar").css(
    "border-bottom",
    `1px solid ${$("#exampleColorInput3").val()}`
  );
}
function cambioSide() {
  $(".sidebar").css("background-color", `${$("#exampleColorInput4").val()}`);
}
function cambioLetraSide() {
  $(".sidebar").css("color", `${$("#exampleColorInput5").val()}`);
}
function cambioBordeSide() {
  $(".sidebar").css(
    "border-right",
    `1px solid ${$("#exampleColorInput6").val()}`
  );
}
function cambioContent() {
  $(".main").css("background-color", `${$("#exampleColorInput7").val()}`);
}
function cambioContentTit() {
  $(".main-content h1").css("color", `${$("#exampleColorInput8").val()}`);
}
function cambioContentP() {
  $(".main-content p").css("color", `${$("#exampleColorInput9").val()}`);
}
function cambioScroll() {
  $("html").css(
    "scrollbar-color",
    `${$("#exampleColorInput10").val()} ${$("#exampleColorInput11").val()}`
  );
}
$("button[data-action]").on("click", function () {
  const action = $(this).data("action"); // Obtiene la función desde el data-action
  if (typeof window[action] === "function") {
    // Verifica que la función exista
    window[action](); // Llama a la función
  }
});
