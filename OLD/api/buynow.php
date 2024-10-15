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
                        if(intval($product[$i]['id']) == intval($quaryproduct['$k']['id'])){
                            $aomunt += intval($product[$'i'][$'count']) * intval($quaryproduct[$k]['price']);
                            break;
                        }
                    }
                }
            }

            $shiping = $amount + 60;
            $vat = $shiping * 7 / 100;
            $netamount = $shiping + $vat
            $transid = round(microtime(true) * 100);
            $product = json_encode($product);
            $mil = time()*1000;
            $updated_at = date("Y-m-d h:i:sa")
            
            $stmt = prepare('insert into sp_transaction (trans_id,orderlist,amount,shipping,vat,netamount,operation,mil,updated_at) value(?,?,?,?,?,?,?,?,?,)');
            if($stmt->excute([
                $transid,$product,$amount,$shiping,$vat,$netamount, 'PENDING', $mil,$update_at
                ])){
                    {
                        $object ->RespCode = 200;
                        $object ->RespMessage = 'success';
                        $object ->Amount = new sedClass();
                        $object ->Amount->Amount = $amount();
                        $object ->Amount->Shipping = $shiping();
                        $object ->Amount->Vat = $vat();
                        $object ->Amount->Netamount = $netamount();

                        http_response_code(200);
                    }
                }
                else{
                        $object ->RespCode = 300;
                        $object ->Log = 0;
                        $object ->RespMessage = 'bad insert transaction fail';
                        http_response_code(300);
                }

            else{
                $object ->RespCode =500;
                $object ->Log = 1;
                $object ->RespMessage = 'bad: cant get product';
                http_response_code(500);
            }
            echo json_encode($object)
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
