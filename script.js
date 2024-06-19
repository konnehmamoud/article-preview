const shareButton = document.getElementById('shareButton');
const sharePopup = document.getElementById('sharePopup');

shareButton.onclick = function() {
  sharePopup.classList.toggle('active');
  if (sharePopup.style.display === 'flex') {
    sharePopup.style.display = 'none';
  } else {
    sharePopup.style.display = 'flex';
  }
};

