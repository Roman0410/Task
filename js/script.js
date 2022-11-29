const confiq = {
  0: {
    src: "../img/Marketing.jpg",
    Name: "Кевін",
    Number: "+38 (097) 001 01 00",
  },
  1: {
    src: "../img/Front_end.jpg",
    Name: "Клара",
    Number: "+38 (097) 221 21 22",
  },
  2: {
    src: "../img/ui.jpg",
    Name: "Джон",
    Number: "+38 (097) 331 31 33",
  },
};
const logo = document.querySelector(".logo-img");
const user = document.querySelector(".user");
const tell = document.querySelector(".footer-tel");
function getRandomInt(max) {
  const random = Math.floor(Math.random() * max);
  logo.src = confiq[random].src;
  user.innerHTML = confiq[random].Name;
  tell.innerHTML = confiq[random].Number;
}
getRandomInt(3);
