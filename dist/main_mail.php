<?php

$recepient = "kirillhlot@mail.ru";
$sitename = "aristarh.net";

$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$msg = trim($_POST["message"]);

$message = "
<div xmlns=\"http://www.w3.org/1999/xhtml\">
	Имя: $name
	<br>Телефон: $phone
	<br>Сообщение: $msg
</div>";

$pagetitle = "Новый сообщение с сайта $sitename";
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"UTF-8\";\n From: $recepient");