const siswa = {
	nama: "Ahmad",
	kelas: "11A",
	nilai: [75, 80, 65, 90, 70]
};

function prosesNilai(siswa) {
	// Menampilkan identitas siswa
	console.log("===== HASIL PENILAIAN =====");
	console.log();
	console.log("Nama       : " + siswa.nama);
	console.log("Kelas      : " + siswa.kelas);

	// Mengubah nilai UTS dan Project berdasarkan index array
	siswa.nilai[2] = 70;
	siswa.nilai[4] = 85;

	// Mengambil nilai setiap mata pelajaran
	const tugas = siswa.nilai[0];
	const quiz = siswa.nilai[1];
	const uts = siswa.nilai[2];
	const uas = siswa.nilai[3];
	const project = siswa.nilai[4];

	// Menghitung total dan rata-rata nilai
	const total = tugas + quiz + uts + uas + project;
	const rataRata = total / 5;

	// Menentukan predikat berdasarkan rata-rata
	let predikat;
	if (rataRata >= 90) {
		predikat = "A";
	} else if (rataRata >= 80) {
		predikat = "B";
	} else if (rataRata >= 70) {
		predikat = "C";
	} else if (rataRata >= 60) {
		predikat = "D";
	} else {
		predikat = "E";
	}

	// Menentukan status kelulusan dengan ternary
	const status = rataRata >= 75 && uts >= 60 && uas >= 60
		? "LULUS"
		: "TIDAK LULUS";

	// Menentukan keterangan berdasarkan predikat
	const keterangan = predikat === "A"
		? "Sangat Baik"
		: predikat === "B"
			? "Baik"
			: predikat === "C"
				? "Cukup"
				: "Perlu Perbaikan";

	// Menampilkan hasil akhir penilaian
	console.log();
	console.log("Tugas: " + tugas);
	console.log("Quiz: " + quiz);
	console.log("UTS: " + uts);
	console.log("UAS: " + uas);
	console.log("Project: " + project);
	console.log("Total: " + total);
	console.log("Rata-rata: " + rataRata);
	console.log("Predikat: " + predikat);
	console.log("Status: " + status);
	console.log("Keterangan: " + keterangan);

	return {
		nama: siswa.nama,
		kelas: siswa.kelas,
		nilai: siswa.nilai,
		total: total,
		rataRata: rataRata,
		predikat: predikat,
		status: status,
		keterangan: keterangan
	};
}

prosesNilai(siswa);
