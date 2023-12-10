<?php
include_once 'db.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $roleID = $data->role;
    $username = $data->username;
    $password = $data->password;

    $currentUsers = $db->selectUsers();

    $foundUser = false;
    $response = [];

    foreach ($currentUsers as $userInfo) {
        if ($userInfo['username'] === $username) {
            $foundUser = true;
            break;
        }
    }

    if (!$foundUser) {
        if ($db->InsertNewUser($username, $password, $roleID)) {
            $response['message'] = 'Inserted successfully';
            echo json_encode($response);
        } else {
            $response['error'] = 'Issues inserting';
            echo json_encode($response);
        }
    } else {
        $response['error'] = 'Username taken';
        echo json_encode($response);
    }
}

?>