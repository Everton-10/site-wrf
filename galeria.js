const principal = document.getElementById("imgPrincipal");
const thumbs = document.querySelectorAll(".imovel-thumbs img");

if (principal && thumbs.length) {
  thumbs.forEach((img) => {
    img.addEventListener("click", () => {
      principal.src = img.src;
    });
  });
}

// Lógica para abrir o vídeo em um modal
const modal = document.getElementById("videoModal");
const video = document.getElementById("videoPlayer");
const fechar = document.querySelector(".fechar-modal");
const videoThumb = document.querySelector(".video-thumb");

function abrirVideoModal() {
  if (!modal || !video) return;
  modal.classList.add("ativo");
  video.play();
}

function fecharVideoModal() {
  if (!modal || !video) return;
  modal.classList.remove("ativo");
  video.pause();
  video.currentTime = 0;
}

if (videoThumb) {
  videoThumb.addEventListener("click", abrirVideoModal);
}

if (fechar) {
  fechar.addEventListener("click", fecharVideoModal);
}

if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      fecharVideoModal();
    }
  });
}
