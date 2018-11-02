function Bob() {
    
  };

    Bob.prototype.hey = function(input) {
        var input = input.trim() //removes whitespace from both sides of a string.

        if (input.toUpperCase() === input && input.charAt(input.length - 1) === "?" && /[A-Za-z]/.test(input)) { //Yell a question, using regExp to make sure at least one character inclued
            return "Calm down, I know what I'm doing!";
        } else if (input.charAt(input.length - 1) === "?") { //question must end at "?"
            return "Sure.";
        } else if (input.toUpperCase() === input && /[A-Za-z]/.test(input)) { //Yell, all upper case and at least one character
            return "Whoa, chill out!";
        } else if (input == "") {
            return "Fine. Be that way!";
        } else {
            return "Whatever.";
        }
    };

  module.exports = Bob;

  var bob = new Bob();
  console.log(bob.hey('23432423?     '));

