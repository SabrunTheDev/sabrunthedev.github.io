var i = 0;
var txt = 'Sabrun Sabri';
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h1typingeffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Call the typeWriter function
typeWriter();