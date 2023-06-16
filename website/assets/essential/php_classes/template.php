<?php
class Page {

	private $title, $stylesheets=array(), $javascripts=array(), $body, $customData=array();
	
	function __construct()
	{
		return true;
	}
	
	public function setTitle($title)
	{
		$this->title = $title;
	}
	
	public function startBody()
	{
		ob_start();
	}
		
	public function endBody()
	{
		$this->body = ob_get_clean();
	}
	
	public function render($path)
	{
		ob_start();
		include($path.'.php');
		return ob_get_clean();
	}
	
	public function setHeader($javascripts, $css)
	{
		foreach($javascripts as $js)
		{
			$this->addJS($js);
		}
		
		foreach($css as $ss)
		{
			$this->addCSS($ss);
		}
	}
	
	public function setCustomData($custom)
	{
		foreach($custom as $key => $value)
		{
			$this->customData[$key] = $value;
		}
	}
	
	private function addCSS($path)
	{
		$this->stylesheets[] = $path;
	}
	
	private function addJS($path)
	{
		$this->javascripts[] = $path;
	}
}
?>