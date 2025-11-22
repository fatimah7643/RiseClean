1. Ringkasan Aplikasi: RiseClean

RiseClean adalah platform edukasi kebersihan berbasis web yang bertujuan meningkatkan partisipasi masyarakat dalam pengelolaan sampah melalui pendekatan gamifikasi. Aplikasi ini mengatasi masalah rendahnya motivasi dan minimnya edukasi dengan memberikan insentif berupa poin yang dapat ditukar dengan voucher sembako.





Target Pengguna: masyarakat umum terutama Ibu Rumah Tangga (Primer) dan Pelajar (Sekunder).


Platform: Website (Mobile-friendly/Responsive).


Tujuan Utama: Meningkatkan literasi sampah, mengubah perilaku (habitual change), dan membangun komunitas peduli lingkungan.

2. Fitur Utama 
Berdasarkan diagram Use Case, sistem ini memiliki 3 aktor utama: User, Verifikator, dan Admin.

A. Fitur untuk User (Masyarakat)

Autentikasi & Profil: Registrasi/Login via email dan manajemen profil.


Edukasi Interaktif: Mengakses materi ("syarat" materi tidak bisa diskip kecuali sudah selesai mempelajarinya baru akan bisa mengerjakan kuis ) bacaan tentang pemilahan sampah dan mengerjakan kuis (pertanyaan kuis juga akan membahas mengenai materi yang di berikan) untuk mendapatkan poin awal.


Tantangan Komunitas (Core Loop):

Melihat daftar tantangan harian (misal: "Pilahlah sampah plastik hari ini").


Mengunggah Bukti Tantangan: Upload foto sebagai bukti pelaksanaan tugas.

Status verifikasi: Menunggu persetujuan Verifikator.
ketika sudah di verifikasi berhasil reward poin baru akan diberikan

Sistem Poin & Reward:

Melihat total poin dan badge pencapaian.


Redemption: Menukarkan poin dengan voucher sembako/kebutuhan rumah tangga yang berlaku di Bank Sampah mitra.


Riwayat aktivitas poin.

B. Fitur untuk Verifikator (Pihak Validasi)
Manajemen Bukti Tantangan:

Melihat daftar pengajuan bukti dari user.

Memvalidasi foto bukti (Valid/Tidak Valid).

Approval: Jika disetujui, sistem otomatis memberikan koin/badge ke User.

C. Fitur untuk Admin (Pengelola Sistem)
Content Management: Mengelola materi edukasi dan soal kuis.

Challenge Management: Membuat dan mengupdate tantangan harian/mingguan.

Reward Management: Mengelola stok dan jenis voucher.

Reporting: Melihat laporan sistem dan aktivitas user secara keseluruhan.

3. Alur Aplikasi (User Flow)
Berikut adalah alur happy path (skenario ideal) dari sisi User:

Onboarding: User mendaftar akun -> Login -> Masuk ke Dashboard Utama.

Learning: User membaca artikel "Jenis Plastik" -> Mengerjakan Kuis -> Dapat Poin Kecil.

Action (Gamifikasi):

User memilih menu "Tantangan".

Mengambil tantangan "Setor Sampah Kardus".

User melakukan aksi nyata -> Memfoto hasil.

User mengunggah foto ke sistem -> Status: Pending.

Verification (Sisi Verifikator): Verifikator menerima notifikasi -> Mengecek foto -> Klik "Setuju".

Achievement: User menerima notifikasi "Tantangan Berhasil" -> Dapat Poin Besar + Badge.


Reward: Poin terkumpul cukup -> User masuk menu "Tukar Poin" -> Memilih Voucher Sembako -> Mendapatkan Kode Voucher untuk dibawa ke Bank Sampah-> membawa hasil bukti tantangan yang diselesaikan

4. Skema Database (PostgreSQL)
Meskipun proposal menyebutkan MySQL, berikut adalah rancangan menggunakan PostgreSQL yang lebih robust untuk kebutuhan relasional data RPL.

SQL

-- 1. Tabel Users (Menyimpan data User, Admin, dan Verifikator)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('user', 'verifikator', 'admin')) DEFAULT 'user',
    current_points INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Materi Edukasi (Educational Materials)
CREATE TABLE educational_materials (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL, -- Bisa berisi HTML atau link video
    points_reward INTEGER DEFAULT 10, -- Poin jika membaca/menyelesaikan
    created_by INTEGER REFERENCES users(id) -- Admin yang membuat
);

-- 3. Tabel Tantangan (Challenges)
CREATE TABLE challenges (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
    points_reward INTEGER NOT NULL,
    badge_icon_url VARCHAR(255), -- URL gambar badge jika ada
    is_active BOOLEAN DEFAULT TRUE
);

-- 4. Tabel Pengajuan Tantangan (Submissions) - Inti dari Use Case Verifikasi
CREATE TABLE challenge_submissions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    challenge_id INTEGER REFERENCES challenges(id),
    proof_image_url VARCHAR(255) NOT NULL, -- Bukti foto
    status VARCHAR(20) CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    verifier_id INTEGER REFERENCES users(id), -- Siapa verifikatornya (diisi saat approve/reject)
    feedback_note TEXT, -- Alasan jika ditolak
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP
);

-- 5. Tabel Rewards (Voucher)
CREATE TABLE rewards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, -- Misal: Voucher Minyak Goreng
    description TEXT,
    points_cost INTEGER NOT NULL, -- Harga poin
    stock INTEGER DEFAULT 0,
    partner_name VARCHAR(100) -- Nama Bank Sampah mitra
);

-- 6. Tabel Riwayat Penukaran (Redemptions)
CREATE TABLE redemptions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    reward_id INTEGER REFERENCES rewards(id),
    redemption_code VARCHAR(50) UNIQUE NOT NULL, -- Kode unik untuk ditukar offline
    status VARCHAR(20) CHECK (status IN ('claimed', 'redeemed')) DEFAULT 'claimed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
5. Konsep Desain UI/UX (Look & Feel)
Mengingat target utamanya adalah Ibu Rumah Tangga (yang butuh simpel & visual) dan Pelajar (yang suka visual menarik), desain UI harus menyeimbangkan kemudahan penggunaan dengan estetika gamifikasi.

Tema Visual: "Eco-Friendly & Joyful"

Palet Warna:

Primary: Emerald Green (#2ECC71) – Melambangkan alam, kesegaran, dan aksi positif.

Secondary: Soft Sky Blue (#3498DB) – Melambangkan kebersihan dan kepercayaan.

Accent: Golden Orange (#F1C40F) – Digunakan khusus untuk elemen gamifikasi (Koin, Poin, Badge, Tombol Reward) agar mencolok dan memicu semangat.

Background: Off-White/Cream – Lebih nyaman di mata daripada putih polos, memberikan kesan hangat dan ramah.

Karakteristik Antarmuka (UI Style):

Card-Based Layout: Materi edukasi dan tantangan ditampilkan dalam bentuk kartu-kartu besar dengan gambar ilustrasi yang dominan (memudahkan Ibu Rumah Tangga untuk tap).

Gamification Elements:

Progress Bar yang selalu terlihat saat mengerjakan kuis.

Animasi confetti atau suara "cling" saat poin bertambah (memberikan instant gratification).

Badge didesain seperti stiker lucu yang bisa dikoleksi.

Tipografi: Menggunakan font Sans-Serif yang bulat dan modern (seperti Nunito atau Poppins) agar terkesan tidak kaku dan mudah dibaca.

Navigasi: Bottom Navigation Bar (untuk tampilan mobile) dengan 4 menu utama: Beranda (Materi), Misi (Tantangan), Tukar Poin, & Profil.