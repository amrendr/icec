# Website

This project is to redesign and enhance the current ICEC site. Following below step describes, how to set up a development server and make any changes.

## Development server

Follow steps will help you setup a development server. If you have already setup your development server earlier, `skip to step 3`.

### 1. Required Softwares

* Install [Node.js](https://nodejs.org/en/download/)
* Install [Visual Studio Code](https://code.visualstudio.com/Download)
* Install [Git](https://git-scm.com/downloads)
* Install [TortoiseGit](https://tortoisegit.org/download/)

### 2. Clone Code Repository

* Create an empty folder
* Right click on the folder and click on Git Clone...
* use https://github.com/amrendr/icec.git in URL field and click ok.
* open cmd prompt and navigate to the cloned code folder.
* type `npm install -g @angular/cli@latest` and press enter. This will take few mintues to complete.

Learn more about `Git` Repository. https://guides.github.com/

### 3. Start Development

* Open Visual Studio Code 
* File -> Open Folder...   Choose `icec` folder
* View -> Integrated Terminal
* In terminal window, type `git pull --rebase` to get latest code.
* In terminal window, type `npm install` and press enter. This will take few mintues to complete.
* In terminal window, type `ng serve` and press enter to start dev server. 
* Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Build

In terminal window, run `ng build -prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploying 

Delete following following files from your server, and then upload the files from `dist/` to your server
* polyfills.`xxxxxx`.bundle.js
* vendor.`xxxxxxxxx`.bundle.js
* main.`xxxxxxxxxxx`.bundle.js
* inline.`xxxxxxxxx`.bundle.js
* styles.`xxxxxxxxx`.bundle.css
* index.html

`xxxxxxxxxx` is random alphanumeric.
