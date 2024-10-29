const API_KEY = "302d91b6-c483-47a9-990f-48a1daf1ee96";

const bandSiteApi = new BandSiteApi(API_KEY); 


const allShows = document.querySelector('.comment-container');


//Step 1: Create local data
// const commentEntries = [
//     // {name: "Victor Pinto", date:"11/02/2023", comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
//     // {name:"Christina Cabrera", date: "10/28/2023", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
//     // {name:"Isaac Tadesse", date: "10/20/2023", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
// ];
// console.log(commentEntries);

//Step 2: Create a function to render HTML elements. Parent element is class "comment__card" with three children: 1) "comment__card--name" 2) "comment__card--date" and 3) comment__card--comment, where "(entry)" is the object. 

function createCommentCard(entry) {

    const cardElement = document.createElement("article");
    cardElement.classList.add("comment__card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("comment__image--container");

    const cardImage = document.createElement("img");
    cardImage.classList.add("comment__image--empty");
    cardImage.src = entry.image || " "; 


    imageContainer.appendChild(cardImage);


    const positionDiv = document.createElement("div");
    positionDiv.classList.add("comment__position");

    const nameWithDateDiv = document.createElement("div");
    nameWithDateDiv.classList.add("comment__nameWithDate");

    const pTag = document.createElement("p");
    pTag.classList.add("comment__card--name");
    pTag.innerText = entry.name;

    const dateElement = document.createElement("span");
    dateElement.classList.add("comment__card--date");
    const commentDate = new Date(entry.timestamp).toLocaleDateString();
    dateElement.innerText = commentDate;

    nameWithDateDiv.appendChild(pTag);
    nameWithDateDiv.appendChild(dateElement);

    const commentElement = document.createElement("p");
    commentElement.classList.add("comment__card--comment");
    commentElement.innerText = entry.comment;

    positionDiv.appendChild(nameWithDateDiv);
    positionDiv.appendChild(commentElement);


    cardElement.appendChild(imageContainer);
    cardElement.appendChild(positionDiv);

    console.log(cardElement);
    return cardElement;
}
// createCommentCard({});


//turn into async await. create instance of bandsite API, then follow loop
let renderCommentCards = async () => {
    const myCommentsEl = document.querySelector(".comment__card--comment");
    myCommentsEl.innerHTML ="";

    try {
        const commentEntries = await bandSiteApi.getComments();  //added this to fetch comments
        console.log("check:", commentEntries); //added this to check if comments are fetching

        for (let i=0; i < commentEntries.length; i++){
            const card = createCommentCard(commentEntries[i]);
            myCommentsEl.append(card);
        }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
};

renderCommentCards();

//Method for Comment Button Action

// document.addEventListener("DOMContentLoaded", () => {

    const formEl = document.querySelector(".commentforum");
    const nameInput = document.getElementById("inputName");
    const commentInput = document.getElementById("inputComment");

    formEl.addEventListener("submit", async (event) => {
        event.preventDefault();

        nameInput.classList.remove('error');
        commentInput.classList.remove('error');

        let hasError = false;
        
        if (nameInput.value.trim() === '') {
            console.log('Name input is empty');
            nameInput.classList.add('error'); // Add error class if name is empty
            hasError = true;
        }

        // Validate comment
        if (commentInput.value.trim() === '') {
            console.log('Comment input is empty'); 
            commentInput.classList.add('error'); // Add error class if comment is empty
            hasError = true;
        }

        // If there's an error, show the outline and return early
        if (hasError) {
            return; // Exit if there's an error
        }

        let cardData = {
            name: event.target.userName.value,
            comment: event.target.userComment.value,
        };

    // console.log(commentEntries);
    
    try {
        const response = await bandSiteApi.postComment(cardData);
        console.log(response);

        await renderCommentCards();
    

    formEl.reset();
    } catch (error) {
        console.error('Error:', error);
        }
    });
