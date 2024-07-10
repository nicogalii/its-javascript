/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 1.Regex validation
   Write regular expressions to validate the following inputs
   1.Email Address
   Expected pattern: [any characters]@[any characters].[2-4 letters]
   2.Phone Number
   Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]
   3.Password
   Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase
   letter, one digit, and one special character]
   4.URL
   Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query
   string]#[optional fragment]
   Note
   Invent multiple test cases to thoroughly test your regular expressions
*/

// Email Address: Expected pattern: [any characters]@[any characters].[2-4 letters]
const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,4}/;
const email = "example@domain.com";

if (pattern.test(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}

// Phone Number: Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]
const pattern2 = /(\+\d{2,3})?+([-|\s]?\d{3})+([-|\s]?\d{3})+([-|\s]?\d{4})/;
const phoneNumber = "0000000000";

if (pattern2.test(phoneNumber)) { // 
  console.log("Valid phone number");
} else {
  console.log("Invalid phone number");
}

// TODO: Finire passwor e URL
// Password: Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character]
const pattern3 = ;
const password = "0000000000";

if (pattern2.test(password)) { // 
  console.log("Valid password");
} else {
  console.log("Invalid password");
}