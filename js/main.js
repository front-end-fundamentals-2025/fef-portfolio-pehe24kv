const main = document.getElementById("main");

main.addEventListener("click", function (event) {
  if (main.style.width == "500px") {
    main.style.width = "100px";
  } else {
    main.style.width = "500px";
  }
});
