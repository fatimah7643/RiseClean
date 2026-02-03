<?php
include '../db.php';

header('Content-Type: application/json');

// Gunakan $_POST jika kamu pakai x-www-form-urlencoded di Postman
// Gunakan ?? untuk mencegah error "Undefined array key"
$id            = isset($_POST['id_user']) ? (int)$_POST['id_user'] : 0;
$username      = $_POST['nama_lengkap'] ?? null;
$email         = $_POST['email'] ?? null;
$phone        = $_POST['no_telp'] ?? null;
$total_points  = isset($_POST['total_point']) ? (int)$_POST['total_point'] : 0;
$current_level = isset($_POST['level']) ? (int)$_POST['level'] : 0;

// Validasi: Jangan jalankan query jika data penting kosong
if (!$id || !$username || !$email) {
    echo json_encode([
        "status"  => "error",
        "message" => "Data tidak lengkap. Pastikan id_user, nama_lengkap, dan email sudah diisi di Postman."
    ]);
    exit;
}

try {
    $stmt = $conn->prepare("
        UPDATE users 
        SET username = ?, email = ?, phone = ?, total_points = ?, current_level = ?
        WHERE id = ?
    ");

    $stmt->bind_param("sssiii", $username, $email, $phone, $total_points, $current_level, $id);
    if ($stmt->execute()) {
        echo json_encode([
            "status"  => "success",
            "message" => "Data berhasil diperbarui",
            "data"    => [
                "id"            => $id,
                "username"      => $username,
                "email"         => $email,
                "phone"         => $phone,
                "total_points"  => $total_points,
                "current_level" => $current_level
            ]
        ]);
    } else {
        throw new Exception($stmt->error);
    }

} catch (Exception $e) {
    echo json_encode([
        "status"  => "error",
        "message" => "Gagal update: " . $e->getMessage()
    ]);
}

$stmt->close();
$conn->close();
?>