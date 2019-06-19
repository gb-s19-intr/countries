## FILTERING:
- Take filtering direction from a user (form or other)
  - Button (pages)
  - Input (search)
  - Drop downs? (ranges)
  - Multiple filters at once (radio buttons)
  - Dynamic pages + delegation event


## NEXT:
- Setup a function to print any Array
- Lab: Pagination
- More filters + user input
- Setup with Github


## LAB

### Pagination
Create 3 buttons that act as pages, where each page shows 3 countries only. For example, clicking the 1st button shows countries 1-3, 2nd shows countries 4-6, 3rd shows countries 7-9, etc.

Steps to follow (optional):

1. Search the Array docs on MDN and find a method that will return a new Array of only some part of the original Array. 
2. Starting with the full set of `countries`, use the function from Step 1 to build an array of only the first three countries (index: 0, 1 and 2). Test in your console.
3. Pass that new Array to `printCountriesToList` as a parameter. What happens?
4. Wrap the above steps into a function called `showPageOne`
5. Connect that page to the appropriate button using a listener
6. Repeat for Page 2 and 3

### RETURN FOR 12:40
