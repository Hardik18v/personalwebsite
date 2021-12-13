let btn = document.querySelector("#btn");
let displaydiv = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  if (displaydiv.style.display != "flex") {
    displaydiv.style.display = "flex";
    btn.innerHTML = `<img src="./Img/upload.png" alt="">`;
  } else {
    displaydiv.style.display = "none";
    btn.innerHTML = `<img src="./Img/down-arrow.png" alt="">`;
  }
});