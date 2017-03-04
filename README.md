>NOTE: the HackSC 2017 website is currently under development!

# HackSC 2017 Website

This is the main repository for the HackSC website. It is built on React with scalability in mind. All logic for the app lies in the `app` folder. The `internals` folder contains various configuration files, generators, and templates. The `server` folder holds production and development files. 

# Commands

`npm start` - starts the development server and make the website available at `http://localhost:3000`

`npm run start:production` - runs tests, builds the app, and starts the production server

`npm run build` - builds the app, minimizes files, and does other work to prep the app for production. Bundles it into the `build` folder, which can then be uploaded to the HackSC web server for production. 
