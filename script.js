 // ===============================
//  FITUR SEARCH DESTINASI
// ===============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cards = document.querySelectorAll(".card");

searchBtn.addEventListener("click", () => {
    let keyword = searchInput.value.toLowerCase().trim();

    let hasil = 0;

    cards.forEach(card => {
        const nama = card.querySelector("h3").innerText.toLowerCase();

        if (nama.includes(keyword)) {
            card.style.display = "block";
            hasil++;
        } else {
            card.style.display = "none";
        }
    });

    if (hasil === 0) {
        alert("Destinasi tidak ditemukan!");
    }
});

// ===============================
//  FITUR CARD
// ===============================

// Single click → tampilkan nama wisata
cards.forEach(card => {
    card.addEventListener("click", () => {
        const namaWisata = card.querySelector("h3").textContent;
        alert(`Kamu membuka informasi tentang: ${namaWisata}`);
    });
});

// Info detail wisata
function tampilkanInfo(wisata) {
    const info = {
        "Gunung Bromo":
            "Gunung Bromo terkenal dengan sunrise terbaik di Indonesia dan lautan pasir luas di sekelilingnya.",
        
        "Kawah Ijen":
            "Kawah Ijen dikenal dengan fenomena Blue Fire yang sangat langka dan pemandangan kawah biru yang memukau.",
        
        "Pantai Papuma":
            "Pantai Papuma memiliki pasir putih bersih, tebing besar, dan panorama sunset yang sangat indah."
    };

    alert(info[wisata] || "Informasi wisata tidak ditemukan.");
}

// Single-click → buka info lengkap
cards.forEach(card => {
    card.addEventListener("click", () => {
        const wisata = card.querySelector("h3").textContent;
    });
});
