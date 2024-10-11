const allShows = document.querySelector('.shows');

const showData = [
    {date: 'Mon Sept 09 2024', venue: 'Ronald Lane', location: 'San Francisco'},
    {date: 'Tues Sept 17 2024', venue: 'Pier 3 East', location: 'San Francisco'},
    {date: 'Sat Oct 12 2024', venue: 'View Lounge', location: 'San Francisco'},
    {date: 'Sat Nov 16 2024', venue: 'Hyatt Agency', location: 'San Francisco'},
    {date: 'Fri Nov 29 2024', venue: 'Moscow Center', location: 'San Francisco'},
    {date: 'Wed Dec 18 2024', venue: 'Press Club', location:'San Francisco'},
];

for (let i=0; i < showData.length; i++) {
    const showContainer = document.createElement('div');
    showContainer.classList.add('show-container');

    // create a p object with some text content in it
    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = showData[i].date;

    const venue = document.createElement('p');
    venue.classList.add('venue');
    venue.textContent = showData[i].venue;

    const showLocation = document.createElement('p');
    showLocation.classList.add('location');
    showLocation.textContent = showData[i].location;

    const button = document.createElement("button");
        button.innerText = "BUY TICKETS";

    showContainer.appendChild(date);
    showContainer.appendChild(venue);
    showContainer.appendChild(showLocation);
    showContainer.appendChild(button);


button.addEventListener('click',()=> {
    console.log('someone bought a ticket');
});

allShows.appendChild(showContainer);
}

console.log(allShows);

