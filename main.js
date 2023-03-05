let btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let adsoyad = document.querySelector(".adsoyad_input");
  let email = document.querySelector(".email_input");
  let telefon = document.querySelector(".telefon_input");
  let movzu = document.querySelector(".movzu_input");
  let mesaj = document.querySelector(".mesaj_input");
  let body = `Name:${adsoyad.value}  Email:${email.value}  Telefon:${telefon.value}  Movzu:${movzu.value}  Mesaj:${mesaj.value}`;

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1081981007563071618/TCoHFtnyDnGLxnvydKbXsPO2xmoVsNFK7xNLt1wJOAq9_VDbNY4RzOTmB14OQ-V5Yqwd"
  );
  request.setRequestHeader("Content-type", "application/json");
  var params = {
    content: body,
  };

  request.send(JSON.stringify(params));
  sleep(2000);
  adsoyad.value = "";
  email.value = "";
  telefon.value = "";
  movzu.value = "";
  mesaj.value = "";
  // Email.send({
  //   Host: "smtp.gmail.com",
  //   Username: "nirvanagencyaz@gmail.com",
  //   Password: "fcgvnuguobdrnmka",
  //   To: "nirvanagency@gmail.com",
  //   From: "you@isp.com",
  //   Subject: "This is the subject",
  //   Body: body,
  // }).then((message) => alert(message));
});

// let buy = document.querySelectorAll(".buy_btn");
// buy.addEventListener("click",()=>{
//     console.log({buy})
// })