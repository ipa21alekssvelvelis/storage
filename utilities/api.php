<?php
// Include the database class
include 'db.php';

class ShelvesAPI {
    private $database;

    function selectShelves() {
        $result = $this->database->query('SELECT * FROM shelves');
        $data = [];

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        return $data;
    }

    public function __construct() {
        // Enable CORS
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header("Access-Control-Allow-Methods: GET"); // Remove DELETE method

        // Create a database object
        $this->database = new Database();
    }

    public function handleRequest() {
        // Check if the request method is GET
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Get shelves data from the database
            $shelvesData = $this->selectShelves();

            // Output data as JSON
            header('Content-Type: application/json');
            if ($shelvesData === false) {
                $this->sendError(500, "Error fetching shelves data");
            } else {
                echo json_encode($shelvesData);
            }
        }
    }

    private function sendError($statusCode, $errorMessage) {
        header("HTTP/1.1 $statusCode Internal Server Error");
        header('Content-Type: application/json'); // Set content type to JSON
        echo json_encode(array("error" => $errorMessage));
    }
}

// Create an instance of the ShelvesAPI class and handle the request
$shelvesAPI = new ShelvesAPI();
$shelvesAPI->handleRequest();
?>
