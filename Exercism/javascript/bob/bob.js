/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    var message = message.trim() //removes whitespace from both sides of a string.

    if (message.toUpperCase() === message && message.charAt(message.length - 1) === "?" && /[A-Za-z]/.test(message)) { //Yell a question, using regExp to make sure at least one character inclued
        return "Calm down, I know what I'm doing!";
    } else if (message.charAt(message.length - 1) === "?") { //question must end at "?"
        return "Sure.";
    } else if (message.toUpperCase() === message && /[A-Za-z]/.test(message)) { //Yell, all upper case and at least one character
        return "Whoa, chill out!";
    } else if (message == "") {
        return "Fine. Be that way!";
    } else {
        return "Whatever.";
    }
};
