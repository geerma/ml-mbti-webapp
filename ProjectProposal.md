# Project proposal for *ML Web App*
Author: *Geer Ma*

## 1. Why: Question/Topic being investigated

Currently I am most interested in creating applications with user interfaces that can be deployed and shown to users, employers, etc. 
I have some experience in using React (with HTML/CSS/JS), and would like to see if I would be able to use my previous knowledge, combine
it with what I have learned in this Machine Learning course, to create a full-stack web application. It has been something that I have always
been interested in, but have not yet attempted. I am an avid hackathon enthusiast and would like to utilize what I have learnt from hackathons to
this project, and also want to use the knowledge I learn from this project (ex. creation of full-stack ML web app) to future hackathons.

## 2. How: Plan of attack

After searching on Google, I came across these two resources. I hope to follow these tutorials, try to make sense of them, and then create my own version of the applicationu using my newly-found knowledge.

-----

**1:**

The first resource I looked at was from [deploymachinelearning](https://www.deploymachinelearning.com/). 

This tutorial goes over how to build a ML system and make it available for usage using REST API. This tutorials aims to
build an application that has the following features: handle many API endpoints (with each having an ML algorithm), fast deployments and 
continuous integration, support monitoring and algorithm diagnostic (A/B tests), is scalable (with containers), and has a user interface.

The dataset used in the tutorial is the Adult Income dataset. After following the tutorial, I hope to use a different dataset to create
my interpretation of the application. 

*Technology:*
- In a Jupyter Notebook, train ML models using numpy, pandas, joblib (for ML objects saving), and sklearn (ML algorithms)
    - From Sklearn, use RandomForest and LabelEncoder
- Utilize Django to set up the back-end server, and create Django models
    - Create REST API for models using Django REST Framework (DRF)
- Serve the ML algorithms that were first implemented in the Jupyter Notebook to the server-side
- (Optional): A/B Testing and Docker Container depending on time constraints (the above functions are the priority)

-----

**2:**

The second resource I looked at was from [towardsdatascience](https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33).

This tutorial goes over how to build a complete Machine Learning web application using React and Flask. It aims to create a front-end that would be developed in React and the back-end would be "developed in Flask which exposes prediction endpoints to predict using a trained classifier
model and send the results back to the front-end for easy consumption."

The dataset used in the tutorial is the Iris dataset. After following the tutorial, I hope to use a different dataset to create
my interpretation of the application. 

*Technology:*
- React will be used for the user interface
- Flask and Flask-RESTplus to create the server endpoints
    - Ex: The Flask app will have the POST endpoint /prediction, where it accepts input values as a json and returns back a prediction from ML.
- DecisionTreeClassifier is used on the dataset

## 3. What: Dataset, models, framework, components

Both of these tutorials follow the same concept of having a basic user interface, then having a REST API with an endpoint that can take information in as an input, feed it to the trained ML model on the server side, and then output it back to the user. The main difference is in the technologies they use, and also their complexities. Below is a rough plan of which technologies I hope to use. Some technologies (and the dataset) are pennding or may change, and will be finalized after finishing the tutorials since I will have a better idea of what I can handle and also which is easier/better.

*The application that I am planning on building will be using the following technologies:*
- React for the front-end user interface. Since the focus of this course is on ML, it will be a simple page.
- Flask OR Django frameworks for the webserver. I would prefer to use Flask since it is a more popular framework, but the documentation in Tutorial 1 for Django is more sophisticated and might be better to incorporate into the application. I will decide on this after finishing both tutorials.
- Sklearn library, Joblib - DecisionTreeClassifier/RandomForest, possibly XGBoost, trained on the chosen training dataset (below)

*Dataset:*

I have searched on Kaggle datasets and found some interesting ones. One I found particularly interesting is regarding [MBTI](https://www.kaggle.com/datasets/datasnaek/mbti-type?resource=download), which is a dataset that contains 8600 people, their MBTI type, and a text section containing the last 50 things they posted (with each post seperated by "|||"). It would be interesting to create a web application that allows the user to copy-paste/input some text, and they the ML algorithm can predict the MBTI classification of the person who wrote the text. 

Looking at the dataset, I am expecting to need to split the posts (by "|||"), pre-process and clean the text data. In typical MBTI tests that I have done, there is usually a 'range' of values that the personality can fall under (ex. 45 I. vs 55 E.). Therefore, this dataset might be better suited for Regression rather than Classification. This could prove to be an issue since the above tutorials were Classification. However, I should be able to figure it out. 

Worst case scenario, if I cannot figure out how to implement Regression into my web app or the dataset I have chosen is too difficult to use, I will be using a simple Classification Dataset such as the [Heart Disease Data Set](https://archive.ics.uci.edu/ml/datasets/Heart+Disease) as a back-up. It is a dataset that is most similar to the Census and Iris datasets found in the tutorial, so it should be easy to implement. The goal would be for the user to input patient attributes such as age, chestpain, cholestreal, etc. then the web app will predict the diagnosis of heart disease.