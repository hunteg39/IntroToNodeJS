console.log('Hello World');
//Grant Hunter IS350 Lab 7
//Question 1:

var firstname = '"John ';
var lastname = 'Doe" ';
var age = '"26" ';
console.log(firstname + lastname + 'is '+ age +'years old!');

//Question 2:

var TotalCost;
var price = 5.99;
var quantity = 10;
var message;
console.log('"Total Cost" is '+ price*quantity);

if(quantity >= 6) {message = '"Quantity must be less than 6"'}
console.log(message);

//Question 3:

var email='Johndoe@uwosh.edu';
var emailDomain='@uwosh.edu';
var result=email.includes(emailDomain);
var password='password';
var Cpassword='password';
var messagetres;
var n=password.length;

console.log('Email: '+email)
console.log('Password: '+password)
console.log('Confirm Password: '+Cpassword)

if(password.length <=6){messagetres='Please verify your email is @uwosh.edu, password is greater than 6 characters and passwords match'}
else if(result=false){messagetres='Please verify your email is @uwosh.edu, password is greater than 6 characters and passwords match'}
else if (password!=Cpassword){messagetres='Please verify your email is @uwosh.edu, password is greater than 6 characters and passwords match'}
		else{messagetres='"Welcome!"'};
console.log(messagetres);	