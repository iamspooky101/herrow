document.addEventListener('DOMContentLoaded', () => {
  const btn       = document.getElementById('checkBtn');
  const intro     = document.getElementById('introMessage');
  const cute      = document.getElementById('cuteMessage');
  const pop       = document.getElementById('popSound');
  let heartTimer;

  function makeHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 90 + '%';
    heart.style.animationDuration = 2 + Math.random() * 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  btn.addEventListener('click', () => {
    // play sound
    pop.currentTime = 0;
    pop.play();

    // swap texts
    intro.classList.add('hidden');
    cute.classList.remove('hidden');

    // switch to cute colors
    document.body.classList.add('cute-mode');

    // start floating hearts (if not already)
    if (!heartTimer) {
      makeHeart();
      heartTimer = setInterval(makeHeart, 800);
    }

    // optionally disable button after click
    btn.disabled = true;
    btn.style.cursor = 'default';
  });
});
