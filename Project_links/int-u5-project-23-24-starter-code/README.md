# Unit 5 Project: Suggestion App

*Note: the following are aligned with a MOVIE suggestion app - you should adapt to whatever you want.*

## How the app should work 🤔
- When a user types in a movie genre and presses "Submit!" they will see pictures/captions of suggested movies appended to the page.


## HTML
1. Add any additional questions or inputs you like.
2. Create a class name for the input(s).
3. Create a class name for the button(s).
4. We want our show suggestions to appear in a div. There's one div on the page. Give it a class! 
5. Change the h1 to call the app whatever you want! 

## CSS
1. Change the background, text size, and text color.
2. Change anything else you want. 

## JS
### Arrays
1. Create **at least three arrays**  that contain the links to images of few movies you recommend in each genre.
2. The name of the arrays should be the name of the genres you chose. 

### Variables
1. Save your HTML elements into variables.
2. We want our suggestions to appear in the div. Save that to a variable too! 

### Conditionals & Loops

When the user types in a genre, the images of the recommendations should append to the page. 

1. Inside the first click handler (already declared), we'll need to save the user's input to a variable. To do that, you'll need to use the `.value` method.`
2. Write a conditional  statement that checks if the user has typed in the first of the genres you chose.
3. Within that first conditional, write a loop that appends each image link in the first array as an `<img>` tag to the div. 
4. Do the same thing now for any other arrays you created! *NOTE: remember to use `else-if`*
 

Use `console.log` along the way to test your code is working.