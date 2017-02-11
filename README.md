# Website

This project is to redesign and enhance the current ICEC site. Following below step describes, how to set up a development server and make any changes.

## Development server

Following steps will help you to setup a development server. If you have already setup your development server earlier, `skip to step 3`.

### 1. Required Softwares (one time)

* Install [Node.js](https://nodejs.org/en/download/), use all default options while installing.
* Install [Visual Studio Code](https://code.visualstudio.com/Download), use all default options while installing.
* Install [Git](https://git-scm.com/downloads), use all default options while installing.
* Install [TortoiseGit](https://tortoisegit.org/download/), use all default options while installing.

### 2. Clone Code Repository (one time)

* Create an empty folder
* Right click on the folder and click on Git Clone...
* Use https://github.com/amrendr/icec.git in URL field and click ok.
* Open cmd prompt and navigate to the cloned `icec` folder.
* Type `npm install -g @angular/cli@latest` and press enter. This may take few mintues to complete.

Learn more about `Git` Repository. https://guides.github.com/

### 3. Start Development

* Open Visual Studio Code 
* File -> Open Folder...   Choose `icec` folder
* View -> Integrated Terminal
* In terminal window, type `git pull --rebase` to get latest code.
* In terminal window, type `npm install` and press enter. This may take few mintues to complete.
* In terminal window, type `ng serve` and press enter to start dev server. 
* Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Build

In terminal window, run `ng build -prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploying 

Delete following following files from your server, and then upload the files from `dist/` to your server
* polyfills.`xxxxxx`.bundle.js
* vendor.`xxxxxxx`.bundle.js
* main.`xxxxxxxxx`.bundle.js
* inline.`xxxxxxxxx`.bundle.js
* styles.`xxxxxxxx`.bundle.css
* index.html

`xxxxxxxxxx` is random alphanumeric characters.