// ============================================================
//  Soalan Bahasa Malaysia – Bank Soalan
//  Tahun 4 | Format: { q, o: [4 pilihan], a }
//
//  Untuk mengemaskini soalan:
//  1. Edit fail ini — tambah, buang, atau ganti soalan
//  2. Kekalkan format: q (soalan), o (pilihan jawapan), a (jawapan betul)
//  3. Jawapan dalam "a" MESTI sama persis dengan salah satu pilihan dalam "o"
//  4. Simpan fail dan muat semula index.html dalam pelayar
// ============================================================

const questions = [

    // --- Kata Nama ---
    { q: "Manakah yang merupakan kata nama?", o: ["berlari", "cantik", "buku", "cepat"], a: "buku" },
    { q: "Manakah kata nama am?", o: ["Kuala Lumpur", "Ahmad", "sekolah", "Sungai Klang"], a: "sekolah" },
    { q: "Manakah kata nama khas?", o: ["meja", "kerusi", "Malaysia", "pokok"], a: "Malaysia" },
    { q: "Manakah yang BUKAN kata nama?", o: ["guru", "murid", "berlari", "bangunan"], a: "berlari" },
    { q: "Tempat kita belajar ialah ___.", o: ["hospital", "pasar", "sekolah", "masjid"], a: "sekolah" },
    { q: "Bunga kebangsaan Malaysia ialah ___.", o: ["mawar", "melur", "bunga raya", "orkid"], a: "bunga raya" },
    { q: "Ibu kota Malaysia ialah ___.", o: ["Johor Bahru", "Kuala Lumpur", "Ipoh", "Kuching"], a: "Kuala Lumpur" },
    { q: "Haiwan yang tinggal di dalam air ialah ___.", o: ["kucing", "ikan", "ayam", "kambing"], a: "ikan" },

    // --- Kata Kerja ---
    { q: "Manakah yang merupakan kata kerja?", o: ["buku", "meja", "menulis", "cantik"], a: "menulis" },
    { q: "Dia ___ bola di padang.", o: ["cantik", "tendang", "menendang", "biru"], a: "menendang" },
    { q: "Mereka ___ di tepi pantai.", o: ["berlari", "tinggi", "merah", "besar"], a: "berlari" },
    { q: "Manakah kata kerja transitif?", o: ["tidur", "membaca buku", "berlari", "duduk"], a: "membaca buku" },
    { q: "Manakah kata kerja tak transitif?", o: ["memukul bola", "menulis surat", "menendang tin", "berlari"], a: "berlari" },
    { q: "Awalan 'me-' digunakan untuk membentuk ___.", o: ["kata nama", "kata adjektif", "kata kerja", "kata hubung"], a: "kata kerja" },
    { q: "Kata dasar bagi 'berlari' ialah ___.", o: ["ber", "lari", "berlari", "ari"], a: "lari" },
    { q: "Kata dasar bagi 'memukul' ialah ___.", o: ["me", "pukul", "memukul", "mukul"], a: "pukul" },

    // --- Kata Adjektif ---
    { q: "Manakah kata adjektif?", o: ["rumah", "berlari", "indah", "pokok"], a: "indah" },
    { q: "Lawan kata 'besar' ialah ___.", o: ["panjang", "kecil", "tinggi", "lebar"], a: "kecil" },
    { q: "Lawan kata 'panas' ialah ___.", o: ["sejuk", "hangat", "suam", "dingin"], a: "sejuk" },
    { q: "Lawan kata 'cantik' ialah ___.", o: ["baik", "hodoh", "comel", "manis"], a: "hodoh" },
    { q: "Lawan kata 'rajin' ialah ___.", o: ["pandai", "bodoh", "malas", "nakal"], a: "malas" },
    { q: "Lawan kata 'terang' ialah ___.", o: ["gelap", "cerah", "bersinar", "panas"], a: "gelap" },
    { q: "Lawan kata 'tinggi' ialah ___.", o: ["besar", "kurus", "rendah", "kecil"], a: "rendah" },
    { q: "Bunga itu ___ sekali.", o: ["berlari", "cantik", "makan", "pergi"], a: "cantik" },
    { q: "Manakah kata adjektif warna?", o: ["besar", "laju", "merah", "pandai"], a: "merah" },

    // --- Kata Ganti Nama ---
    { q: "Kata ganti nama diri pertama ialah ___.", o: ["dia", "mereka", "saya", "awak"], a: "saya" },
    { q: "Kata ganti nama diri kedua ialah ___.", o: ["saya", "kami", "awak", "dia"], a: "awak" },
    { q: "Kata ganti nama diri ketiga ialah ___.", o: ["saya", "kamu", "dia", "kami"], a: "dia" },
    { q: "___ sedang membaca buku di bilik.", o: ["Saya", "Kamu", "Dia", "Kami"], a: "Dia" },
    { q: "Ganti nama untuk sekumpulan orang ialah ___.", o: ["saya", "awak", "mereka", "dia"], a: "mereka" },
    { q: "'Kami' digunakan untuk merujuk kepada ___.", o: ["seorang sahaja", "diri sendiri sahaja", "pembicara dan orang lain (tidak termasuk pendengar)", "pendengar sahaja"], a: "pembicara dan orang lain (tidak termasuk pendengar)" },

    // --- Kata Hubung ---
    { q: "Pilih kata hubung: Saya suka makan nasi ___ minum air.", o: ["tetapi", "dan", "atau", "kerana"], a: "dan" },
    { q: "Dia tidak datang ke sekolah ___ dia sakit.", o: ["dan", "atau", "tetapi", "kerana"], a: "kerana" },
    { q: "Kamu boleh makan nasi ___ roti.", o: ["dan", "kerana", "atau", "tetapi"], a: "atau" },
    { q: "Saya suka durian ___ adik saya tidak suka.", o: ["dan", "atau", "tetapi", "kerana"], a: "tetapi" },
    { q: "Kata hubung 'dan' digunakan untuk ___.", o: ["menunjukkan sebab", "menggabungkan dua idea", "menunjukkan pilihan", "menunjukkan pertentangan"], a: "menggabungkan dua idea" },
    { q: "Kata hubung 'walaupun' menunjukkan ___.", o: ["sebab", "pertentangan", "pilihan", "syarat"], a: "pertentangan" },

    // --- Kata Sendi Nama ---
    { q: "Buku itu ada ___ atas meja.", o: ["ke", "di", "dari", "untuk"], a: "di" },
    { q: "Dia pergi ___ sekolah setiap hari.", o: ["di", "ke", "dari", "dengan"], a: "ke" },
    { q: "Adik datang ___ Kedah semalam.", o: ["ke", "di", "dari", "dengan"], a: "dari" },
    { q: "Dia menulis ___ pen.", o: ["di", "ke", "dari", "dengan"], a: "dengan" },
    { q: "Hadiah ini adalah ___ ibu saya.", o: ["di", "ke", "dari", "untuk"], a: "untuk" },
    { q: "Kucing itu tidur ___ bawah meja.", o: ["ke", "di", "dari", "untuk"], a: "di" },

    // --- Jenis Ayat ---
    { q: "Ayat 'Kucing itu tidur di atas sofa' adalah ayat ___.", o: ["tanya", "perintah", "penyata", "seruan"], a: "penyata" },
    { q: "Ayat 'Siapakah nama kamu?' adalah ayat ___.", o: ["penyata", "tanya", "perintah", "seruan"], a: "tanya" },
    { q: "Ayat 'Pergi beli roti!' adalah ayat ___.", o: ["penyata", "tanya", "perintah", "seruan"], a: "perintah" },
    { q: "Ayat 'Aduh, sakitnya kaki saya!' adalah ayat ___.", o: ["penyata", "tanya", "perintah", "seruan"], a: "seruan" },
    { q: "Manakah ayat aktif?", o: ["Nasi dimakan oleh adik.", "Buku dibaca oleh guru.", "Murid menulis karangan.", "Lagu dinyanyikan Siti."], a: "Murid menulis karangan." },
    { q: "Tukarkan kepada ayat pasif: 'Ali memukul bola'.", o: ["Bola memukul Ali.", "Bola dipukul oleh Ali.", "Ali dipukul bola.", "Bola telah dipukul."], a: "Bola dipukul oleh Ali." },

    // --- Imbuhan ---
    { q: "Imbuhan 'pe-' dalam 'penulis' bermaksud ___.", o: ["sesuatu benda", "orang yang menulis", "cara menulis", "hasil menulis"], a: "orang yang menulis" },
    { q: "Imbuhan '-an' dalam 'tulisan' bermaksud ___.", o: ["orang yang menulis", "cara menulis", "hasil menulis", "alat menulis"], a: "hasil menulis" },
    { q: "Imbuhan 'ke-an' dalam 'kecantikan' bermaksud ___.", o: ["tidak cantik", "orang yang cantik", "sifat atau keadaan cantik", "membuat cantik"], a: "sifat atau keadaan cantik" },
    { q: "Kata 'berlari' menggunakan imbuhan ___.", o: ["me-", "ber-", "ter-", "ke-"], a: "ber-" },
    { q: "Kata 'terjatuh' menggunakan imbuhan ___.", o: ["me-", "ber-", "ter-", "pe-"], a: "ter-" },
    { q: "Imbuhan 'ter-' bermaksud ___.", o: ["melakukan dengan sengaja", "berlaku secara tidak sengaja", "sedang melakukan", "sudah selesai"], a: "berlaku secara tidak sengaja" },
    { q: "Imbuhan yang bermaksud 'melakukan sesuatu' ialah ___.", o: ["ke-an", "pe-an", "ber-", "ter-"], a: "ber-" },
    { q: "Kata dasar bagi 'keindahan' ialah ___.", o: ["ke", "indah", "an", "keindah"], a: "indah" },

    // --- Penjodoh Bilangan ---
    { q: "Penjodoh bilangan untuk 'ikan' ialah ___.", o: ["orang", "buah", "ekor", "batang"], a: "ekor" },
    { q: "Penjodoh bilangan untuk 'manusia' ialah ___.", o: ["ekor", "batang", "orang", "buah"], a: "orang" },
    { q: "Penjodoh bilangan untuk 'pokok' ialah ___.", o: ["orang", "batang", "ekor", "helai"], a: "batang" },
    { q: "Penjodoh bilangan untuk 'kertas' ialah ___.", o: ["buah", "batang", "ekor", "helai"], a: "helai" },
    { q: "Penjodoh bilangan untuk 'kereta' ialah ___.", o: ["ekor", "buah", "orang", "batang"], a: "buah" },
    { q: "Dua ___ ayam berlari di halaman.", o: ["orang", "buah", "ekor", "batang"], a: "ekor" },
    { q: "Tiga ___ murid pergi ke perpustakaan.", o: ["ekor", "batang", "orang", "helai"], a: "orang" },
    { q: "Penjodoh bilangan untuk 'rumah' ialah ___.", o: ["orang", "buah", "ekor", "batang"], a: "buah" },

    // --- Kata Majmuk ---
    { q: "Manakah kata majmuk yang betul?", o: ["kapal terbang", "kapalterbang", "kapal-terbang", "Kapal Terbang"], a: "kapal terbang" },
    { q: "Kata majmuk 'meja tulis' bermaksud ___.", o: ["meja yang berwarna putih", "meja tempat menulis", "meja yang besar", "meja yang mahal"], a: "meja tempat menulis" },
    { q: "Manakah kata majmuk?", o: ["berlari", "keindahan", "tandas awam", "memukul"], a: "tandas awam" },
    { q: "Kata majmuk 'jam tangan' merujuk kepada ___.", o: ["jam yang besar", "jam yang mahal", "jam yang dipakai di tangan", "jam di dinding"], a: "jam yang dipakai di tangan" },
    { q: "Manakah kata majmuk yang dieja sebagai satu perkataan?", o: ["kapal terbang", "tandas awam", "suruhanjaya", "ibu bapa"], a: "suruhanjaya" },

    // --- Kosa Kata & Ejaan ---
    { q: "Sinonim bagi kata 'cantik' ialah ___.", o: ["hodoh", "buruk", "indah", "jelek"], a: "indah" },
    { q: "Antonim bagi kata 'pandai' ialah ___.", o: ["bijak", "cerdas", "bodoh", "pintar"], a: "bodoh" },
    { q: "Antonim bagi kata 'kaya' ialah ___.", o: ["mewah", "miskin", "senang", "berada"], a: "miskin" },
    { q: "Maksud 'ikhlas' ialah ___.", o: ["dengki", "tulus hati", "pura-pura", "marah"], a: "tulus hati" },
    { q: "Maksud 'gigih' ialah ___.", o: ["malas", "putus asa", "bersungguh-sungguh", "leka"], a: "bersungguh-sungguh" },
    { q: "Manakah ejaan yang betul?", o: ["jadual", "jadwal", "jaduwal", "jadawal"], a: "jadual" },
    { q: "Manakah ejaan yang betul?", o: ["aktiviti", "aktifiti", "aktibiti", "ektiviti"], a: "aktiviti" },
    { q: "Manakah ejaan yang betul?", o: ["muzik", "musik", "musyk", "muzick"], a: "muzik" },
    { q: "Manakah ejaan yang betul?", o: ["fikir", "pikir", "phikir", "fikkir"], a: "fikir" },
    { q: "Manakah ejaan yang betul?", o: ["jemaah", "jemah", "jema'ah", "jemaa"], a: "jemaah" },

    // --- Peribahasa ---
    { q: "Peribahasa 'bagai aur dengan tebing' bermaksud ___.", o: ["bermusuhan", "saling membantu antara satu sama lain", "tidak peduli", "berlawan sesama sendiri"], a: "saling membantu antara satu sama lain" },
    { q: "Lengkapkan: 'Sambil menyelam ___'.", o: ["minum air", "cari ikan", "minum susu", "cari duit"], a: "minum air" },
    { q: "'Bulat air kerana pembetung, bulat manusia kerana ___'.", o: ["akal", "muafakat", "budi", "hati"], a: "muafakat" },
    { q: "'Harimau mati meninggalkan belang, manusia mati meninggalkan ___'.", o: ["harta", "nama", "duit", "rumah"], a: "nama" },
    { q: "'Seperti katak di bawah tempurung' bermaksud ___.", o: ["pandai bersembunyi", "tidak tahu tentang dunia luar", "tinggal di tempat sempit", "suka melompat"], a: "tidak tahu tentang dunia luar" },
    { q: "'Bersatu teguh, bercerai ___'.", o: ["kuat", "lemah", "roboh", "jatuh"], a: "roboh" },
    { q: "Peribahasa 'melentur buluh biarlah dari ___'.", o: ["hujungnya", "tengahnya", "rebungnya", "akarnya"], a: "rebungnya" },

    // --- Tanda Baca ---
    { q: "Tanda baca di akhir ayat penyata ialah ___.", o: ["?", "!", ",", "."], a: "." },
    { q: "Tanda baca di akhir ayat tanya ialah ___.", o: [".", "!", ",", "?"], a: "?" },
    { q: "Tanda baca di akhir ayat seruan ialah ___.", o: [".", "?", ",", "!"], a: "!" },
    { q: "Huruf besar digunakan pada ___.", o: ["tengah ayat", "akhir ayat", "awal ayat", "semua perkataan"], a: "awal ayat" },
    { q: "Tanda koma (,) digunakan untuk ___.", o: ["mengakhiri ayat", "memisahkan senarai", "menunjukkan soalan", "menunjukkan seruan"], a: "memisahkan senarai" },

    // --- Nilai Murni & Pengetahuan Am ---
    { q: "Bahasa Malaysia ialah bahasa ___.", o: ["asing", "kebangsaan", "daerah", "ibunda"], a: "kebangsaan" },
    { q: "Hari kemerdekaan Malaysia disambut pada ___.", o: ["16 September", "31 Ogos", "1 Januari", "31 Julai"], a: "31 Ogos" },
    { q: "Malaysia terdiri daripada ___ negeri.", o: ["11", "12", "13", "14"], a: "13" },
    { q: "Lagu kebangsaan Malaysia ialah ___.", o: ["Malaysia Berjaya", "Negaraku", "Jalur Gemilang", "Warisan"], a: "Negaraku" },
    { q: "Bendera Malaysia dipanggil ___.", o: ["Bulan Bintang", "Merah Putih", "Jalur Gemilang", "Sang Saka"], a: "Jalur Gemilang" },
    { q: "Sikap ___ bermaksud suka menolong orang lain.", o: ["tamak", "dengki", "pemurah", "pemalas"], a: "pemurah" },
    { q: "Seorang murid yang ___ akan berjaya dalam pelajaran.", o: ["malas", "cuai", "rajin", "leka"], a: "rajin" },
    { q: "Kita hendaklah ___ kepada ibu bapa kita.", o: ["derhaka", "kasar", "taat", "marah"], a: "taat" },
    { q: "Kita hendaklah ___ alam sekitar.", o: ["mencemarkan", "menjaga", "membuang sampah ke dalam", "membakar"], a: "menjaga" },

    // --- Masa & Bulan ---
    { q: "Bulan pertama dalam tahun ialah ___.", o: ["Februari", "Mac", "Januari", "April"], a: "Januari" },
    { q: "Hari Raya Aidilfitri disambut pada ___.", o: ["1 Syawal", "1 Zulhijjah", "1 Muharram", "15 Ramadan"], a: "1 Syawal" },
    { q: "Sehari mempunyai ___ jam.", o: ["12", "18", "24", "36"], a: "24" },
    { q: "Seminggu mempunyai ___ hari.", o: ["5", "6", "7", "8"], a: "7" },
    { q: "Bulan Ramadan ialah bulan umat Islam ___.", o: ["beraya", "berpuasa", "berhaji", "berkurban"], a: "berpuasa" },

    // --- Penulisan Karangan ---
    { q: "Perenggan pertama karangan biasanya mengandungi ___.", o: ["penutup", "isi utama", "pendahuluan", "kesimpulan"], a: "pendahuluan" },
    { q: "Perenggan terakhir karangan mengandungi ___.", o: ["pendahuluan", "isi cerita", "penutup", "tajuk"], a: "penutup" },
    { q: "Karangan yang menceritakan pengalaman sendiri dipanggil ___.", o: ["karangan imaginatif", "karangan fakta", "karangan autobiografi", "karangan perbahasan"], a: "karangan autobiografi" },
    { q: "Ayat yang baik hendaklah ___.", o: ["panjang dan berbelit-belit", "jelas dan mudah difahami", "menggunakan banyak imbuhan", "tidak perlu ada subjek"], a: "jelas dan mudah difahami" },

];
