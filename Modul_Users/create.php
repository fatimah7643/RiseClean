<?php
include_once '../db.php';

header('Content-Type: application/json');

// Menangkap input profil dari Postman
$username = $_POST['nama_lengkap'] ?? null;
$email    = $_POST['email'] ?? null;
$phone    = $_POST['no_telp'] ?? ''; 
$password = password_hash($_POST['password'] ?? '', PASSWORD_DEFAULT);

// Logika Otomatis: User baru selalu mulai dari nol
$total_points  = 0;
$current_level = 1;

// Validasi input minimal agar tidak terjadi error "cannot be null"
if (empty($username) || empty($email)) {
    echo json_encode([
        "status"  => "error",
        "message" => "Username dan Email tidak boleh kosong"
    ]);
    exit;
}

// Persiapkan Query sesuai skema tabel users
$stmt = $conn->prepare("
    INSERT INTO users (username, email, password, phone, total_points, current_level)
    VALUES (?, ?, ?, ?, ?, ?)
");

// Bind param: s=string, i=integer (urutan sesuai VALUES)
$stmt->bind_param("ssssii", $username, $email, $password, $phone, $total_points, $current_level);

if ($stmt->execute()) {
    echo json_encode([
        "status"  => "success",
        "message" => "User berhasil didaftarkan",
        "data"    => [
            "id"            => $stmt->insert_id,
            "username"      => $username,
            "total_points"  => $total_points,
            "current_level" => $current_level
        ]
    ]);
} else {
    echo json_encode([
        "status"  => "error",
        "message" => $stmt->error
    ]);
}

$stmt->close();
$conn->close();
?>