const remote = require('electron').remote;
const main = remote.require('./app.js');

var button = document.createElement('button')
button.textContent='Open Window';
button.addEventListener('click',() => {
    var window=remote.getCurrentWindow();
    main.openWindow('about');
    window.close();
    },false)
document.body.appendChild(button)