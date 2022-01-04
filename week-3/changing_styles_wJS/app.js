
// create a loop for 5 h2 element
function elementLoop(elm,times) {
    for( let i = 0; i < times; i++) {
        let elements = document.createElement(elm);
         document.body.append(elements)
         elements.textContent = "Week 3!!!"
         //style
        elements.style.fontSize = '20px';
        elements.style.fontWeight = 'lighter';
        elements.style.fontFamily = 'sans-serif'
        elements.style.color = 'cornflowerblue';
        elements.classList.add('border')
}
    }

    elementLoop('h2',5);