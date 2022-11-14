<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		const HOST = 'smtp.gmail.com';
		const LOGIN = 'murashovam2016@gmail.com';
		const PASS = 'Welcome!995';
		const PORT = '465';

		// *** /SMTP *** //
   
   const SENDER = 'murashovam2016@gmail.com';
   const CATCHER = 'murashovam2016@gmail.com';
   const SUBJECT = 'Заявка с сайта';
   const CHARSET = 'UTF-8';
   