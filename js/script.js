// Controla el flujo: carta cerrada → clic en «Ábreme» → carta abierta.
const closedView = document.getElementById('closedView');
const letterView = document.getElementById('letterView');
const openButton = document.getElementById('openLetter');
const closeButton = document.getElementById('closeLetter');

openButton.addEventListener('click', () => {
  closedView.hidden = true;
  letterView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeButton.focus({ preventScroll: true });
});

closeButton.addEventListener('click', () => {
  letterView.hidden = true;
  closedView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  openButton.focus({ preventScroll: true });
});

// Muestra un espacio reservado cuando aún no se ha agregado una imagen.
document.querySelectorAll('.image-frame img').forEach((img) => {
  img.addEventListener('error', () => {
    img.hidden = true;
    if (img.parentElement.querySelector('.image-placeholder')) return;
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.textContent = img.closest('.dog-frame') ? '♡ Aquí va el perrito ♡' : '♡ Aquí va tu imagen rectangular ♡';
    placeholder.style.cssText = 'width:100%;height:100%;display:grid;place-items:center;background:#f6dce6;color:#a95177;text-align:center;padding:12px;font-size:13px';
    img.after(placeholder);
  });
});
