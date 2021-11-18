let update = document.querySelector(".updateJs");
let TextTasck = document.querySelector(".list-contnta");
let parentTasck = document.querySelector(".Parent-tASKES");
let TaskDiv = document.querySelector(".tasck");
let stare = document.querySelector(".fa-star");
let blackWhight = document.querySelector(".buton-black-whight");
let trash = document.querySelector(".icon-trash");
let heart = document.querySelector(".icon-heart");
let logo = document.querySelector(".svg-logo");

blackWhight.addEventListener("click", function () {
  document.body.classList.toggle("activebackground");
  document.body.classList.toggle("activeColorWhfit");
});
// localStorage.setItem("div", JSON.stringify(TaskDiv));
update.addEventListener("click", (eo) => {
  let Task = `
  <div class="tasck">
  <span class="icon-star gold icon"></span>
  <p>${TextTasck.value}</p>
  <div class="trash-love">
  <span class="icon-trash icon"></span>
  <span class="icon-heart icon"></span>
  </div>
`;
  parentTasck.innerHTML += Task;
  TextTasck.value = "";
  TextTasck.focus();
  // window.localStorage.getItem("div");
  // ---------------------------

  // var key = "divTasck";
  // var taskLocalstoge = document.querySelector(".tasck");
  // var annotatextTextStringified = JSON.stringify(taskLocalstoge);
  // localStorage.setItem(key, annotatextTextStringified);
  // ---------------------------
  // let userData = TextTasck.value;
  // let getlocaStorage = localStorage.getItem("New Todo");
  // if (getlocaStorage == null) {
  //   listArr = [];
  // } else {
  //   listArr = JSON.parse(getlocaStorage);
  // }
  // listArr.push(userData);
  // localStorage.setItem("New Todo", JSON.stringify(listArr));
});

parentTasck.addEventListener("click", function (eo) {
  if (eo.target.className === "icon-star gold icon") {
    eo.target.classList.toggle("golden");
    parentTasck.prepend(eo.target.parentElement);
  } else {
    eo.target.classList.remove("golden");
  }
});

parentTasck.addEventListener("click", (eo) => {
  if (eo.target.className === "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  }
});

parentTasck.addEventListener("click", (eo) => {
  if (eo.target.className === "icon-trash icon") {
    heart.classList.toggle("redheat");
  } else if (eo.target.className === "icon-heart icon") {
    eo.target.classList.toggle("heartnone");
  } else {
    eo.target.classList.remove("heartnone");
  }
});

let arrow = document.querySelector(".arrwoi");

window.onscroll = function () {
  if (this.scrollY >= 400) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }
};

let btnarrow = document.querySelector(".btn-arrow");
btnarrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let slayjs = document.querySelector(".slay");

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 5000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 10000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 15000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 2000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 25000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 30000);

setTimeout(() => {
  slayjs.classList.add("noneslah");
}, 35000);

setTimeout(() => {
  slayjs.classList.remove("noneslah");
}, 40000);
