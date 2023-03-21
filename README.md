# React Native Proyects
I made this repository focused on providing a good starting point to understand all 
the general concepts of this framework.

## Version
The react-native version I use was the 0.71.1 with typescript.

## Content
In every branch you will find a different proyect to practice or just learn.

## Initialization
When download every branch remember to install node modules (npm install) inside
proyect structure.

When changing of branch first delete the node modules folder of your last opened proyect
and then install node modules again.

After that initialize the proyect using:

npx react-native start

npx react-native run-android or npx react-native run-ios deppending of your hardware

## Branches

### feature/counter-app
This branch contains a simple app with two buttons and a counter to increase or decrease it
using the concepts of the hook state of react native.
Also is included the process of creation a component that includes the two buttons, the
implementation of styles using stylesheets and the creation of simple functions.

### feature/flex-position-box_object_model
This branch contains a set of differents screens to practice the use of flexbox, padding,
margin, dimension, position and so much more.
Also is included a set of ten sample images to practice all the concepts and the screens
with every solution.

### feature/ios-calculator
This branch contains a proyect of a calculator with the same design of an ios calculator.
This proyect include all the design (buttons, colors, texts) having in mind all the 
functions that every button has.
The design includes a hook named useCalculator in order to separate all the logic functions
from the design and the component styles of the calculator.

### feature/navigation-app
This branch contains all the navigation types react-native has with some screens to navigate
that you can use to understand how each type of navigation works.
Also are included tabs, material tabs and material top scrollable tabs to understand how
they work too. 
There are configured some icons in the app in order to see how a screen can be customized
with them and also some buttons.

### feature/context-global_app_state
This branch contains all the code needed to undestand how a context works in
react native and how to consume it. Also is included the concept of reducer, how it works
and how to dispatch actions.

### feature/movie-app
This branch includes a beatiful movie app that lets you know what are the latest trending
movies on cinema, also top rated ones, and much more. The info is obtained from the movie
database https://www.themoviedb.org/, and the http requests are implemented using axios.
When you click on each poster movie you get information about the actors, the budget, the rate 
of the movie and also the genres.
Regarding to the components used, the app includes a carousel, an horizontal slider, a scroll
view and a gradient color component that changes depending of the colors of the poster movie
selected.
It's a nice proyect where you can learn a lot because it includes component reutilization, 
custom hooks, interfaces, navigaton, a context used for the gradient, etc.

### feature/react-native-components
This branch contains all the code needed to learn or practice about react native components.
When oppening the app, a menu will show you all the components used. You can click each one 
to see the examples.