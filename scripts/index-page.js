const commentEntries = [
    {name: "Victor Pinto", date:"11/02/2023", comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name:"Christina Cabrera", date: "10/28/2023", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name:"Isaac Tadesse", date: "10/20/2023", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
]

console.log(commentEntries);

function createCommentCard(entry) {
    const cardElement = document.createElement("article");
    cardElement.classList.add("comment__card");

    const pTag = document.createElement("p");
    pTag.classList.add("comment__card--name");
    pTag.innerText = entry.name;

    const dateElement = document.createElement("span");
    dateElement.classList.add("comment__card--date");
    dateElement.innerText = entry.date;

    const commentElement = document.createElement("p");
    pTag.classList.add("comment__card--comment");
    pTag.innerText = entry.comment;

    cardElement.appendChild(pTag);
    cardElement.appendChild(dateElement);
    cardElement.appendChild(commentElement);

    console.log(cardElement);
    return cardElement;
}
// createCommentCard({});

let renderCommentCards = () => {
    const myCommentsEl = document.querySelector(".comment__card--comment");
    myCommentsEl.innerHTML ="";

    for (let i=0; i < commentEntries.length; i++){
        const card = createCommentCard(commentEntries[i]);
        myCommentsEl.append(card);
    }
};

renderCommentCards();

const formEl = document.querySelector(".commentforum");
formEl.addEventListener("submit",(event) => {
    event.preventDefault();

    let cardData = {
        name: event.target.name.value,
        date:event.target.date.value,
        comment:event.target.comment.value,
    };
commentEntries.push(cardData);
console.log(commentEntries);

renderCommentCards();

});


// //this is to get the button to click
// document.getElementById('commentForm').addEventListener('submit', function(event){
//     event.preventDefault();

//     const name = document.getElementById('inputName').value;
//     const comment = document.getElementById('inputComment').value;

//     console.log("Name:", name);
//     console.log("Comment:", comment);

//     const outputEntry = document.getElementById('outputEntry');
//     const newComment = document.createElement('p');
//     newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

//     console.log("New Comment Element:", newComment);
//     console.log("Output Element:", outputEntry);

//     outputEntry.appendChild(newComment);

//     document.getElementById('commentForm').reset();

// });


// //2. Get values from the form. 
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log(e.target.userName.value);
//     console.log(e.target.date);
//     console.log(e.target.inputComment);

// });


// const form = document.querySelector(".comment__forum");
// form.addEventListener("submit",(event) => {
//     event.preventDefault()

//     const name = event.target.nameInput.value;
//     const comment = event.target.position.value;

//     console.log({name});
//     console.log({comment});
// });

// //create a list item 

// // add text

// // append the list item in our HTML

// const userName = document.createElement ("li");

// playerItem.textContent = `$name`;


// //function to create a new comment entry

// // const createEntry = function(name,date,comment){
//     return {
//         name: name,
//         date: date,
//         comment: comment,
//     };
// });
// });
