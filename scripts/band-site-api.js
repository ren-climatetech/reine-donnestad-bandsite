// constructor: The constructor accepts an API key as its only parameter (e.g. apiKey). This API key will be used when making POST and GET requests to the API (such as in the postComment and getComments methods).

// const API_KEY = "302d91b6-c483-47a9-990f-48a1daf1ee96";


class BandSiteApi {
    constructor (apiKey){
// The constructor must store the API key parameter in an instance property (e.g. this.apiKey).
        this.apiKey = apiKey;
// The constructor must store the base API URL in an instance property (e.g. this.baseUrl). This property can be set to a hardcoded string, as it is not passed as a parameter.
        this.baseURL =  "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    } 

// postComment: This method accepts a comment object as its only parameter. It must send a POST request to the API with the comment object as the body, using the API key instance property (this.apiKey) to authenticate the request.
async postComment(commentObject) {
    try {
        const res = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, commentObject,{
                headers: {
                    'Content-Type': 'application/json', 
                },
            });
        return res.data;
    } catch (error) {
        console.log("Error adding comment:",error);
        throw error;
    }
}

// getComments: This method accepts no parameters. It must send a GET request to the API, using the API key instance property (this.apiKey) to authenticate the request.


async getComments() {
    try {
        const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);

// The getComments method must sort the array of comments from the API, returning them in order from newest to oldest.
        return response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // console.log(this.getComments)
    } catch (error) {
        console.log("Error adding comment:",error);
        throw error;
    }
}

// getShows: This method accepts no parameters. It must send a GET request to the provided shows API, using the API key instance property (e.g. this.apiKey) to authenticate the request.
async getShows() {
    try {
        const res = await axios.get(                                    
            `${this.baseURL}/showdates?api_key=${this.apiKey}`
        );

// The getShows method must return the array of show data objects returned from the API.
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
}

