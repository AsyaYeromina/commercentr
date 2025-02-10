var body = document.querySelector(".body");
var header = document.querySelector(".header");
var burgerButton = document.querySelector(".header-burger-button");
var overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

if (body !== null && header !== null && burgerButton !== null) {

  if (!body.classList.contains("body--header-collapsed")) {
    body.classList.add("body--header-modal");
  }

  burgerButton.addEventListener("click", function () {
    body.classList.toggle("body--header-collapsed");
    body.classList.add("body--header-modal");

    if (body.classList.contains("body--header-collapsed")) {
      body.classList.remove("body--header-modal");
    }
  });
}

// Body on other pages (not index) should has "body--header-collapsed" class
