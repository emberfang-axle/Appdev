<?php
header('Content-Type: application/json');

$conn = new mysqli("sqlXXX.infinityfree.com", "your_user", "your_pass", "bookstore_app");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed."]));
}

$sql = "
  SELECT 
    b.book_id, b.title, b.price, b.genre,
    a.name AS author_name
  FROM books b
  LEFT JOIN authors a ON b.author_id = a.author_id
";

$result = $conn->query($sql);
$books = [];

while ($row = $result->fetch_assoc()) {
    $books[] = $row;
}

echo json_encode($books);
$conn->close();
?>
