<?php

$recepient = "kirillhlot@mail.ru";
$sitename = "aristarh.net";

$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$msg = trim($_POST["message"]);
$product = trim($_POST["product"]);
$price = trim($_POST["price"]);

$message = "
<div xmlns=\"http://www.w3.org/1999/xhtml\">
	Имя: $name	
	<br>Телефон: $phone	
	<br>Сообщение: $msg
	<br>Выбранный продукт: $product
	<br>Стоимость продукта: $price
</div>";

$pagetitle = "Заявка с блока магазин сайта $sitename";
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"UTF-8\";\n From: $recepient");