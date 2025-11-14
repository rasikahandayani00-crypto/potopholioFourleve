document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk mengubah background header
const backgroundImages = [
    'fourleve.jpeg',
    'fourleve2.jpeg',
    'fourleve3.jpeg',
    'fourleve4.jpeg',
    'fourleve5.jpeg',
    'fourleve6.jpeg',
    'fourleve7.jpeg',
    'fourleve8.jpeg'
];

let currentBgIndex = 0;

document.getElementById('change-bg-btn').addEventListener('click', function() {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
    const header = document.querySelector('header');
    header.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
});

// Logika Modal Galeri
var modal = document.getElementById("modal");
var modalImg = document.getElementById("img01");
var closeBtn = document.querySelector(".close-btn");
var galeriFoto = document.querySelector(".galeri-foto");

galeriFoto.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        modal.style.display = "block";
        modalImg.src = e.target.src;
    }
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Menutup modal jika area di luar gambar diklik
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Logika Modal untuk Feature Cards
var featureModal = document.getElementById("featureModal");
var featureTitle = document.getElementById("featureTitle");
var featureGallery = document.getElementById("featureGallery");

function openFeatureModal(featureType) {
    var title = "";
    var images = [];

    switch(featureType) {
        case 'prestasi':
            title = "Galeri Prestasi Akademik";
            images = [
                "fourleve4.jpeg", // Ganti dengan nama file gambar yang sesuai
                "fourleve5.jpeg",
                "fourleve6.jpeg"
            ];
            break;
        case 'solidaritas':
            title = "Galeri Solidaritas";
            images = [
                "fourleve7.jpeg",
                "fourleve8.jpeg",
                "solidaritas3.jpg"
            ];
            break;
        case 'kegiatan':
            title = "Galeri Kegiatan Seru";
            images = [
                "kegiatan1.jpg",
                "kegiatan2.jpg",
                "kegiatan3.jpg"
            ];
            break;
    }

    featureTitle.textContent = title;
    featureGallery.innerHTML = "";

    images.forEach(function(imgSrc) {
        var img = document.createElement("img");
        img.src = imgSrc;
        img.alt = title;
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        };
        featureGallery.appendChild(img);
    });

    featureModal.style.display = "block";
}

function closeFeatureModal() {
    featureModal.style.display = "none";
}

// Menutup feature modal jika area di luar modal diklik
window.addEventListener('click', function(e) {
    if (e.target === featureModal) {
        closeFeatureModal();
    }
});

// Logika Pencarian Tabel (hanya jika elemen ada)
var searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        var filter, table, tr, td, i, txtValue;
        filter = this.value.toUpperCase();
        table = document.getElementById('memberTableBody');
        tr = table.getElementsByTagName('tr');

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName('td')[1]; // [1] adalah kolom nama
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
}
