const TOKEN = "5945730185:AAGoxeOONS3CkZJVHlpCwIqlAJ1yp9OtLHs";
const CHAT_ID = "-1001812054997";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка з сайту</b>\n`;
  message += `<b>Ім'я відправника:</b> ${this.name.value}\n`;
  message += `<b>Прізвище відправника:</b> ${this.lastname.value}\n`;
  message += `<b>Телефон відправника:</b> ${this.usertell.value}\n`;
  message += `<b>Пошта відправника:</b> ${this.usermail.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.lastname.value = "";
      this.usertell.value = "";
      this.usermail.value = "";
    });
});
