<?php
$errors = array();
$dir = "../gallery/";
$sorting_offset = 2;
$status = 'success';

// Check if type is found and use it
if(!isset($_GET['type'])) {
	$errors[] = 'Type is not found.';
} else {
	$type = $_GET['type'];

	// Get pictures into an array and sort them, also remove first two elements as they are not pictures
	$pictures = scandir($dir);
	array_splice($pictures,0,$sorting_offset);

	// Num is getting a count of all images in the gallery
	switch($type) {
		case 'num':
			$output = count($pictures);
			break;

		case 'image':
			if(!isset($_GET['i'])) {
				$errors[] = 'Image Index (i) was not found';
			} else {
				$index = $_GET['i'];
				$picture = $pictures[$index];

				if(exif_imagetype($dir.$picture) != IMAGETYPE_JPEG)
				{
					$errors[] = 'File called is not a jpeg';
				} else {
					list($width, $height) = getimagesize($dir.$picture);
					$output = array(
						'src' => $dir.$picture,
						'width' => $width,
						'height' => $height
					);
				}
			}
			break;

		default:
			$errors[] = 'Wrong type was passed';
	}
}

print_r($pictures);

if(count($errors) > 0) {
	$status = 'error';
	$output = $errors;
}

$return = array(
	'status' => $status,
	'output' => $output
);
echo json_encode($return);


?>