document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("text").textContent = "กดปุ่มแล้วนะ 😊";
});

document.getElementById("btn1").addEventListener("click", function () {
  this.textContent = "ถูกกดแล้ว!";
});
document.getElementById("btn2").addEventListener("click", function () {
  this.style.color = "red";
});
document.getElementById("nextBtn").addEventListener("click", function () {
  window.location.href = "page2.html";
});

