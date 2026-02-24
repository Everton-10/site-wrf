const principal = document.getElementById("imgPrincipal");
const thumbs = document.querySelectorAll(".imovel-thumbs img");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    principal.src = img.src;
  });
});

// Lógica para abrir o vídeo em um modal
const modal = document.getElementById("videoModal");
const video = document.getElementById("videoPlayer");
const fechar = document.querySelector(".fechar-modal");

document.querySelector(".video-thumb").addEventListener("click", function () {
  modal.classList.add("ativo");
  video.play();
});

fechar.addEventListener("click", function () {
  modal.classList.remove("ativo");
  video.pause();
  video.currentTime = 0;
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("ativo");
    video.pause();
    video.currentTime = 0;
  }
});
