<?php
class Database {
    private $host = 'localhost';
    private $user = 'root';
    private $password = '';
    private $dbname = 'shelves';
    public $conn;

    function __construct() {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->dbname);
        
        if ($this->conn->connect_error) {
            die('Connection error: ' . $this->conn->connect_error);
        }
    }

   
    function query($sql) {
        return $this->conn->query($sql);
    }
}
?>
