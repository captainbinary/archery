<?php
$return = array(
	"status" => 'success',
	"output" => ''
);

// Error checking and validation of required variables
$confirm = true;

if(!isset($_POST['page'])) {
	$return['status'] = 'fail';
	$return['output'] = 'No page variable found in the url.';
	$confirm = false;
} elseif (!isset($_POST['size'])) {
	$return['status'] = 'fail';
	$return['output'] = 'No size variable found in the url.';
	$confirm = false;
}

if($confirm)
{
	// Checks passed, do stuff
	$sorting_offset = 2;
	$page = intval($_POST['page']);
	$page_size = intval($_POST['size']);
	$dir = "assets/gallery/";

		// This is for testing purposes on private server
		$dir = "../gallery/";

	// Get pictures into an array and sort them, also remove first two elements as they are not pictures
	$pictures = scandir($dir);
	array_splice($pictures,0,$sorting_offset);

	// Calculate total pages & images aswell as auto validation
	$total_images = count($pictures);
	$total_pages = ceil($total_images/$page_size);

	if($page > $total_pages) {
		$page = $total_pages;
	}

	if($page < 1)
	{
		$page = 1;
	}

	// Get pictures offset for pagination and get final data
	$pictures_offset = ($page - 1) * $page_size;
	$return['output'] = array_slice($pictures, $pictures_offset, $page_size);

}

// Output json_encode array
echo json_encode($return);

?>