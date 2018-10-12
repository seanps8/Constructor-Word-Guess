function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.toString = function () {
        if (this.guessed) {
            console.log(this.letter);
        } else {
            console.log("_");
        }
    };
    this.check = function (letter) {
        if (letter === this.letter) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    }

}


module.exports = Letter;