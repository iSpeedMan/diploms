<?php
 if (isset($_POST['FIO'])) {$FIO = $_POST['FIO'];}
 if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
 if (isset($_POST['massage'])) {$massage = $_POST['massage'];}

 $address = "funnyfarm@funnyfarm.xyz";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "ФИО : $FIO  \r\nТелефон : $tel \r\nСообщение : $massage";

$soobshenie= "Уведомление о новом заказе на сайте Веселая ферма";

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