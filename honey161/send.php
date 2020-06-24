<?php
 if (isset($_POST['name'])) {$name = $_POST['name'];}
 if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
 if (isset($_POST['email'])) {$email = $_POST['email'];}
  if (isset($_POST['massage'])) {$massage = $_POST['massage'];}

 $address = "honey@honey161.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "ФИО : $name  \r\nТелефон : $tel \r\nПочта : $email  \r\nСообщение:\r\n $massage";

$soobshenie= "Уведомление о новом заказе на сайте Мёд 161";

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