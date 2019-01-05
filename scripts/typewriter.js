let i = 0;
let txt = "Hey, I'm Alyssa"; /* The text */
let speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}