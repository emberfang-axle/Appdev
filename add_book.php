<?php
header("Content-Type: application/json");
$conn = new mysqli("sqlXXX.infinityfree.com", "your_user", "your_pass", "bookstore_app");

$data = json_decode(file_get_contents("php://input"), true);

$title = $data['title'];
$author_id = $data['author_id'];
$price = $data['price'];
$genre = $data['genre'];

$sql = "INSERT INTO books (title, author_id, price, genre) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sids", $title, $author_id, $price, $genre);

$response = [];
if ($stmt->execute()) {
    $response['success'] = true;
} else {
    $response['error'] = "Failed to add book";
}
echo json_encode($response);
$conn->close();
?>
