
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = mobileMenu.querySelectorAll('a'); // ambil semua link

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('scale-95');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('opacity-100');
  };

  hamburgerButton.addEventListener('click', toggleMobileMenu);

  // Tutup menu setelah link diklik
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    });
  });
