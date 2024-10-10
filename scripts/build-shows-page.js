const div = document.createElement('div');

// create a p object with some text content in it
const date = document.createElement('p');
date.textContent = 'DATE';


const venue = document.createElement('p');
venue.textContent = 'VENUE';

const location = document.createElement('p');
location.textContent = 'LOCATION';


// put the p object inside the div object
div.appendChild(date);
div.appendChild(venue);
div.appendChild(location);

// let's see how our div object looks like
console.log(div);

const container = document.getElementById('container');

// show me the div!
container.appendChild(div);