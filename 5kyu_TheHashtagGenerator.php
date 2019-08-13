<?php
// Kata URL: https://www.codewars.com/kata/the-hashtag-generator
// PHP function ucwords -> Capitalizes all first letter from a given string

function generateHashtag($str) {
   //Remove space chars and capizalize words
   $str = '#' . str_replace(' ', '', ucwords($str));
   
   // If calculated Hashtag is longer than 140 chars or shorter than 1 (#) return false, other case returns calculated hashtag
   return (strlen($str) > 140 || strlen($str) == 1) ? false : $str;
}
