# Iteration 2 - APIs and integrations

## Stories
When I’ve found alternatives, I can compare their relative environmental impacts to one another, so that I can understand which is the best choice.

When I have decided to buy a specific product, I can find the exact place where I can buy that product, so that I don't give up and buy whatever is most convenient.

## Data Source
An external product listing API that includes product and store location information will be provided. Your Node.js
application will query the API based on the data model you introduced in the first iteration.

## Suggested course of action
A note for the 2nd story in this iteration: You are only expected to be able to show the address of the chosen store in this iteration. You are not expected to implement integration with Google Maps until next iteration. But the mockups show the address integrated with Google Maps in a map overlay? The suggested approach is make up a simple UI to display the address - only intended for this iteration. Once you have Google Maps integration implemented you can move this UI representation to a map overlay.

### Week 1
- Devise a scheme for querying the API using your existing data model. How will you map from your data model to the
 product API? What problems does the API pose? Document your thought processes around this. Integrating with APIs is
hard work and these lessons are great resources for interviews.
- A proof-of-concept implementation of your integration.

### Week 2
- Implemented integration with product API.
- Able to view products related to categories found last week.

## Outcome
An interactive application for exploring alternatives and products that are near me.
