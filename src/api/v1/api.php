<?php
  header('Content-Type: application/json;charset=utf-8');
  if (isset($_GET["action"]) && !empty($_GET["action"])) { //Checks if action value exists
    $action = $_GET["action"];
    switch($action) { //Switch case for value of action
      case "gallery": echo_data('../../data/galleryList.json'); break;
      case "members": echo_data('../../data/membersData.json'); break;
      case "allMembers": echo_data('../../data/allMemberList.json'); break;
      case "indiafest": echo_data('../../data/indiafest.json'); break;
      case "contacts": echo_data('../../data/icecContacts.json'); break;
      case "events": echo_data('../../data/communityEvents.json'); break;
      case "announcement": echo_data('../../data/annoucements.json'); break;
      case "message": send_mail(); break;
      default : echo_default_data(); break;
      
    }
  }

  function echo_data($file){
    $data = file_get_contents ($file);
    echo $data;
  }

  function echo_default_data(){
    echo '[]';
  }

  function send_mail(){
    $data = file_get_contents('php://input');
    $json = json_decode($data);
    $message = $json->message;
    $from= $json->from;
    $subject = $json->subject;
    $email = $json->name . ' <' . $from . '>';
        
    $headers = 'From: '. $json->name . ' <webmaster@icec-florida.org>' . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    mail('amrendra@gmail.com', '(Web) - '. $subject , $message, $headers);
    echo(true);
  }
?>