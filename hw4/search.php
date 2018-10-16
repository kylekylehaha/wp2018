<?php
$success = 0;
$target = $_POST["value"];
$target = htmlspecialchars($target);

$content = file_get_contents("student.json");
$data = json_decode($content);
foreach ($data as $key => $value){
  if ($target == $key){
    $success += 1;
    echo "<h1>Hello, $value</h1>";
  }
}
if ($success != 1)
  echo "Can't find student"
?>
