# Django and React Intialized Project
This repository contains a Django and React project, utilizing the Django Rest Framework for API development and React as the frontend framework. This project also uses Redux for state management, Bootstrap for styling, and has Redux DevTools enabled for debugging.

## Getting Started
### Prerequisites
Before you begin, make sure you have the following software installed on your computer:

Python 3.6 or newer
Node.js 12 or newer
### Installation
To get started, clone the repository and navigate to the root directory:


```bash
git clone https://github.com/<your-username>/React-Django-Skeleton
cd React-Django-Skeleton
```
Next, install the Python dependencies:


```bash
cd backend
pip install -r requirements.txt
```
This will install all the necessary Python packages, including Django and the Django Rest Framework.


Next, install the Node.js dependencies:


```bash
cd ..
cd web
npm install
```
This will install all the necessary Node.js packages, including Redux, Bootstrap, and the Redux DevTools.

## Migrations
Next, you'll need to run the Django migrations to create the necessary database tables:


```bash
python manage.py makemigrations
python manage.py migrate
```
## Running the Server
To start the Django development server, run the following command:


```bash
python manage.py runserver
```
This will start the server at http://localhost:8000/.

To start the React development server, run the following command in a separate terminal window:


```bash
npm run start
```

You can now access the application at http://localhost:3000/. Any changes you make to the code will automatically be reflected in the browser.

Debugging with Redux DevTools
To debug the Redux store, you can use the Redux DevTools extension for your browser. This extension allows you to see the state of the store at any point in time, and to revert back to previous states if necessary. Make sure to download the redux extension from the chrome extension store for free.
