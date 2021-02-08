<?php

$host = "localhost";    /* Host name */
$user = "monosql";         /* User */
$password = "Dhf8SLywh8GitvoZGJb4ELm3";         /* Password */
$dbname = "monolisa_club_db";   /* Database name */

// Create connection
$con = mysqli_connect($host, $user, $password,$dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

