<?php
if(isset($_GET['name'])) {

  function jsonInfo($description) {
    echo json_encode(array(
      "Language" => $_GET['name'],
      "Description" => $description
    ));
  }

  switch($_GET['name']) {
    case "HTML":
      jsonInfo("Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.");
      break;
    case "PHP":
      jsonInfo("PHP: Hypertext Preprocessor is a server-side scripting language designed for Web development, but also used as a general-purpose programming language.");
      break;
    case "CSS":
      jsonInfo("Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.");
      break;
    case "SQL":
      jsonInfo("SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.");
      break;
    case "JavaScript":
      jsonInfo("JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.");
      break;
    case "JSON":
      jsonInfo("In computing, JavaScript Object Notation or JSON is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.");
      break;
    case "Python":
      jsonInfo("Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.");
      break;
    default:
      echo "NO VALID LANGAUGE PROVIDED";
      break;
  }
} else {
  echo "NO VALID LANGAUGE PROVIDED";
}
?>

