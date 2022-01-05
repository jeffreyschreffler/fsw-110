/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */


let displayKey = document.getElementById('output');
let h1 = document.createElement('h1');
displayKey.append(h1);

window.addEventListener('keydown', function (e){
   h1.textContent = `Key Pressed: ${e.key} | Key Code: ${e.keyCode}`;
   console.log(e);
});

