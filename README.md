# PEACE for Moms Mobile Application

A mobile application that helps healthcare professionals treat perinatal patients with ease. PEACE for Moms is a service that connects Georgia healthcare professionals with pyschiatrics who specialize in perinatal mental health. This a project in collaboration with Emory University School of Medicine, and our client for this project is Dr. Rebecca Woo. Learn more about this service on their website: https://www.peace4momsga.org/

## Installation Guide
#### Prerequisites
To simulate the app, you must have Expo Go installed: https://docs.expo.dev/get-started/installation/
For Mac:
- Install Homebrew: https://brew.sh/
- Using Homebrew, install yarn (our package manager): https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
For Windows:
- Install node: https://nodejs.org/en
- Install yarn (our package manager): https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

#### Download Instructions
- In your terminal, run `git clone https://github.gatech.edu/JAADES/p4m.git`

#### Run Instructions
- In the terminal, run `yarn install`. This only needs to be done when you first clone the repository.
- To run the application on your simulator, use `yarn run` in the terminal, and when the build is complete, choose the command for your operating system. The simulator should start. 
- To run the application on your mobile device, make sure you have the Expo Go app installed on your device. Use `yarn run` in the terminal, and a QR code should be generated. Scan the QR code on your mobile device, and the link should redirect you to the Expo Go application. 

## Release Notes

### Release v1.0.0

#### Features
- Users can jump directly to the resources of the screening tool from the screening type selection screen instead of having to fill out the entire questionnaire.
- Profile page now displays user email and name

#### Bug Fixes
- Cleaned up user interface and source code.
#### Known Issues
- No actual verification for if the user registering is a licensed prescriber in the state of Georgia. 
- Red Cap integration was requested from the client, but was unable to be implemented from our group.
- Contact page does not send email within the application, but instead redirects user to mail application with the sender prefilled.
- The user information should be sent with the email (i.e. the name and email) instead of the user having to fill in the name and email fields.
- Interface is inconsistent on larger screens (i.e. iPads).


### Release v0.4.0

#### Features

- Algorithms for calculating screening results
- Users can now see their results after answering the screening questions
- Users can see their progress through a progress bar while answering screening question
- Functionality for the Contact Us page

#### Bug Fixes

- Users are now able to see their answer selection on screening tool
- Submitting Contact Page will open mail app with all fields automatically filled in, and all fields now clear when form is submitted

#### Known Issues

- Screening results does not display results for the Birth Trauma Disorder screening 
- More detailed screening results need to be added

### Release v0.3.0

#### Features

- Users can now use the frontend functionality for the Contact Us screen
- Users can create a new screening
- Users can select between the five disorders to screen for
- There is a UI component for screening each disorder

#### Bug Fixes

- Fixed bugs regarding scrolling while the keyboard is open
- Fixed the keyboard dismissal on login screen, recover password screen, and register screen
- Screen fits on all screen sizes

#### Known Issues

- No backend functionality for Contact Us
- Users can't see their choice in the screening tool after selection
- No backend functionality for screening tool
- What date was your baby born question from the birth trauma screening isn't shown on the screen

### Release v0.2.0

#### Features

- Users can navigate between pages after logging in
- There is a navigation bar at the bottom of the screen when logged in
- A screening page UI has been added
- A contact page UI has been added
- An emergency page UI has been added
- Users can now log out

#### Bug Fixes

- Navigation after user is logged in
- Functionality for recover account

#### Known Issues

- No functionality for contact us
- The application looks different on different screen sizes
- No keyboard dismissal on login screen, recover password screen, or register screen

### Release v0.1.0

#### Features

- A page to create an account with Peace for Moms
- A page to Log into an existing account with Peace for Moms
- A page to recover an account if a user forgets their password

#### Bug Fixes

- Scrolling on pages glitches when it reaches the top

#### Known Issues

- No navigation after user is correctly logged in
- No functionality for recover account

