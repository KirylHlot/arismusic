<?php

$recepient = "kirillhlot@mail.ru";
$sitename = "aristarh.net";

$email = trim($_POST["email"]);

$message = "
<div xmlns=\"http://www.w3.org/1999/xhtml\">
	Email: $email
</div>";

$pagetitle = "Новый подписчик на сайте $sitename";
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"UTF-8\";\n From: $recepient");