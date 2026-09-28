const themeToggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

// Récupération ou attribution du thème par défaut
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Bascule Dark / Light mode
themeToggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Animation d'apparition au défilement (Fade-in)
const fadeObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach((el) => fadeObserver.observe(el));