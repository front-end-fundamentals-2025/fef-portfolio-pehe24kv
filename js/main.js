const main = document.getElementById("main");

main.addEventListener("click", function (event) {
  if (main.style.width == "40%") {
    main.style.width = "20%";
  } else {
    main.style.width = "40%";
  }
});
