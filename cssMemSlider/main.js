import mems from "./slide.json" assert { type: "json" };

const btnWrapper = document.querySelector(".button__wrapper");
const container = document.querySelector(".container");
let idBtn = "1";
btnWrapper.addEventListener("click", (e) => {
  console.log(e.target.id);
});

window.addEventListener("click", (e) => {
  if (idBtn === "1") {
    container.innerHTML = `<img class="img" src=${
      mems[e.target.id - 1].img
    } alt=""/>
        <p class="text">${mems[e.target.id - 1].text}</p>`;
  }
});
