<?php
if(isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    $name = $_POST['name'];
    $message = "Имя:$name \r\n";
    $message.= "Номер телефона: $phone";
    $fopen = fopen('hello.php','w+');
    fwrite($fopen,$message);
    fclose($fopen);
    mail("crazymen467@gmail.com", "Пластиковые окна", $message, "Content-type:text/plain; windows-1251");
}