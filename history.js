document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar
  const bar = document.getElementById('reading-progress');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / total * 100) + '%';
  });

  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const sidebar = document.getElementById('sidebarMenu');
  const overlay = document.getElementById('menuOverlay');
  
  const toggleSidebar = () => { 
      sidebar.classList.toggle('active'); 
      overlay.classList.toggle('active'); 
  };
  
  openMenu?.addEventListener('click', toggleSidebar);
  closeMenu?.addEventListener('click', toggleSidebar);
  overlay?.addEventListener('click', toggleSidebar);
  
  document.querySelectorAll('.toc-link').forEach(a => {
      a.addEventListener('click', () => { 
          if(window.innerWidth <= 768) toggleSidebar(); 
      });
  });

  const sections = document.querySelectorAll('section[id]');
  const tocLinks = document.querySelectorAll('.toc-link');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if(window.scrollY >= s.offsetTop - 160) cur = s.id; });
    tocLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#'+cur); });
  });

  const hamburgerNav = document.getElementById('hamburgerNav');
  const mainNavLinks = document.getElementById('mainNavLinks');
  const topLinks = document.querySelectorAll('#mainNavLinks a');

  if (hamburgerNav && mainNavLinks) {
      hamburgerNav.addEventListener('click', () => {
          hamburgerNav.classList.toggle('active');
          mainNavLinks.classList.toggle('active');
      });

      topLinks.forEach(link => {
          link.addEventListener('click', () => {
              hamburgerNav.classList.remove('active');
              mainNavLinks.classList.remove('active');
          });
      });
  }
});
