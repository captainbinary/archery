<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if(isset($_GET['file']))
{
	header("Content-type: image/jpeg");
	$file = $_GET['file'];
}

if (!file_exists($file)){
    echo "file not found!";
    //exit;
}

	$new_width = 150;
	$new_height = 150;
	list($old_width,$old_height) = getimagesize($file);

	$new_image = imagecreatetruecolor($new_width, $new_height);
	$old_image = imagecreatefromjpeg($file);

	imagecopyresampled($new_image, $old_image, 0, 0, 0, 0, $new_width, $new_height, $old_width, $old_height);

	imagejpeg($new_image);
	imagedestroy($old_image);
	imagedestroy($new_image);
?>