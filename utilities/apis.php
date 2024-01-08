<?php
include 'db.php';

class StorageAPI {
    private $database;

    function selectItems() {
        $result = $this->database->query('SELECT * FROM items');
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
            // Get items data from the database
            $itemsData = $this->selectItems();

            // Output data as JSON
            header('Content-Type: application/json');
            if ($itemsData === false) {
                $this->sendError(500, "Error fetching items data");
            } else {
                echo json_encode($itemsData);
            }
        }
    }

    private function sendError($statusCode, $errorMessage) {
        header("HTTP/1.1 $statusCode Internal Server Error");
        header('Content-Type: application/json'); // Set content type to JSON
        echo json_encode(array("error" => $errorMessage));
    }
}

// Create an instance of the StorageAPI class and handle the request
$storageAPI = new StorageAPI();
$storageAPI->handleRequest();
?>
