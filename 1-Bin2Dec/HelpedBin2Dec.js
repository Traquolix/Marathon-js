/*
 * Context : 30 days of JS - Marathon.
 * Version : Searched corrections on internet.
 * Commentary : Found out that parseInt can also do base to base. Good to know.
 * Subject : https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md
 * TL;DR : 0 to 8 binary digits into their equivalent in decimal. Pure binary to decimal, no specific representation.
 */
var prompt = require('prompt');


const ask = () => {
    prompt.start()
    console.log('Enter your binary (1 to 8 characters) below. Ctrl + C to quit.')
    prompt.get(['binary'], validateEntry)
}


function validateEntry(err, result) {
    if (err) return console.error('Uhoh, there was an error', err);
    if (result.binary.length > 0 && result.binary.length <= 8) {
        console.log(parseInt(result.binary, 2))
    } else {
        console.log('ERROR : Wrong entry size.')
        ask()
    }
}

ask()

