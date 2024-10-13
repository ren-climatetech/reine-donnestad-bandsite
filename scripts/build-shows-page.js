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

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-container');

    const headerDate = document.createElement('p');
    headerDate.classList.add('shows__header');
    headerDate.textContent = 'DATE';

    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = showData[i].date;

    dateContainer.appendChild(headerDate);
    dateContainer.appendChild(date);

    const venueContainer = document.createElement('div');
    venueContainer.classList.add('venue-container');

    const headerVenue = document.createElement('p');
    headerVenue.classList.add('shows__header');
    headerVenue.textContent = 'VENUE';

    const venue = document.createElement('p');
    venue.classList.add('venue');
    venue.textContent = showData[i].venue;

    venueContainer.appendChild(headerVenue);
    venueContainer.appendChild(venue);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');


    const headerLocation = document.createElement('p');
    headerLocation.classList.add('shows__header');
    headerLocation.textContent = 'LOCATION';

    const showLocation = document.createElement('p');
    showLocation.classList.add('location');
    showLocation.textContent = showData[i].location;

    locationContainer.appendChild(headerLocation);
    locationContainer.appendChild(showLocation);

    const button = document.createElement("button");
    button.innerText = "BUY TICKETS";
    
    showContainer.appendChild(dateContainer);
    showContainer.appendChild(venueContainer);
    showContainer.appendChild(locationContainer);
    showContainer.appendChild(button);

    button.addEventListener('click',()=> {
        console.log('someone bought a ticket');
    });
    
    allShows.appendChild(showContainer);
    }
    
    console.log(allShows);