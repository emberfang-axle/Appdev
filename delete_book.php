<?php
header("Content-Type: application/json");
$conn = new mysqli("sqlXXX.infinityfree.com", "your_user", "your_pass", "bookstore_app");

$book_id = $_GET['book_id'] ?? null;

if ($book_id) {
    $sql = "DELETE FROM books WHERE book_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $book_id);
    $stmt->execute();
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => "No book ID given."]);
}
$conn->close();
?>
