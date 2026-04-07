<?php
if(isset($_POST['submit'])) {
    // Form එකෙන් එන දත්ත ලබා ගැනීම
    $name = $_POST['full_name'];
    $email = $_POST['user_email'];
    $phone = $_POST['user_phone'];
    $message = $_POST['user_message'];

    // Email එක යැවිය යුතු ලිපිනය (ඔයාගේ Email එක මෙතනට දාන්න)
    $mailTo = "nimantha.anjana11062@gmail.com";
    
    // Email එකේ Subject එක
    $subject = "New Contact Form Message from " . $name;
    
    // Email එකේ ඇතුළත පෙනෙන විදිහ (Body)
    $body = "You have received a new message from your portfolio.\n\n".
            "Name: ".$name."\n".
            "Email: ".$email."\n".
            "Phone: ".$phone."\n\n".
            "Message:\n".$message;

    // Headers (Email එක එවපු කෙනාගේ විස්තර පෙන්වීමට)
    $headers = "From: " . $email;

    // Email එක යැවීමේ Function එක
    if(mail($mailTo, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Something went wrong. Please try again.'); window.location.href='index.html';</script>";
    }
}
?>