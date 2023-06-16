<?php
// Allow full error reporting for debug, this can be removed in the live version
error_reporting(E_ALL);

// Startup code
$starter_at = microtime(true);
include 'assets/essential/config.php';

/* Template setup and execution
-------------------------------
$master is the main template and controls the layout and style>

$page is the content your wanting to say or show

*/
$master->setTitle('West Wight Archery Club');
$master->setHeader($jsArr,$cssArr);
$master->setCustomData($masterData);
$master->startBody();
	$page->setCustomData($pageData);
	echo $page->render(ROOT.TEMPLATES.'index');
$master->endBody();
echo $master->render(ROOT.TEMPLATES.'master');
?>

<style>
.box {
	border: 1px solid #000;
	padding: 10px;
	text-align: center;
	width: 200px;
	margin: auto auto;
}

.red {
	background-color: #ff0000;
}

.green {
	background-color: #00ff00;
}

.blue {
	background-color: #0000ff;
}
</style>


<div class="box red"> A RED BOX!! </div>