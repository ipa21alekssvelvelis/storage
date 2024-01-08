<?php
include_once 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');

class API
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    private function getData()
    {
        $query = "SELECT * FROM recieve";
        $result = $this->db->select($query);

        $data = array();

        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        return $data;
    }

    public function outputJSON()
    {
        try {
            $data = $this->getData();
            echo json_encode($data);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(array("error" => "Internal Server Error"));
        }
    }
}

$api = new API();
$api->outputJSON();
?>
