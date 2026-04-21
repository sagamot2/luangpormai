document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('reading-progress');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / total * 100) + '%';
  });
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.getElementById('menuOverlay');
  const toggle = () => { sidebar.classList.toggle('active'); overlay.classList.toggle('active'); };
  openMenu?.addEventListener('click', toggle);
  closeMenu?.addEventListener('click', toggle);
  overlay?.addEventListener('click', toggle);
  document.querySelectorAll('.toc-link').forEach(a => a.addEventListener('click', () => { if(window.innerWidth<=768) toggle(); }));
  const sections = document.querySelectorAll('section[id]');
  const tocLinks = document.querySelectorAll('.toc-link');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if(window.scrollY >= s.offsetTop - 160) cur = s.id; });
    tocLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#'+cur); });
  });
});
