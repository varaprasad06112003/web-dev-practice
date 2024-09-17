let data = []
    // Function to fetch quotes
const quotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes");
    data = await response.json(); // Assign JSON data to `data`        
        // Check if the `quotes` array is available in the response data
    if (data && data.quotes) {
        // Convert the data into HTML structure
        const quotesHTML = data.quotes.map((res) => {
            return `<p>${res.quote} - <strong>${res.author}</strong></p>`;
        }).join(''); // Combine all quotes into a single HTML string
        return quotesHTML; // Return the generated HTML
    } 
    else {
        return "<p>No quotes available</p>";
    }
};

    // Function to render quotes in the HTML
const calQuotes = async () => {
    const quotesHTML = await quotes(); // Get the HTML string from `quotes`
    document.getElementById("quote").innerHTML = quotesHTML; // Render in the DOM
};

calQuotes(); // Call the function to fetch and display quotes

console.log(data);


// let f=data=[]
// const movies = async () =>{
//     let response = await fetch("https://dummyjson.com/docs/quotes");
//     console.log(response);
//     data=await response.json();
//     console.log(data)
//     const movieHTML = data.map((movie)=>{
//         return `
//         <div>
//             <h3>${movie.author}</h3>
//         </div>
//         `
//     }).join('')
//     return movieHTML
// }

// const calMovies = async() =>{
//     // document.getElementById("quote").innerHTML = awiat movies();
//     document.getElementById("quote").innerHTML = await movies();
// }

// calMovies();