<?php
 if (isset($_POST['name'])) {$name = $_POST['name'];}
 if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
 if (isset($_POST['email'])) {$type = $_POST['email'];}

$address = "mostovoi.nikita2015@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "ФИО : $name  \r\nТелефон : $tel \r\nПочта : $email";

$soobshenie= "Уведомление о новом заказе на сайте Мамино Мыло";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$send = mail ($address,$soobshenie,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
if ($send == 'true')
 {
?>
<?php
echo "Спасибо, мы с вами свяжемся<br><a href=index.html>Нажмите,</a> чтобы вернуться на главную страницу";
}
else 
{
echo "<p><b>Ошибка. Сообщение не отправлено!";
}
?>