# Iteration 1 - Data models and REST APIs

## Stories
When I want to buy something, I can find sustainable alternatives, so that I can make an informed, sustainable choice about what product to buy.

## Data Source
[This JSON file](./data.json) including sustainability information.

## Suggested course of action:
There is only one user-story to complete during this iteration, but *do not underestimate* the associated amount of work. The main focus of this iteration will be to set up everything, wire the back- and frontend together and a smooth start on the project will have major positive impact on the schedule of the rest of the project.

### Week 1
During the first week there are two main things you need to do:

A) Design a data-model
B) Wire up the basic architecture needed for the application

### Designing a data-model

Make a break-down of the objects, concepts and functionality you need to replicate in your application. Work out how the different elements may be represented in a database and make sure you think about relationships between the various tables (i.e. one-to-many ralationships and many-to-many relationships). Remember to try to keep things as simple as possible and be prepared to revise and extend your model as the project will progress.

### Basic architecture

Make sure you have a basic "hello world" type of app running that will support our architecture. 

This means you need to set up the following:
- You need a React application running client-side in the browser.
- An express server running on node.js on a server on your local development machine.
- A database server running MySql on your local development machine.

Once these are set up you need to wire things together. Make sure that you can:
- The database server should have some test table with test data. Could be a simple table ("Hello") with a single row with a value ("Hello World") just to get set up.
- The express server should have a test endpoint set up (for example `yourserver:3000/hello`) and it must be able to query the MySql server and return data from the database whenever a request is passed from the client.
- You should implement the needed code in React in order to send a request to the express server and print out the contents of the response in the browser (possibly just using `console.log`). Think about building the logic needed to query the express server in a reusable way as this is something that will need to be reused across a lot of components.

### Week 2
- Write a script (migration script) that inserts data from JSON file provided by us into your data model.
- Integrate the data model and API with a client-side application that provides basic browsing functionality. This
can be search or just listing. Up to you.

## Outcome
An application with the architecture described in the main [README.md](./README.md) that provides the features above.
Simple lists and searching of alternatives. No need to provide concrete products at this time.
