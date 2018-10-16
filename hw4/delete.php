<?php
$success = 0;
$target = $_POST["value"];
$target = htmlspecialchars($target);
$data = file_get_contents("student.json");
$data_d = json_decode($data,true);
foreach ($data_d as $key => $value){
  if($target == $key){
    unset ($data_d [$target]);
    $success =1;
  }
}
if ($success ==1){
  $data_e = json_encode($data_d,true);
  file_put_contents("student.json",$data_e);
}
else echo "Can't find student"
?>
