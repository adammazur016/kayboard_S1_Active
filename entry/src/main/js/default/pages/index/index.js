let counter = 0;

let letters = "";

export default {
    data: {
        title: ""
    },

    click(letter){
        letters = letter;
        console.log("clicked");
        counter++;
        let that = this;
        if(counter == 1 && letter != ' '){
            test(that);
        } else if (letter == ' '){
            this.title = this.title + ' ';
            counter = 0;
        }

    },

    backspace(){
        this.title = this.title.slice(0,-1);
    }
}

function test(that){
     var intervalID = setInterval(function () {

           console.log("do very 1s.");
           console.log("counter is: " + counter);
           //should be in the end
           if(counter > 0){
                console.log("Adding: " + letters[(counter-1)%3]);
                that.title = that.title + letters[(counter-1)%3];
           }
           counter = 0;
           clearInterval(intervalID);
     }, 800);
 }