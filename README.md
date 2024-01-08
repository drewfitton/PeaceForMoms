# PEACE for Moms Mobile Application

A mobile application that helps healthcare professionals treat perinatal patients with ease. PEACE for Moms is a service that connects Georgia healthcare professionals with pyschiatrics who specialize in perinatal mental health. This a project in collaboration with Emory University School of Medicine, and our client for this project is Dr. Rebecca Woo. Learn more about this service on their website: https://www.peace4momsga.org/

## Release Notes

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

## Project Set Up:

For Mac:

Official documentation: https://reactnative.dev/docs/environment-setup

- Note: not everything on the documentation is necessary. Other team members primarily use yarn and npm for this project

Install Homebrew: https://brew.sh/

Install Expo Go: https://docs.expo.dev/get-started/installation/

Install XCode: https://apps.apple.com/us/app/xcode/id497799835?mt=12 (links to app store)

Install yarn: https://classic.yarnpkg.com/en/docs/install#mac-stable

App should run with yarn install, then yarn start
