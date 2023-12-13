<?php
include_once 'db.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();

$data = json_decode(file_get_contents('php://input'));

$username = $data->username;
$password = $data->password;

$user = $db->selectUsers();

$foundUser = false;
$response = [];

foreach ($user as $userInfo) {
    if ($userInfo['username'] === $username) {
        $foundUser = $userInfo;
        break;
    }
}

if (!$foundUser) {
    $response["error"] = "User not found";
} else {
    $foundUserPass = $foundUser['password'];
    if ($password == $foundUserPass) {
        $roleID = $foundUser['roleID'];
        $response["roleID"] = $roleID;
    } else {
        $response["error"] = "Incorrect password";
    }
}

echo json_encode($response);
?>
