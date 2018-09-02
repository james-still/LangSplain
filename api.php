<?php
// language to wiki article name
$languages = array(
  "HTML" => "HTML",
  "PHP" => "PHP",
  "Cascading_Style_Sheets" => "CSS",
  "SQL" => "SQL",
  "JavaScript" => "JavaScript",
  "JSON" => "JSON",
  "Python_(programming_language)" =>"Python"
);

if(isset($_GET['name']) && in_array($_GET['name'], $languages)) {
  // get wiki description of that language
  $description = json_decode(file_get_contents("https://en.wikipedia.org/w/api.php?action=opensearch&search=".array_search($_GET['name'], $languages)."&limit=1&prop=pageimages&format=json"));
  $description = $description[2][0];

  // return json content
  echo json_encode(array(
    "Language" => $_GET['name'],
    "Description" => $description,
    "Logo" => "https://james-still.com/images/".$_GET['name'].".png"
  ), JSON_PRETTY_PRINT);
} else {
  // error message, no valid language was provided
  echo "NO VALID LANGUAGE PROVIDED";
}
?>
