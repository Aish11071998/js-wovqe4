// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var x=prompt('Enter the name');
var a=prompt('enter start index');
if(isNaN(a))
{
  alert('Enter only numbers')
  var a=prompt('enter start index');

}

var b=prompt('enter end index');
  if(isNaN(b))
  {
  alert('Enter only numbers')
  var b=prompt('enter end index');
  
  }
   var y=x.slice(a,b);
alert(y);

