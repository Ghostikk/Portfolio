<?php 

$name = $_POST['name'];
$phone = $_POST['tel'];
$text = $_POST['text'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'kot_goust@mail.ru';    // Наш логин
$mail->Password = 'ezyxeud4HbB6bhVNH4uE'; // Пароль сгенирирован специально для приложенией
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; 
$mail->setFrom('kot_goust@mail.ru', 'PortFolio');
$mail->addAddress('profinvest-74@mail.ru');
$mail->Subject = 'Данные';
$mail->Body    = '
	Пользователь оставил данные: 
	Имя: ' . $name . '
  Сообщение: ' . $text. '
	E-mail: ' . $email . '
	Номер телефона: ' . $phone . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>