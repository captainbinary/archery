<!DOCTYPE html>
<html lang="en">
<head>
    <title>West Wight Archery Club</title>

<?php

foreach($this->stylesheets as $stylesheet) {
    $url = SAURL.CSS.$stylesheet;
    if(is_array($stylesheet))
        $url = $stylesheet[0];
    else {
        $url = $stylesheet;
    }
    echo '
    <link rel="stylesheet" type="text/css" href="' .$url. '.css?v=' . time() . '" />' . "\n";
}

foreach($this->javascripts as javascript) {
    $url = SAURL.JS.javascript;
    if(is_array(javascript))
        $url = javascript[0];
    else {
        $url = javascript;
    }
    echo '
    <link rel="stylesheet" type="text/css" href="' .$url. '.js?v=' . time() . '" />' . "\n";
}
?>



</head>
<body>

</body>
</html>