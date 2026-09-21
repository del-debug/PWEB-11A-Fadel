//
// DATA KOLEKSI BUKU PERPUS
//
const KOLEKSI_BUKU = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Fiksi", stok: 3, rating: 4.8 },
  { id: 2, judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", kategori: "Fiksi", stok: 0, rating: 4.9 },
  { id: 3, judul: "Sapiens", penulis: "Yuval Noah Harari", kategori: "Sains", stok: 2, rating: 4.7 },
  { id: 4, judul: "Atomic Habits", penulis: "James Clear", kategori: "Non-fiksi", stok: 5, rating: 4.6 },
  { id: 5, judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", kategori: "Fiksi", stok: 1, rating: 4.5 },
  { id: 6, judul: "Deep Work", penulis: "Cal Newport", kategori: "Non-fiksi", stok: 0, rating: 4.4 },
  { id: 7, judul: "A Brief History of Time", penulis: "Stephen Hawking", kategori: "Sains", stok: 3, rating: 4.6 },
  { id: 8, judul: "Pulang", penulis: "Tere Liye", kategori: "Fiksi", stok: 2, rating: 4.3 }
];

//
// FUNGSI KALKULASI STATISTIK
//
function hitungStatistik(koleksi) {
  const total = koleksi.length;
  const tersedia = koleksi.filter(b => b.stok > 0).length;
  const habis = total - tersedia;
  const rataRating = koleksi.reduce((acc, b) => acc + b.rating, 0) / total;
  return { total, tersedia, habis, rataRating };
}

//
// FUNGSI RENDER
//
function renderKartuStatistik({ angka, label, warna }) {
  return `
    <div class="kartu-statistik statistik-${warna}">
      <span class="statistik-angka">${angka}</span>
      <span class="statistik-label">${label}</span>
    </div>
  `;
}

function renderStatistik(koleksi) {
  const { total, tersedia, habis, rataRating } = hitungStatistik(koleksi);
  const kartuData = [
    { angka: total, label: "Total Buku", warna: "biru" },
    { angka: tersedia, label: "Tersedia", warna: "hijau" },
    { angka: habis, label: "Habis", warna: "merah" },
    { angka: rataRating.toFixed(1), label: "Rata-rata", warna: "kuning" }
  ];
  
  const kontainer = document.getElementById("ringkasan-statistik");
  kontainer.innerHTML = kartuData.map(renderKartuStatistik).join("");
}

function renderKartuBuku(buku) {
  const { judul, penulis, kategori, stok, rating } = buku;
  const tersedia = stok > 0;
  const kelasKartu = tersedia ? "kartu-buku" : "kartu-buku habis";
  const badgeStokKelas = tersedia ? "badge badge-tersedia" : "badge badge-habis";
  const badgeStokTeks = tersedia ? `${stok} tersisa` : "Habis";
  const bintang = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
  
  return `
    <div class="${kelasKartu}">
      <h3 class="kartu-judul">${judul}</h3>
      <p class="kartu-penulis">${penulis}</p>
      <div class="kartu-footer">
        <span class="badge badge-kategori">${kategori}</span>
        <span class="${badgeStokKelas}">${badgeStokTeks}</span>
        <span class="kartu-rating" title="${rating}/5">${bintang} ${rating}</span>
      </div>
    </div>
  `;
}

function renderDaftarBuku(koleksi) {
  const kontainer = document.getElementById("kontainer-buku");
  if (koleksi.length === 0) {
    kontainer.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px; color:#94a3b8;">
        <p style="font-size:48px">📚</p>
        <p>Tidak ada buku untuk ditampilkan</p>
      </div>
    `;
    return;
  }
  kontainer.innerHTML = koleksi.map(renderKartuBuku).join("");
}

//
// INISIALISASI
//
function inisialisasi() {
  renderStatistik(KOLEKSI_BUKU);
  renderDaftarBuku(KOLEKSI_BUKU);
  console.log(`Perpus siap - ${KOLEKSI_BUKU.length} buku dimuat`);
}

inisialisasi();