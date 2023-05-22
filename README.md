# React Native Proyects
I made this repository focused on providing a good starting point to understand all 
the general concepts of this framework.

## Version
The react-native version I use was the 0.71.1 with typescript.

## Content
In every folder you will find a different proyect to practice or just learn.

## Initialization
When download dev branch remember to install node modules (npm install) inside
the proyect folder you want to run the app.

After that initialize the proyect using:

npx react-native start

npx react-native run-android or npx react-native run-ios deppending of your hardware

## Proyect Folders

### counterApp
This folder contains a simple app with two buttons and a counter to increase or decrease
using the concepts of the hook state of react native.
Also is included the process of creation a component that includes two buttons, the
implementation of styles using stylesheets and the creation of simple functions.
The proyect has differents screens to practice the use of flexbox, padding,
margin, dimension, position and a set of ten sample images are included to practice 
all the concepts with every solution.

### iosCalculator
This folder contains a calculator app with the same design of an iOS one.
The proyect include all the design (buttons, colors, texts) having in mind all the 
functions that every button has.
The design includes a hook named useCalculator in order to separate all the logic functions
from the design and the component styles of the calculator.

### navigationApp
This proyect contains all the navigation types react-native has with some screens to navigate
that you can use to understand how each type of navigation works.
Also are included tabs, material tabs and material top scrollable tabs to understand how
they work too. 
There are configured some icons in the app in order to see how a screen can be customized
with them and also some buttons. 
The proyect has also all the code needed to undestand how a context works in react native 
and how to consume it, the concept of reducer, how it works and how to dispatch actions.

### movieApp
This folder includes a beatiful movie app that lets you know what are the latest trending
movies on cinema, also top rated ones, and much more. The info is obtained from the movie
database https://www.themoviedb.org/, and the http requests are implemented using axios.
When you click on each poster movie you get information about the actors, the budget, the rate 
of the movie and also the genres.
Regarding to the components used, the app includes a carousel, an horizontal slider, a scroll
view and a gradient color component that changes depending of the colors of the poster movie
selected.
It's a nice proyect where you can learn a lot because it includes component reutilization, 
custom hooks, interfaces, navigaton, a context used for the gradient, etc.

### RNComponents
This proyect contains all the code needed to learn or practice about react native components.
When oppening the app, a menu will show you all the components used. You can click each one 
to see the examples.

### productsApp
This folder contains all the code needed to run an app designed to store differents products 
asociated with a category, a user and an image. 
It's a good proyect to learn how to manage authentication using JWT Token Authentication
to sign-up, sign-in or sing-out using differents users.
Is also included all the code needed to upload an image to identify the products in the app,
using a local folder or the camera of your telephone.