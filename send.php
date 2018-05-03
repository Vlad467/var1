<?php

    if( !empty($_POST['name1']) && !empty($_POST['phone1']) && !empty($_POST['comment1'])){
    $phone = trim(htmlspecialchars($_POST['phone1']));
    $name = trim(htmlspecialchars($_POST['name1']));
    $comment = trim(htmlspecialchars($_POST['comment1']));
    $subject = "Обратный звонок";
    $message = "Имя:$name \r\n";
    $message.= "Номер телефона: $phone \r\n";
    $message.= "Комментарий: $comment";
    $fopen = fopen('hello.php','w+');
    fwrite($fopen,$message);
    fclose($fopen);
    mail("crazymen467@gmail.com", $subject, $message, "Content-type:text/plain; windows-1251");
}

if( !empty($_POST['name2']) && !empty($_POST['phone2']) && !empty($_POST['comment2'])){
    $phone = trim(htmlspecialchars($_POST['phone2']));
    $name = trim(htmlspecialchars($_POST['name2']));
    $comment = trim(htmlspecialchars($_POST['comment2']));
    $subject = "Выезд инженера";
    $message = "Имя:$name \r\n";
    $message.= "Номер телефона: $phone \r\n";
    $message.= "Комментарий: $comment";
    $fopen = fopen('hello.php','w+');
    fwrite($fopen,$message);
    fclose($fopen);
    mail("crazymen467@gmail.com", $subject, $message, "Content-type:text/plain; windows-1251");
}
if( !empty($_POST['name3']) && !empty($_POST['phone3']) && !empty($_POST['comment3'])){
    $phone = trim(htmlspecialchars($_POST['phone3']));
    $name = trim(htmlspecialchars($_POST['name3']));
    $comment = trim(htmlspecialchars($_POST['comment3']));
    $subject = "Консультация";
    $message = "Имя:$name \r\n";
    $message.= "Номер телефона: $phone \r\n";
    $message.= "Комментарий: $comment";
    $fopen = fopen('hello.php','w+');
    fwrite($fopen,$message);
    fclose($fopen);
    mail("crazymen467@gmail.com", $subject, $message, "Content-type:text/plain; windows-1251");
}
if( !empty($_POST['name4']) && !empty($_POST['phone4'])){
    $phone = trim(htmlspecialchars($_POST['phone4']));
    $name = trim(htmlspecialchars($_POST['name4']));

    $subject = "Скидка до 10%";
    $message = "Имя:$name \r\n";
    $message.= "Номер телефона: $phone \r\n";

    $fopen = fopen('hello.php','w+');
    fwrite($fopen,$message);
    fclose($fopen);
    mail("crazymen467@gmail.com", $subject, $message, "Content-type:text/plain; windows-1251");
}
if( !empty($_POST['name5']) && !empty($_POST['phone5']) && !empty($_POST['email5']) && !empty($_POST['sel1']) && !empty($_POST['sel2']) && !empty($_POST['sel3']) && !empty($_POST['width']) && !empty($_POST['length'])){
    $phone = trim(htmlspecialchars($_POST['phone5']));
    $name = trim(htmlspecialchars($_POST['name5']));
    $email = trim(htmlspecialchars($_POST['email5']));
    $sel1 = trim(htmlspecialchars($_POST['sel1']));
    $sel2 = trim(htmlspecialchars($_POST['sel2']));
    $sel3 = trim(htmlspecialchars($_POST['sel3']));
    $width = trim(htmlspecialchars($_POST['width']));
    $length = trim(htmlspecialchars($_POST['length']));
    $subject = "Бесплатный расчет";
    $message = "Имя:$name \r\n";
    $message.= "Номер телефона: $phone \r\n";
    $message.= "Тип постройки: $sel1 \r\n";
    $message.= "Материал стен: $sel2 \r\n";
    $message.= "Количество этажей: $sel3 \r\n";
    $message.= "Email: $email \r\n";
    $message.= "Ширина: $width \r\n";
    $message.= "Длина: $length \r\n";
    $fopen = fopen('hello.php','w+');
    fwrite($fopen,$message);
    fclose($fopen);
    mail("crazymen467@gmail.com", $subject, $message, "Content-type:text/plain; windows-1251");
}