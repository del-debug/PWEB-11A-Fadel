//
// DATA KOLEKSI BUKU PERPUS
//
const KOLEKSI_BUKU = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Fiksi", stok: 3, rating: 4.8},
  { id: 2, judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", kategori: "Fiksi", stok: 0, rating: 4.9 },
  { id: 3, judul: "Sapiens", penulis: "Yuval Noah Harari", kategori: "Sains", stok: 2, rating: 4.7 },
  { id: 4, judul: "Atomic Habits", penulis: "James Clear", kategori: "Non-fiksi", stok: 5, rating: 4.6 },
  { id: 5, judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", kategori: "Fiksi", stok: 1, rating: 4.5},
  { id: 6, judul: "Deep Work", penulis: "Cal Newport", kategori: "Non-fiksi", stok: 0, rating: 4.4},
  { id: 7, judul: "A Brief History of Time", penulis: "Stephen Hawking", kategori: "Sains", stok: 3, rating: 4.6 },
  { id: 8, judul: "Pulang", penulis: "Tere Liye", kategori: "Fiksi", stok: 2, rating: 4.3}
];

//
// UTILITY FUNCTIONS
//

// Ambil semua kategori unik dari koleksi
function ambilKategori(koleksi) {
  const kategoriSet = new Set(koleksi.map(b => b.kategori));
  return ["Semua", ...kategoriSet];
}

// Filter buku berdasarkan kategori
function filterBukuByKategori(koleksi, kategori) {
  if (kategori === "Semua") return koleksi;
  return koleksi.filter(b => b.kategori === kategori);
}

// Debounce untuk membatasi pemanggilan fungsi pencarian
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Filter gabungan - kategori + keyword
function filterGabungan(koleksi, kategori, keyword) {
  let hasil = filterBukuByKategori(koleksi, kategori);
  
  if (!keyword.trim()) return hasil;
  
  const kw = keyword.trim().toLowerCase();
  return hasil.filter(b => 
    b.judul.toLowerCase().includes(kw) || 
    b.penulis.toLowerCase().includes(kw)
  );
}

// Bungkus teks yang cocok dengan span highlight
function highlightKeyword(teks, keyword) {
  if (!keyword.trim()) return teks;
  
  const kw = keyword.trim();
  // Escape karakter regex khusus di keyword
  const kwEscaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${kwEscaped})`, "gi");
  
  return teks.replace(regex, '<span class="highlight">$1</span>');
}

//
// RENDER FUNCTIONS
//
function renderKartuBuku(buku, keyword = "") {
  const badgeStokKelas = buku.stok > 0 ? "badge-stok-tersedia" : "badge-stok-habis";
  const badgeStokTeks = buku.stok > 0 ? `${buku.stok} tersisa` : "Habis";
  
  // Highlight judul dan penulis kalau ada keyword
  const judulTampil = highlightKeyword(buku.judul, keyword);
  const penulisTampil = highlightKeyword(buku.penulis, keyword);
  
  return `
    <div class="kartu-buku">
      <h3 class="kartu-judul-buku">${judulTampil}</h3>
      <p class="kartu-penulis-buku">${penulisTampil}</p>
      <div class="kartu-meta">
        <span class="badge-kategori">${buku.kategori}</span>
        <span class="${badgeStokKelas}">${badgeStokTeks}</span>
        <span class="kartu-rating">${buku.rating}</span>
      </div>
    </div>
  `;
}

function renderDaftarBuku(koleksi, keyword = "", kategori = "Semua") {
  const kontainer = document.getElementById("kontainer-buku");
  const infoJumlah = document.getElementById("info-jumlah");
  
  // Bangun teks info filter yang aktif
  const filterAktif = [];
  if (kategori !== "Semua") filterAktif.push(`kategori: "${kategori}"`);
  if (keyword.trim()) filterAktif.push(`kata kunci: "${keyword.trim()}"`);
  
  const infoFilter = filterAktif.length > 0 
    ? ` (filter: ${filterAktif.join(", ")})` 
    : "";
    
  if (koleksi.length === 0) {
    kontainer.innerHTML = `
      <div class="pesan-kosong">
        <span class="pesan-kosong-ikon">📚</span>
        <p>Tidak ada buku yang cocok${infoFilter}</p>
      </div>
    `;
    infoJumlah.textContent = `0 buku ditemukan${infoFilter}`;
    return;
  }
  
  // Kirim keyword ke renderKartuBuku untuk highlight
  kontainer.innerHTML = koleksi.map(b => renderKartuBuku(b, keyword)).join("");
  infoJumlah.textContent = `Menampilkan ${koleksi.length} buku${infoFilter}`;
}

function renderTombolFilter(kategori, aktif) {
  const kontainer = document.getElementById("tombol-filter");
  kontainer.innerHTML = kategori.map(kat => `
    <button class="tombol-filter ${kat === aktif ? "aktif" : ""}" data-kategori="${kat}">
      ${kat}
    </button>
  `).join("");
}

//
// EVENT HANDLING
//
function setupSearchEvents(getStateAktif) {
  const inputSearch = document.getElementById("input-search");
  const tombolHapus = document.getElementById("tombol-hapus-search");
  
  // Gunakan debounce
  const handleSearch = debounce(function() {
    const keyword = inputSearch.value;
    const { kategori } = getStateAktif();
    
    // Tampilkan/sembunyikan tombol hapus
    tombolHapus.style.display = keyword ? "block" : "none";
    
    // Re-render dengan filter gabungan
    const hasil = filterGabungan(KOLEKSI_BUKU, kategori, keyword);
    renderDaftarBuku(hasil, keyword, kategori);
  }, 300);
  
  // Update saat user mengetik
  inputSearch.addEventListener("input", handleSearch);
  
  // Hapus keyword saat klik tombol X
  tombolHapus.addEventListener("click", function() {
    inputSearch.value = "";
    this.style.display = "none";
    inputSearch.focus();
    
    const { kategori } = getStateAktif();
    const hasil = filterGabungan(KOLEKSI_BUKU, kategori, "");
    renderDaftarBuku(hasil, "", kategori);
  });
}

//
// INISIALISASI
//
function inisialisasi() {
  const kategoriList = ambilKategori(KOLEKSI_BUKU);
  
  // State bersama antara filter dan search
  const state = { kategori: "Semua" };
  
  // Render awal
  renderTombolFilter(kategoriList, state.kategori);
  renderDaftarBuku(KOLEKSI_BUKU, "", state.kategori);
  
  // Setup event filter kategori - update state dan re-render
  const kontainerFilter = document.getElementById("tombol-filter");
  kontainerFilter.addEventListener("click", function(event) {
    const tombol = event.target.closest(".tombol-filter");
    if (!tombol) return;
    
    state.kategori = tombol.dataset.kategori;
    const keyword = document.getElementById("input-search").value;
    
    renderTombolFilter(kategoriList, state.kategori);
    const hasil = filterGabungan(KOLEKSI_BUKU, state.kategori, keyword);
    renderDaftarBuku(hasil, keyword, state.kategori);
  });
  
  // Setup event search - baca state kategori yang aktif
  setupSearchEvents(() => state);
  
  console.log("Perpus siap - filter + search aktif");
  console.log(`${KOLEKSI_BUKU.length} buku, ${kategoriList.length - 1} kategori`);
}

inisialisasi();