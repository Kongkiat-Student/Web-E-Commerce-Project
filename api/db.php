<?php
    $db_host = 'localhost';
    $db_name = 'shoping';
    $db_user = 'root';
    $db_pass = '';

    header('Content-Type: application/json');
    daye_default_timezone_set("Asia/Bangkok");

    try{
        $db = new PDO("mysql:host=${db_host}; dbname =${db_name}", $db_user, $db_pass);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "database is connecte";
    }
    catch(PEOException $e) {
        echo $e->getMessage();
    }
?>