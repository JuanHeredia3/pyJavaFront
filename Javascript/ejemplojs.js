function makeSizer(size) {

    return function() {
    
    document.body.style.fontSize = size + 'px';
    
    };
    
}
    
     
    
var size12 = makeSizer(12);
    
var size14 = makeSizer(14);
    
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;

document.getElementById('size-14').onclick = size14;

document.getElementById('size-16').onclick = size16;

var makeCounter = function() {

    var privateCounter = 0;
    
    function changeBy(val) {
    
        privateCounter += val;
    
    }
    
    return {
    
    increment: function() {
    
        changeBy(1);
    
    },
    
    decrement: function() {
    
        changeBy(-1);
    
    },
    
    value: function() {
    
        return privateCounter;
    
    }
    
    }
    
};
    
     
    
var Counter1 = makeCounter();
    
var Counter2 = makeCounter();
    
alert(Counter1.value()); /* Muestra 0 */
    
Counter1.increment();
    
Counter1.increment();
    
alert(Counter1.value()); /* Muestra 2 */
    
Counter1.decrement();
    
alert(Counter1.value()); /* Muestra 1 */
    
alert(Counter2.value()); /* Muestra 0 */

function showHelp(help) {

    document.getElementById('help').innerHTML = help;
    
}
    
     
    
function makeHelpCallback(help) {
    
    return function() {
    
        showHelp(help);
    
    };
    
}
    
     
    
function setupHelp() {
    
    var helpText = [
    
        {'id': 'email', 'help': 'Dirección de correo electrónico'},
    
        {'id': 'name', 'help': 'Nombre completo'},
    
        {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
    
    ];
    
     
    
    for (var i = 0; i < helpText.length; i++) {
    
        var item = helpText[i];
        
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    
    }
    
}
    
     
    
setupHelp();