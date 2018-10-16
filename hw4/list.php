<?php
$file = fopen("student.json","rb");
$content = "";
while (!feof($file)){
  $content .= fread($file,10000);
}
fclose ($file);

$content = json_decode($content);
foreach ($content as $key => $value){
  echo "\"$key\" : \"$value\"<br>";
}
?>
