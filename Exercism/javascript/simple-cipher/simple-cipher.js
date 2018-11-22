/* eslint-disable comma-dangle */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line no-unused-vars
export class Cipher {
    constructor(key) {
        if (key === '') {
            // not allow emply key
            throw ('Bad key');
        }
        this.key = key || this.ramdomKey();
        if (key && key.toLowerCase() !== key || /^\d+$/.test(key) || /(-)/.test(key) || key && key.trim() !== key) {
            // not allow any Upper case in key
            throw ('Bad key');
        }
    }

    encode(input) {
        const eachCharacter = [...input];
        const encodedChars = [];
        const that = this;
        const aToz = 'abcdefghijklmnopqrstuvwxyz';
        eachCharacter.forEach((cha, index) => {
            while (index >= that.key.length) {
                index -= that.key.length
            }
            // console.log(index)
            // console.log(aToz.indexOf(that.key[index]))
            let newIndex = aToz.indexOf(cha) + aToz.indexOf(that.key[index]);
            if (newIndex >= aToz.length) { // if over "Z", return to start from "A"
                newIndex -= aToz.length;
            }
            encodedChars.push(aToz[newIndex]);
        }
        );
        // console.log(encodedChars.join(''))
        return encodedChars.join(''); // Convert array to string
    }

    decode(input) {
        const eachCharacter = [...input];
        const decodedChars = [];
        const that = this;
        const aToz = 'abcdefghijklmnopqrstuvwxyz';
        eachCharacter.forEach((cha, index) => {
            let newIndex = aToz.indexOf(cha) - aToz.indexOf(that.key[index]);
            if (newIndex < 0) {
                newIndex += aToz.length;
            }
            decodedChars.push(aToz[newIndex]);
        });
        return decodedChars.join('');
    }

    ramdomKey() { // gen new key with 100 letter if no input key
        const aToz = 'abcdefghijklmnopqrstuvwxyz';
        let randomKey = '';
        let randomIndex = new Number();
        let i = 0;
        for (i = 0; i < 100; i++) {
            randomIndex = Math.floor(Math.random() * aToz.length);
            randomKey += aToz[randomIndex];
        }
        return randomKey;
    }
}

// const cipher = new Cipher('abc')
// console.log(cipher.encode('iamapandabear'))