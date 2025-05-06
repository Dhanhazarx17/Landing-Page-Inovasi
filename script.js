/* Main JavaScript for Interaktif Pemetaan Sekolah */
document.addEventListener('DOMContentLoaded', function() {
  // === Mobile menu toggle ===
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      if (mobileMenu.classList.contains('h-0')) {
        mobileMenu.classList.remove('h-0');
        mobileMenu.classList.add('h-auto');
      } else {
        mobileMenu.classList.add('h-0');
        mobileMenu.classList.remove('h-auto');
      }
    });
  }

  // === Filter tombol kategori sekolah ===
  const filterButtons = document.querySelectorAll('.filter-btn');
  const schoolMarkers = document.querySelectorAll('.school-marker');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Nonaktifkan semua tombol
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Aktifkan tombol yang diklik
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      schoolMarkers.forEach(marker => {
        if (filter === 'all' || marker.getAttribute('data-type') === filter) {
          marker.classList.remove('hidden');
        } else {
          marker.classList.add('hidden');
        }
      });
    });
  });

  // === Klik pada marker sekolah ===
  schoolMarkers.forEach(marker => {
    marker.addEventListener('click', function() {
      const schoolName = this.getAttribute('data-school');
      alert('Info: ' + schoolName + '\nInformasi sekolah akan ditampilkan di sini.');
    });
  });

  // === Tombol "Cari Lokasi Saya" ===
  const findMeBtn = document.getElementById('find-me-btn');
  if (findMeBtn) {
    findMeBtn.addEventListener('click', function() {
      alert('Fitur lokasi akan aktif di sini');
    });
  }

  // === Pencarian sekolah ===
  const schoolSearch = document.getElementById('school-search');
  if (schoolSearch) {
    schoolSearch.addEventListener('input', function() {
      const searchValue = this.value.toLowerCase();
      
      schoolMarkers.forEach(marker => {
        const schoolName = marker.getAttribute('data-school').toLowerCase();
        if (schoolName.includes(searchValue)) {
          marker.classList.remove('hidden');
        } else {
          marker.classList.add('hidden');
        }
      });
    });
  }

  // === Animasi scroll muncul ===
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Inisialisasi awal animasi scroll
  handleScrollAnimation();
});
