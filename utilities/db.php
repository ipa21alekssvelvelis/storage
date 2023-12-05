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

    function selectUsers(){
        $result = $this->select("SELECT * FROM users");
        if($result && $result->num_rows > 0){
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }

    function selectRoles(){
        $result = $this->select("SELECT * FROM roles");
        if($result && $result->num_rows > 0){
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }

    function deleteCertainUser($id){
        $result = $this->select("DELETE FROM users WHERE userID = '$id'");
    }

    function updateCertainUser($id, $usernameToUpdate, $passwordToUpdate, $roleToUpdate){
        $query = "UPDATE users 
                  SET `username` = '$usernameToUpdate', `password` = '$passwordToUpdate', `roleID` = $roleToUpdate
                  WHERE `userID` = '$id'";
        if ($this->conn->query($query) === TRUE) {
            return true;
        } else {
            $error = $this->conn->error;
            echo "Error: $error";
            return false;
        }
    }
}
?>