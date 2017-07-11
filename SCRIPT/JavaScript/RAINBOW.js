function StartRainbow() {
window.setInterval ("Rainbow()", 100);
}

function Rainbow() {
if (rainbow.style.color == 'red')
  rainbow.style.color = 'green';
else if (rainbow.style.colo == 'green')
  rainbow.style.color = 'blue';
else if (rainbow.style.color == 'blue')
  rainbow.style.color = 'yellow';
else if (rainbow.style.color == 'yellow')
  rainbow.style.color = 'orange';
else if (rainbow.style.color =='orangw')
  rainbow.style.color = 'purple';
else
  rainbow.style.color = 'red';
}