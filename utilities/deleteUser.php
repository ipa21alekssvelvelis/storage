<?php
include_once 'db.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");

$db = new Database();

if (isset($_GET["userID"])) {
    $userID = $_GET["userID"];
    $success = $db->deleteCertainUser($userID);
    $response = [];

    if ($success) {
        $response["message"] = "User deleted successfully";
        $response["userID"] = $userID;
    } else {
        $response["error"] = "Error deleting user";
    }

    echo json_encode($response);
}
?>
