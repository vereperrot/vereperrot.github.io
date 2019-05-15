---
layout: post
title:  "Learning React Native"
date:   2019-05-10 00:01:57 +0800
categories: react
---
# What's the difference between React Native and Ract.js?
## React.js
* React.js also called React or ReactJS is a JavaScript **library** responsible for building a UI. 
* Using **web** components.

## React Native
* React Native is a **framework** for building cross-platform native mobile applications using JavaScript. 
* Using **native** components.

# Prepare
* Understanding the basic structure of a **React** concept, like JSX, components, state and props.

## What is Babel?
Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript.
React uses Babel to convert JSX into JavaScript.

## What is JSX?
JSX is an XML/HTML like extension to JavaScript.
Note that JSX does not use quotes around the HTML text string.
Example ```const element = <h1>Hello World!</h1>```.
Just like HTML, JSX tags can have a tag names, attributes, and children. If an attribute is wrapped in curly braces, the value is a JavaScript expression.

## React components
React components are JavaScript functions.

# Learn React Native
## Environment
* Windows 10
* Node.js 10.15.3 LTS

## Hello World
1. Download and install [Node.js](https://nodejs.org/en/).
2. Run cmd as administator.
3. Set your ip address via ```set REACT_NATIVE_PACKAGER_HOSTNAME=x.x.x.x```.Replace x.x.x.x with your real ip address. You can find it with ```ipconfig``` command.
3. Install expo-cli package with ```npm install -g expo-cli```.
4. Generate **AwesomeProject** project.
```bat
expo init AwesomeProject
cd AwesomeProject
npm start
```
5. It will open a localhost page in your web browser. Click **Run on Android device/emulator** on the left side bar. If your computer connect with a android device, it will launch the page in the expo app. 
5. Open the AwesomeProject\App.js to modify. We add a new **<Text>** tag, and change the color from white to green. It will live reload in your device.

```
//App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Say something!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Props
```
//App.js
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

class Greeting extends React.Component {
  render() {
	  let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
```
![React Native props example](/assets/react-native-props-example.jpg)

## State
```
//App.js
import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
```

## FAQ
1. What is npm install g option ? -g tells npm to install the named module so that it's accessible globally.If you have multiple programs that require the same package, each program should install the package locally.
2. Error ***npm ERR! 500 Internal Server Error: babel-eslint@latest*** when I run command **npm install ...**? Remove the whole line ``` https://registry.npmjs.org```in the file **C:\Windows\System32\drivers\etc\hosts**. 
3. How to uninstall all dependencies listed in package json npm? ```npm uninstall *```
4. Error ***Cannot find module 'xxx'***? ```npm install xxx```

# Reference
* [React Native · A framework for building native apps using React](https://facebook.github.io/react-native/)
* [What is React?](https://www.w3schools.com/whatis/whatis_react.asp)
* [Online React Native IDE](https://snack.expo.io/)

# Project Ideas
* [6 Fun React Projects You Can Build Today](https://daveceddia.com/react-practice-projects/)
* [10 React Native Open Source Projects You Must Know](https://apiko.com/blog/10-react-native-open-source-projects-you-must-know/)
* [55 ReactNative Examples](https://react.rocks/tag/ReactNative?show=40)
