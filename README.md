
# Django Rest API Angular Boilerplate

Boilerplate for app with Django Rest API in backend and Angular in frontend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.
### Installing

Create virtual environment named env
```
python -m venv env
```

Activate created environment
```
# On Windows in command line
env/Scripts/activate

# In VSCode (Windows)
cd env/Scripts
source activate
```

Clone project
```
cd env
git clone https://github.com/orlyohreally/django-rest-api-angular-boilerplate.git
cd django-rest-api-angular-boilerplate
```

Install dependencies for backend
```
pip install -r restApiApp/requirements.txt
```

Install dependencies for frontend and build the project for backend at the same time
```
cd theme-customization
npm install
```
As a result all npm packages will be installed for angular project and in backend a static folder (restApiApp/static) will be create with built angular project files

Set up db for backend
```
cd ../restApiApp
python manage.py makemigrations
python manage.py migrate
```

Create admin to login into admin page
```
python manage.py createsuperuser
```

## Running the app

```
cd /restApiApp
python manage.py runserver
```
The project will be available at http://127.0.0.1:8000/.

## Deployment
Project has files prepared to deploy on [Heroku](https://www.heroku.com/platform).


## Prepare already existing Angular project for this boilerplate
Replace default Angular project with your own

Update postinstall command in package.json file for the boilerplate
```
"postinstall": "npm install --prefix [folder name of your frontend project]"
```
Update build path depending on Angular version
* .angular-cli.json ```"outDir": "../restApiApp/static/blog/"```
* angular.json - ```"outputPath": "../restApiApp/static/blog/"```

Update deployUrl to make lazy loaded chunks be loaded from static files
```
"deployUrl": "/static/blog/",
```

Add postinstall script to package.json file
```
"postinstall": "ng build --prod --output-hashing none"
```

Run command to update static files for backend
```
npm run postinstall
```

Update restApiApp/templates/index file so it would load needed scripts for your Angular version. Look at restApiApp/static/blog/index.html for the list of needed scripts.

Assets such as images won't work when angular project has been replaced. In Angular projects all images usually have either external source or they reference assets folder. Django project will store all the static files for frontend in static/blog folder. To solve this issue create environment variable which would store location of static files. This was done in default frontend project of this boildreplate.



## Built With

* [Django REST framework](https://www.django-rest-framework.org/) - framework used for backend
* [Angular](https://angular.io/) - framework used for frontend

## Authors

* **Orly Knop** - [orlyohreally](https://github.com/orlyohreally)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details