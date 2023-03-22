<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include '../DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM workshopform";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO workshopform(id, name , phone, email) VALUES(null, :name, :phone, :email)";
        $stmt = $conn->prepare($sql);
        $created_at = date('y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':phone', $user->phone);
        $stmt->bindParam(':email', $user->email);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created succesfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}   

?>