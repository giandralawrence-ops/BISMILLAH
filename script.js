// --- Fitur asli programmu ---
const button = document.getElementById("klikBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const waktu = new Date().toLocaleTimeString();
    output.textContent = `Tombol diklik pada: ${waktu}`;
});


// --- Fitur tambahan untuk website wisata Jawa Timur ---

// Efek saat card wisata diklik
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const namaWisata = card.querySelector("h3").textContent;
        alert(`Kamu membuka informasi tentang: ${namaWisata}`);
    });
});

// Sistem pop-up informasi tambahan
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

// Tambahkan interaksi klik untuk membuka penjelasan wisata
cards.forEach(card => {
    card.addEventListener("dblclick", () => {
        const wisata = card.querySelector("h3").textContent;
        tampilkanInfo(wisata);
    });
});
