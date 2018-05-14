// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//     greeting = 'Good evening!';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon!';
// } else if (hourNow > 0) {
//     greeting = 'Good morning!';
// } else {
//     greeting = 'Welcome!';
// }

// document.write('<h3>' + greeting + '</h3>');













let today = new Date();
let timeNow = today.getHours();
let greetings;

if ( timeNow >= 18 ) {
    greetings = 'Good Evening';
} else if ( timenow >= 12 ) {
    greetings = 'Good Morning';
} else if ( timenow >= 0 ) {
    greetings = 'Good Morning';
} else {
    greeting = "Welcome";
}

document.write('<h3>' + greetings + '</h3>');
