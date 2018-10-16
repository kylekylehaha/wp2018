<?php
$success = 1;
$addvalue = $_POST["value"];
$addname = $_POST["name"];

$addvalue = htmlspecialchars($addvalue);
$addname = htmlspecialchars($addname);

$data = file_get_contents("student.json");
$data_decode = json_decode($data);
foreach ($data_decode as $key => $value){
  if ($addvalue == $key){
    echo "The ID have existed";
    $success =0;
  }
}
if ($success ==1){
  $data_decode[$addvalue] = $addname;
  $json_string = json_encode($data_decode);
  file_put_contents("student.json",$json_string);
}
?>
