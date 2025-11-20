// ===============================
//  TOMBOL KLIK AKU
// ===============================
const button = document.getElementById("klikBtn");
const output = document.getElementById("output");

// Tombol Klik Aku tidak aktif sebelum search
button.disabled = true;
button.style.opacity = "0.5";
button.style.cursor = "not-allowed";

let hasilPencarianSaatIni = []; // <-- daftar card yang muncul setelah search

button.addEventListener("click", () => {

    // Jika belum ada hasil pencarian, tombol tidak bekerja
    if (hasilPencarianSaatIni.length === 0) {
        output.textContent = "Silakan cari destinasi dulu!";
        return;
    }

    // Jika ada hasil pencarian → tampilkan nama semua destinasi yang cocok
    const namaDestinasi = hasilPencarianSaatIni
        .map(card => card.querySelector("h3").innerText)
        .join(", ");

    output.textContent = `Destinasi ditemukan: ${namaDestinasi}`;
});


// ===============================
//  FITUR SEARCH DESTINASI
// ===============================
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cards = document.querySelectorAll(".card");

searchBtn.addEventListener("click", () => {
    let keyword = searchInput.value.toLowerCase().trim();

    hasilPencarianSaatIni = []; // reset dulu

    // Jika user mengetik sesuatu → aktifkan tombol
    if (keyword !== "") {
        button.disabled = false;
        button.style.opacity = "1";
        button.style.cursor = "pointer";
    } else {
        // Jika kolom search kosong → matikan tombol lagi
        button.disabled = true;
        button.style.opacity = "0.5";
        hasilPencarianSaatIni = [];
    }

    cards.forEach(card => {
        const nama = card.querySelector("h3").innerText.toLowerCase();

        if (nama.includes(keyword)) {
            card.style.display = "block";
            hasilPencarianSaatIni.push(card);  // simpan card yang cocok
        } else {
            card.style.display = "none";
        }
    });

    // Jika tidak ada card cocok → matikan tombol Klik Aku
    if (hasilPencarianSaatIni.length === 0) {
        button.disabled = true;
        button.style.opacity = "0.5";
        output.textContent = "Destinasi tidak ditemukan!";
    }
});


// ===============================
//  FITUR CARD (kode lama tetap ada)
// ===============================

// Efek single-click: tampilkan nama wisata
cards.forEach(card => {
    card.addEventListener("click", () => {
        const namaWisata = card.querySelector("h3").textContent;
        alert(`Kamu membuka informasi tentang: ${namaWisata}`);
    });
});

// Detail wisata
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

// Double-click: tampilkan info lengkap
cards.forEach(card => {
    card.addEventListener("dblclick", () => {
        const wisata = card.querySelector("h3").textContent;
        tampilkanInfo(wisata);
    });
});
