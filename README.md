# Car Subscription Signup

> Fork to another git repo. (You might not want to use your personal repo if you do not want your current employer to see this.)

## Problem

Create a React frontend with a Node (micro) backend that allows a customer to create a new car subscription.

A car subscription requires:

* Information from the customer:

  * Name
  * Email
  * Date of Birth
  * Subscription Length (7 or 28 days)
  * Chosen vehicle

* Information from our services:
  * List of vehicles
    * At least description, odometer
  * Pricing

### Required Pages

1.  Create Subscription Page
2.  Success Page With Information About Subscription

### Guidelines

1.  Check into Git periodically
2.  Use any libraries you like
3.  Persistance does not need to be complicated (in-memory is fine)
4.  Take 1 - 2 hours on it
5.  Document your assumptions, describe what else would need to be done to make it "production-ready". Describe the approach you would take to test frontend and backend code.

### What We Are Looking For

1.  Coding skills
2.  Knowledge of React, NodeJS
3.  Ability to learn and apply a new library ([micro](https://github.com/zeit/micro))


***

### How to run

1. run `npm start` in each service project directory
2. run `npm start` in client directory

### Assumptions

- The model of the vehicle. The attributes of a vehicle: vin, make, model, year, mileage, image url.
- That a subscription was saved to a db
- Start date is a part of the subscription model
- Client and services would share domain in production
    -added cors handler in services for development
- client side would be part of larger app
    -no where to go after success in current iteration based on this assumption
- used flexdrive blue color as primary app color

### Steps to make production ready

- Validating requests on backend for correct parameters
- error handling on frontend (i.e. some sort of error page or notification if service fails)
- loading indicators for services
- ui improvements
    -animations more polished (i.e. timing sliding with step maybe, slide from left when going backwards)
    -add more images, app bar, footer. ui is bare bones right now
    -more theming for fonts, font sizes, colors, etc.
- pagination for vehicles if there are a lot more to choose from
- maybe persist user progress to db rather than local storage
- payment system?

### Testing

-Test frontend (most likely Jest since create react app is confogured for it)
    - test that correct child components render based on current progress and conditions
    - test that each subcomponent renders the right buttons and values based on progress and conditions
    - test that parents are updated when changes made in child (i.e. state of parent updated when change made in child)
    - use mock api calls to see that components render correctly given repsonse form api

-Test backend (mocha/chai perhaps)
    -Test each endpoint using assertions from chai that repsonse from endpoint is correct or correct error is given
     based on request parameters

