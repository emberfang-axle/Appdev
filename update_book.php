<?php
header("Content-Type: application/json");
$conn = new mysqli("sqlXXX.infinityfree.com", "your_user", "your_pass", "bookstore_app");

$data = json_decode(file_get_contents("php://input"), true);
$sql = "UPDATE books SET title=?, author_id=?, price=?, genre=? WHERE book_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sidsi", $data['title'], $data['author_id'], $data['price'], $data['genre'], $data['book_id']);

if ($stmt->execute()) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["error" => "Update failed"]);
}
$conn->close();
?>
