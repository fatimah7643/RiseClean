<?php
include '../db.php';

header('Content-Type: application/json');

$data = [];

// 1. Ambil ID bisa dari POST (Body) atau GET (URL) agar fleksibel
$id = $_POST['id_user'] ?? $_GET['id'] ?? null;

if ($id) {
    // 2. Jika ada ID, cari spesifik user tersebut
    // Gunakan "i" untuk integer karena kolom 'id' adalah int
    $stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    $stmt->execute();
    $result = $stmt->get_result();

    // Gunakan fetch_assoc tanpa while jika hanya ingin satu data, 
    // atau biarkan seperti ini jika ingin tetap dalam bentuk array []
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $stmt->close();

} else {
    // 3. Jika tidak ada ID, ambil semua data
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
}

// 4. Output JSON
echo json_encode([
    "status"  => "success",
    "message" => count($data) > 0 ? "Data ditemukan" : "Data kosong",
    "data"    => $data
]);

$conn->close();
?>