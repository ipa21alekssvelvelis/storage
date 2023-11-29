<?php
class Database{
    private $host;
    private $user;
    private $pass;
    private $dbname;
    public $conn;

    function __construct(){
        $this->host = "localhost";
        $this->user = "root";
        $this->pass = "root";
        $this->dbname = "shoes";
        $this->conn = new mysqli ($this->host, $this->user, $this->pass, $this->dbname);
    }

    function insert($query){
        if($this->conn->query($query) === TRUE){
            return $this->conn->insert_id;
        } else {
            $error = $this->conn->error;
            echo "Error: $error";
            return false;
        }
    }
    

    function select($query){
        return $this->conn->query($query);
    }
}
?>