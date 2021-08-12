var colors = ['rgb(0,0,0)', 'rgb(96,96,96)', 'rgb(136,136,136)']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 3000);