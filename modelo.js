function load() {
  var msg = document.querySelector("div#msg");
  var img = document.getElementById("image");
  var date = new Date();
  var hour = date.getHours();
  msg.innerHTML = `Agora são ${hour} horas.`;

  if (hour <= 4) {
    //Madrugada
    img.src = "imageedawn1.jpg";
    document.body.style.background = "#100e02";
    msg2.innerHTML = "Bons sonhos!";
  } else if (hour <= 11) {
    //Manhã
    img.src = "imagemorning1.jpg";
    document.body.style.background = "#c18c64";
    msg2.innerHTML = "Tenha um bom dia!";
  } else if (hour <= 18) {
    //Tarde
    img.src = "imageafternoon1.jpg";
    document.body.style.background = "#d7b554";
    msg2.innerHTML = "Tenha uma boa tarde!";
  } else {
    //Noite
    img.src = "imageenight1.jpg";
    document.body.style.background = "#203e58";
    msg2.innerHTML = "Tenha uma boa noite!";
  }
}
