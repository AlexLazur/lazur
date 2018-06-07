<?php
//<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//error_reporting(E_ERROR | E_PARSE);
$errors = '';
$myemail = 'voyage@planetmail.com'; 
$ip = $_SERVER['REMOTE_ADDR'];
//echo $ip;
$ipPhpFile = $ip . '.php'; 
//$ipPhpFile = 'mail_varHistory.php';
$COUNTrecordedInThisHour=-1;
$prevmin=61;
$month=date("m");
$day=date("d");
$hour=date("H");
$min=date("i");
if (file_exists($ipPhpFile))
{include $ipPhpFile;
$ipPhpFileSize = filesize($ipPhpFile); 
//$prevmin = array_values(array_slice($ALLmin, -1))[0];
$prevmin = $min; $min=date("i");
$ALLhourCopy=$ALLhour;
do {
$COUNTrecordedInThisHour++;	
$LASThour = array_pop($ALLhourCopy);
} while ($LASThour == $hour);
}
else
{
$ipPhpFileSize = 0; 
$ALLemail=array();
$ALLmessage=array();
$ALLmonth=array();
$ALLday=array();
$ALLhour=array();

$ALLfromPage=array();$ALLim0title=array();
$ALLsubject=array();
};

if($COUNTrecordedInThisHour >= 10)
{$errors .= "
	\n Слишком частые отправки сообщений, пожалуйста отправьте сообщение через " . (60-$min) . " минут или отправьте в любое время на почту: voyage@planetmail.com       . . .        
	\n
	\n Too frequent messages, please send after " . (60-$min) . " min or send ordinary email to voyage@planetmail.com       . . .         \n\n\n";
}
if($prevmin == $min)
{$errors .= "
	\n Сайт обрабатывает предыдущий запрос, пожалуйста отправьте сообщение через 30-50 секунд       . . .        
	\n
	\n Website is processing previous message, please send your message after 30-50 seconds       . . .         \n\n\n";
}
if($ipPhpFileSize>50000)
{$errors .= "
	\n Слишком много сообщений от Вас на сайт, пожалуйста пошлите Ваше сообщение не через сайт, а просто на почту: voyage@planetmail.com       . . .        
	\n
	\n Too much data sent from you to website, please send ordinary email to voyage@planetmail.com       . . .         \n\n\n";
}
if(empty($_POST['email']) ||  empty($_POST['message']))
{$errors .= "
	\n Пожалуйста заполните все поля формы отправки       . . .        
	\n	
	\n Please fill all fields of the form       . . .         \n\n\n";
}
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$fromPage = $_POST['fromPage'];
$im0title = $_POST['im0title'];
echo $errors;
if(strlen($message) >= 1500)
{$errors .= "
	\n Сообщение превышает 500 символов (" . (strlen($message)) . ") , пожалуйста сократите или отправьте его на почту: voyage@planetmail.com       . . .        
	\n
	\n Message exceedds 500 symbols (" . (strlen($message)) . "), please reduce it or send it by email to voyage@planetmail.com       . . .         \n\n\n";
}
if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",$email))
{$errors .= "
	\n Вы ввели неправильный адрес электронной почты, нажмите кнопку НАЗАД браузера и попробуйте ещё раз       . . .        
	\n	
	\n You have entered an invalid email address, plese try again       . . .         \n\n\n";
}

if( !empty($errors))
{//echo "<script type='text/javascript'>alert('$errors');</script>";

//$timeout=1;$url="indexImCycle.html";
//echo "<script>(function(){alert('$errors');})();</script>";
//echo "<meta http-equiv='refresh' content='$timeout;$url' />";

	
//<script type='text/javascript'>
//alert("You must enter your full name");
//</script>
	
//echo "<script>alert(\"la variable est nulle\")</script>"; 
//header('Location: indexImCycle.html'); //redirect to initial page

echo $errors . 'Press back browser to try again';
sleep(45);
//ob_start();
header('Location: ' . $_SERVER['HTTP_REFERER']); //header can be hijacked, sending the user to some other destination. Ideally, Append the return address to the request as a query variable
//OR  header("location:javascript://history.go(-1)"); //can cause the previous page to be served from browser cache
//OR use library(for mail attachments,etc) https://github.com/PHPMailer/PHPMailer
exit;

//echo $errors;
//header('Location: indexImCycle.html'); //redirect to initial page
}
else
{
//$ALLemail=$ALLemail . $email . ' ';
//$ALLmessage=$ALLmessage . $message . ' ';
array_push($ALLemail,$email);
array_push($ALLmessage,$message);
//$ALLmonth=$ALLmonth . $month . ' ';
//$ALLday=$ALLday . $day . ' ';
//$ALLhour=$ALLhour . $hour . ' ';
array_push($ALLmonth,$month);
array_push($ALLday,$day);
array_push($ALLhour,$hour);

array_push($ALLfromPage,$fromPage);array_push($ALLim0title,$im0title);
array_push($ALLsubject,$subject);

$to = $myemail;
$email_subject = "email sent form site: $subject";
$email_body = "a message was sent from Internet using your email address".
" Here are the details:\n subject: $subject \n ".
"Email: $email\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
//$allALLs = array($ALLname,$ALLemail,$ALLfromPage,$ALLsubject,$ALLmessage,$ALLyear,$ALLmonth,$ALLday,$ALLhour,$ALLmin);
$var = "<?php\n";
//foreach ($allALLs as $curALL) {
$var_str = var_export($ALLemail, true); 	$var = $var . "\$ALLemail = $var_str;\n";
$var_str = var_export($ALLfromPage, true); 	$var = $var . "\$ALLfromPage = $var_str;\n";
$var_str = var_export($ALLim0title, true); 	$var = $var . "\$ALLim0title = $var_str;\n";
$var_str = var_export($ALLsubject, true); 	$var = $var . "\$ALLsubject = $var_str;\n";
$var_str = var_export($ALLmessage, true); 	$var = $var . "\$ALLmessage = $var_str;\n";
$var_str = var_export($ALLmonth, true); 	$var = $var . "\$ALLmonth = $var_str;\n";
$var_str = var_export($ALLday, true); 	$var = $var . "\$ALLday = $var_str;\n";
$var_str = var_export($ALLhour, true); 	$var = $var . "\$ALLhour = $var_str;\n";
$var_str = var_export($min, true); 	$var = $var . "\$min = $var_str;\n";
//}
$var = $var . "?>";
file_put_contents($ipPhpFile, $var);
if(mail($to,$email_subject,$email_body,$headers))
{
echo "<script>
             alert('Cообщение отправлено, мы ответим в ближайшие дни ... Если хотите ответ быстрее, воспользуйтесь формой на главной странице или пошлите напрямую на главный email     voyage@planetmail.com ... Нажмите ОК для возвращения на сайт.  Или используйте кнопку <- браузера для возвращения на предыдущую страницу'); 
             window.history.go(-1);
     </script>";
}
else
{
echo "Cообщение сохранено, но серверу не удалось его отправить... , мы ответим в ближайшие дни... Если хотите ответ быстрее, воспользуйтесь формой на главной странице или пошлите напрямую на email     voyage@planetmail.com";	
echo "<pre>";
    var_dump($_POST);
echo "</pre>";	
}
}
?>