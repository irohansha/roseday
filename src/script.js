/* Typewriter Effect */
const text = document.getElementById("typewriter").innerText;
let index = 0;
document.getElementById("typewriter").innerText = "";

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").innerText += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();

/* Reveal message */
function reveal() {
  document.getElementById("hiddenText").style.display = "block";
}

/* Floating hearts */
const bg = document.querySelector(".hearts-bg");
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 4 + 4 + "s";
  bg.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 500);

/* Click heart burst */
document.addEventListener("click", e => {
  const h = document.createElement("div");
  h.className = "click-heart";
  h.innerHTML = "❤️";
  h.style.left = e.pageX + "px";
  h.style.top = e.pageY + "px";
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 1200);
});
