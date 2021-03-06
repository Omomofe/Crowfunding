//jshint esversion:8

const bookmarkOne = document.getElementById("bookmark-one");
const hamburger = document.querySelector(".hamburger");
const listDiv = document.querySelector(".sidebar ul");
console.log(bookmarkOne);
let backBtn = document.getElementById("back-button");
let hr = document.querySelector("rule");
let pledge = document.querySelector(".modal-pledge, #back-button");
let bookmark = document.querySelector("#bookmark");
const heroButtons = document.querySelector("#hero-buttons");
const bookmarkIcon = bookmark.childNodes[1].childNodes[1].childNodes[1];
const bookmarkText = document.querySelector("#bookmark-text");
var pledgeBtn = document.querySelectorAll(".pledge-btn ");
var closeModal = document.querySelector(".close-modal");
let overlay = document.getElementById("blur");
let modal = document.getElementById("modal");
var card = document.querySelector(".modal .modal-check .check");
let bar = document.getElementById("bar");
let end = document.getElementById("finish");
let modalSuccess = document.getElementById("modal-success");
let backed = 89914;
let backers = 5007;
const formatter = new Intl.NumberFormat("en");
console.log(backBtn);

showStat();
progressBar();

modal.addEventListener('click', (e) => {
  const box = document.querySelectorAll(".modal .modal-check .check");
  const id = e.target.id;
  console.log(id);
  if (id === "first" || id === "second" || id === "third") {
    box.forEach((item) => {
      item.classList.remove("modal-active");
      item.children[2].style.display = "none";
      e.target.parentElement.parentElement.classList.add("modal-active");
      e.target.parentElement.parentElement.querySelector(".modal-pledge").style.display = "flex";
    });
  }else if (id === "continue") {
    const value = document.querySelector(".modal-inputs .number").value;
    backed += Number(value);
    backers ++;
    showStat();
    progressBar();
    show();
  } {

  }

});
hamburger.addEventListener('click', () => {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "flex";
  } else {
    listDiv.style.display = "none";
  }
});
heroButtons.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id === "bookmark"){
    if (bookmarkText.innerText === "Bookmark")  {
      bookmarkIcon.setAttribute("fill", "rgb(20, 123, 116)");
      bookmark.style.width = "195px";
      bookmarkText.innerText = "Bookmarked";
      bookmarkText.style.color = "rgb(20, 123, 116)";
    }else {
      bookmarkText.innerText = "Bookmark";
      bookmarkText.style.color = "hsl(0, 0%, 48%)";
      bookmark.style.width = "180px";
      bookmarkIcon.setAttribute("fill", "#2f2f2f");

    }
  }else if (e.target.id === "back-button") {
    scrollUp();
    show();
  }else if (e.target.id === "bookmark-one") {
    if (bookmarkOne.getAttribute("fill") === "#2F2F2F") {
      bookmarkOne.setAttribute("fill", "rgb(20, 123, 116)");
    }else {
      bookmarkOne.setAttribute("fill", "#2F2F2F");
    }
  }
});


pledgeBtn.forEach((item) => {
  item.addEventListener("click", () => {
    show();
    scrollUp();
  });
});

closeModal.addEventListener('click', () => {
  close();
} );

end.addEventListener("click", () => {
  close();
});



function show() {
  if (modal.classList.contains("hide")) {
    overlay.classList.remove("hide");
    modal.classList.remove("hide");
  }else {
    modal.classList.add("hide");
    modalSuccess.classList.remove('hide');
  }
}

function close() {
  if (!modal.classList.contains("hide")) {
    modal.classList.add("hide");
    overlay.classList.add("hide");
  }else {
    modalSuccess.classList.add("hide");
    overlay.classList.add("hide");
  }
}
function showStat() {
  const backedSpan = document.getElementById("amount-backed");
  const backersSpan = document.getElementById("total-backers");
  backedSpan.innerText = formatter.format(backed);
  backersSpan.innerText = formatter.format(backers);
}
function progressBar() {
  const progress = ((Number(backed) / 100000) * 100).toFixed(2);
  bar.style.width = progress + "%";
}


function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
