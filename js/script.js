const AUTHORS = {
  1: {
    preview: 'assets/img/1/ESENIYA.png',
    bg: 'assets/img/slides/slide-1/IMG_CUTIE-fidelity-4xslide1.png',
  },
  2: {
    preview: 'assets/img/2/MASHA.png',
    bg: 'assets/img/slides/slide-2/IMG_MY_BFFSslide2.png',
  },
  3: {
    preview: 'assets/img/3/LUKA.png',
    bg: 'assets/img/slides/slide-3/IMG_CANYONslide3.png',
  },
  4: {
    preview: 'assets/img/4/MILA.png',
    bg: 'assets/img/slides/slide-4/IMG_RED_VEHICLES_FOREVERslide4.png',
  },
};

const heroBg = document.getElementById('hero-bg');
const previewCard = document.getElementById('preview-card');
const previewImg  = document.getElementById('preview-img');

// ── Sidebar hover ──────────────────────────────────────────
document.querySelectorAll('.sidebar__item').forEach(item => {
  const authorId = item.dataset.author;
  const author = AUTHORS[authorId];
  if (!author) return;

  item.addEventListener('mouseenter', () => {
    heroBg.src = author.bg;
    previewImg.src = author.preview;
    previewCard.classList.add('is-visible');
  });

  item.addEventListener('mouseleave', () => {
    previewCard.classList.remove('is-visible');
  });
});
