<?php
include_once 'db.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$db = new Database();

$response = [];

$offers = $db->selectUsers();
$roles = $db->selectRoles();

$response = ['data' => $offers];

echo json_encode($response)
?>