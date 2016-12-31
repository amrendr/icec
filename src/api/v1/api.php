<?php
  header('Content-Type: application/json;charset=utf-8');
  if (is_ajax()) {
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
        default : echo_default_data(); break;
        
      }
    }
  }

  //Function to check if the request is an AJAX request
  function is_ajax() {
  return true;
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
  }

  function echo_data($file){
    $data = file_get_contents ($file);
    echo $data;
  }

  function echo_default_data(){
    echo '[]';
  }
?>