<?php
header("Content-Type: application/json");
$conn = new mysqli("sqlXXX.infinityfree.com", "your_user", "your_pass", "bookstore_app");

$data = json_decode(file_get_contents("php://input"), true);
$user_id = $data['user_id'];
$total_price = $data['total_price'];
$items = $data['items'];

$conn->begin_transaction();

try {
    $stmt = $conn->prepare("INSERT INTO orders (user_id, total_price, order_date) VALUES (?, ?, NOW())");
    $stmt->bind_param("id", $user_id, $total_price);
    $stmt->execute();
    $order_id = $stmt->insert_id;

    $stmt = $conn->prepare("INSERT INTO order_items (order_id, book_id, quantity) VALUES (?, ?, ?)");
    foreach ($items as $item) {
        $stmt->bind_param("iii", $order_id, $item['book_id'], $item['quantity']);
        $stmt->execute();
    }

    $conn->commit();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    $conn->rollback();
    echo json_encode(["error" => "Order failed"]);
}

$conn->close();
?>
