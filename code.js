// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.

let pageHistory = []; // creates an empty array which stores the page that user visits as they navigate through the pages
while (currentPage !== null) {
  // checks whether current page is an ending one, if so, it would print the content of that ending page and display The End
  if (isEnding(currentPage)) {
    // Prints the ending page and end the game
    document.write(pages[currentPage]);
    document.write("<h2>The End!</h2>");
    currentPage = null;
  } else {
    // Prompts the user for the next page
    let nextPage = prompt(pages[currentPage] + "\nWhat page would you like to go to?");
    if (nextPage === null) {
      // Ends the game if the user clicks cancel
      currentPage = null;
      alert("You have ended the game!");
    } else {
      // Converts the user's input to a number
      nextPage = parseInt(nextPage);
      
    }

     // checkes if user input is between pages 1 - 20
     if (nextPage < 0 || nextPage > 20 || isNaN(nextPage)) {
        alert( "Page" + " " + nextPage + " " + "does not exist. Please enter a valid page number, between 1 - 20 and try again!");
        // Alerts if user input is the same as the page number they are already on
    } else if (nextPage === currentPage) {
        alert("You are already on page " + currentPage + " ." + " Consider trying another page or follow game suggestions at the end of each page" + "!");
    }else {
      // Updates the current page and page history
      currentPage = nextPage;
      pageHistory.push(currentPage);
      // Output the current page to the document
      document.write(pages[currentPage]);
      // Outputs the user's page history for the pages they navigated through while playing the game
      document.write("<p>You turned to page " + currentPage + "</p>");
    
    
    }
  }
}

// This function checks for if a page is an ending
function isEnding(pageNum) {
  return endingPages.includes(pageNum);
}
