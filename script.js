// =================================
// COBAN SEWU - JAVASCRIPT
// =================================


// 1. NAVIGASI MOBILE

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Menutup menu setelah salah satu link diklik

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 2. TAHUN OTOMATIS DI FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();


// 3. GALERI FOTO / LIGHTBOX

const galleryImages = document.querySelectorAll(
    ".gallery-item img"
);

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById(
    "lightboxImage"
);

const lightboxClose = document.getElementById(
    "lightboxClose"
);

const lightboxPrev = document.getElementById(
    "lightboxPrev"
);

const lightboxNext = document.getElementById(
    "lightboxNext"
);

let currentImageIndex = 0;


// Membuka foto

function openLightbox(index) {

    currentImageIndex = index;

    showImage();

    lightbox.hidden = false;

    document.body.style.overflow = "hidden";

    lightboxClose.focus();

}


// Menampilkan foto

function showImage() {

    const selectedImage = galleryImages[currentImageIndex];

    lightboxImage.src = selectedImage.src;

    lightboxImage.alt = selectedImage.alt;

}


// Klik gambar galeri

galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        openLightbox(index);

    });

});


// Menutup galeri

function closeLightbox() {

    lightbox.hidden = true;

    document.body.style.overflow = "";

}


// Tombol close

lightboxClose.addEventListener("click", closeLightbox);


// Foto sebelumnya

lightboxPrev.addEventListener("click", function() {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex = galleryImages.length - 1;

    }

    showImage();

});


// Foto berikutnya

lightboxNext.addEventListener("click", function() {

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {

        currentImageIndex = 0;

    }

    showImage();

});


// Klik area gelap untuk menutup

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// Keyboard: ESC dan tombol panah

document.addEventListener("keydown", function(event) {

    if (lightbox.hidden) return;

    if (event.key === "Escape") {

        closeLightbox();

    }

    if (event.key === "ArrowRight") {

        currentImageIndex =
            (currentImageIndex + 1) % galleryImages.length;

        showImage();

    }

    if (event.key === "ArrowLeft") {

        currentImageIndex =
            (currentImageIndex - 1 + galleryImages.length)
            % galleryImages.length;

        showImage();

    }

});