<?php

    require_once('./db.php');

    try{
        if($_SERVER['REQUEST_METHOD'] == 'POST') {
            $object = new stdClass();

            $object = new stdClass();
            $amount = 0;
            $product = $_POST['product'];

            $stmt = $db->prepare('select id,price from sp_product order by desc');
            if($stmt->execute()) {

                $quaryproduct = array();
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    extract($row);
                    $items = array(
                        "id" => $id,
                        "price" => $price
                    );
                    array_push($quaryproduct,$items);
                }
                for ($i=0; $i <count($product); $i++){
                    for ($k=0; $i < count($quaryproduct); $k++) { 
                        if($product[$i]['id'] == $quaryproduct['$k']['id']){
                            $aomunt += $product[$'i'][$'count'] * $quaryproduct[$k]['price'];
                            break;
                        }
                    }
                }
            }
            else{

            }
        }
        else{
            http_response_code(405);
        }
    }
    catch(PEOException $e) {
        http_response_code(500);
        echo $e->getMessage();
    }
?> 
