const Clickmore = () => {
  var a = document.querySelectorAll(".info");
  const flag = Math.floor(Math.random() * a.length);
  // console.log(flag);
  a[flag].classList.add("enable");
  setTimeout(() => {
    a[flag].classList.remove("enable");
  }, 3000);
};
