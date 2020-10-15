<?php
/* Storing name email and message to variable */
    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $message = $_Post['message'];

    $email_from = 'r.toldsep@gmail.com'; /* Where I want to send email from */

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User Message: $message.\n".

    $to = "r.toldsep@gmail.com"; /* Where I want to receive emails */

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n"; 

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>