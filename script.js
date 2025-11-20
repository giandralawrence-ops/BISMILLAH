// ===============================
//  TOMBOL KLIK AKU (FITUR ASLI)
// ===============================
const button = document.getElementById("klikBtn");
const output = document.getElementById("output");

// Tombol Klik Aku dinonaktifkan sebelum search
button.disabled = true;
button.style.opacity = "0.5";
button.style.cursor = "not-allowed";

button.addEventListener("click", () => {
    const waktu = new Date().toLocaleTimeString();
    output.textContent = `Tombol diklik pada: ${waktu}`;
});

// ===============================
//  FITUR SEARCH DESTINASI
// ===============================
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cards = document.querySelectorAll(".card");

searchBtn.addEventListener("click", () => {
    let keyword = searchInput.value.toLowerCase().trim();

    // --- Jika user sudah mencari → aktifkan tombol Klik Aku ---
    if (keyword !== "") {
        button.disabled = false;
        button.style.opacity = "1";
        button.style.cursor = "pointer";
    }

    // --- Filter card wisata berdasarkan keyword ---
    cards.forEach(card => {
        const nama = card.querySelector("h3").innerText.toLowerCase();

        if (nama.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// ===============================
//  FITUR WISATA – ADA DI KODE LAMAMU
// ===============================

// Efek single-click: menampilkan nama wisata
cards.forEach(card => {
    card.addEventListener("click", () => {
        const namaWisata = card.querySelector("h3").textContent;
        alert(`Kamu membuka informasi tentang: ${namaWisata}`);
    });
});

// Data penjelasan wisata
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

// Double-click: buka pop-up informasi lengkap
cards.forEach(card => {
    card.addEventListener("dblclick", () => {
        const wisata = card.querySelector("h3").textContent;
        tampilkanInfo(wisata);
    });
});
