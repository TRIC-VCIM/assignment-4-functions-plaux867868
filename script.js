//Fuction 1

function divColor() {
  var name = prompt("What is your name?").length;
  if (name === 2) {
    document.querySelector("#hero").className = "purple";
  }

  else if (name === 3) {
    document.querySelector("#hero").className = "green";
  }

    else if (name === 4) {
    document.querySelector("#hero").className = "red";
  }

    else if (name === 5) {
    document.querySelector("#hero").className = "yellow";
  }

    else if (name === 6) {
    document.querySelector("#hero").className = "blue";
  }

    else if (name === 7) {
    document.querySelector("#hero").className = "orange";
  }

    else if (name === 8) {
    document.querySelector("#hero").className = "teal";
  }

    else if (name === 9) {
    document.querySelector("#hero").className = "skyblue";
  }

    else if (name === 10) {
    document.querySelector("#hero").className = "royalblue";
  }

    else if (name === 11) {
    document.querySelector("#hero").className = "brown";
  }

    else if (name === 12) {
    document.querySelector("#hero").className = "gold";
  }

return name;

}

divColor();

//Function 2

function fontChange() {
  var dayBorn = prompt("What day were you born?");
  if (dayBorn >= 1 && dayBorn <= 5 ) {
    document.querySelector("p").className = "impact";
  }

  else if (dayBorn >=6 && dayBorn <= 10) {
    document.querySelector("p").className = "franklin";
  }

  else if (dayBorn >=11 && dayBorn <= 15) {
    document.querySelector("p").className = "lucida";
  }

  else if (dayBorn >=16 && dayBorn <= 20) {
    document.querySelector("p").className = "georgia";
  }

  else if (dayBorn >=21 && dayBorn <= 25) {
    document.querySelector("p").className = "gill";
  }

  else if (dayBorn >=26 && dayBorn <= 31) {
    document.querySelector("p").className = "cambria";
  }

return dayBorn;

}

fontChange();

//function 3

function randomImage() {
  var number = prompt ("What is your name?").length;
  var randomNumber = Math.floor(Math.random() * number) +1;
  console.log(randomNumber);

  if (randomNumber <= 2) {
    document.querySelector("img").src = "images/image-2.jpg";
  }

  else if (randomNumber === 3) {
    document.querySelector("img").src = "images/image-3.jpg";
  }

    else if (randomNumber === 4) {
    document.querySelector("img").src = "images/image-4.jpg";
  }

    else if (randomNumber === 5) {
    document.querySelector("img").src = "images/image-5.jpg";
  }

    else if (randomNumber === 6) {
    document.querySelector("img").src = "images/image-6.jpg";
  }

    else if (randomNumber === 7) {
    document.querySelector("img").src = "images/image-7.jpg";
  }

    else if (randomNumber === 8) {
    document.querySelector("img").src = "images/image-8.jpg";
  }

    else if (randomNumber === 9) {
    document.querySelector("img").src = "images/image-9.jpg";
  }

    else if (randomNumber === 10) {
    document.querySelector("img").src = "images/image-10.jpg";
  }

    else if (randomNumber === 11) {
    document.querySelector("img").src = "images/image-11.jpg";
  }

    else if (randomNumber >= 12) {
    document.querySelector("img").src = "images/image-12.jpg";
  }

  return number;

}

randomImage();