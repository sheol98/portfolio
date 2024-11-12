function burger() {
  const burgerEl = document.getElementById("burger");
  const menu = document.getElementById("menu");
  burgerEl.addEventListener("click", () => {
    burgerEl.classList.toggle("active");
    menu.classList.toggle("active");
  });
}
burger();

document.getElementById("menu").addEventListener("click", (e) => {
  let thisEL = e.target;
  if (thisEL.tagName === "A") {
    let itemList = document.getElementsByClassName("menu__link");
    for (const el of itemList) {
      el.classList.remove("active");
    }
    thisEL.classList.add("active");

    let sectionsList = document.getElementsByClassName("section");
    for (const el of sectionsList) {
      el.style = "display: none";
    }
    if (thisEL.getAttribute("href") === "#home-page")
      document.getElementById("home-page").style = "display:block";
    else if (thisEL.getAttribute("href") === "#about")
      document.getElementById("about").style = "display:block";
    console.log(itemList);
  }
});

// document.getElementById("menu").addEventListener("click", (e) => {
//   let thisEl = e.target;
//   if (thisEl.tagName === "A") {
//     let aList = document.getElementsByClassName("menu__link");
//     for (const el of aList) {
//       el.classList.remove("active");
//     }
//     thisEl.classList.add("active");

//     if (thisEl.getAttribute("href") === "#about") {
//       console.log("About");
//       document.getElementsByClassName("main-home__cnt")[0].innerText = "About";
//     } else if (thisEl.getAttribute("href") === "#home-page") {
//       document.getElementsByClassName("main-home__cnt")[0].innerText =
//         "home-page";
//     } else if (thisEl.getAttribute("href") === "#projects") {
//       document.getElementsByClassName("main-home__cnt")[0].innerText =
//         "projects";
//     }
//   }
// });
