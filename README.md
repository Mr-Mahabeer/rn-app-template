# Introdution

This project is a template application for any react native application project for either personal or industrial use. This template is build to skip the headache of setting up the navigation and project structure for any project. This template is an effort to save some time of our precious developers for some other work.

# Getting started
Run the following commands to getting started with the project.

* ``` git clone https://github.com/Mr-Mahabeer/rn-app-template.git ```
* ``` cd rn-app-template ```
* ``` yarn or pnpm/npm i ```
* ``` yarn/npm/pnpm start ```
- Connect the physical android device to the machine. 
* ``` yarn android ```

# Making Changes

### To change app name and package name 
To change the application name and package name for the project you can consider using an awasome package for that [react-native-rename](https://www.npmjs.com/package/react-native-rename) .

### Adding new screens
- Add a new React Component to /src/screens/ folder and export it from /src/screens/index.ts
- Now you can import the screen in /src/navigation/ and can use it.

### Updating Splash screen UI
- Update the UI desing in /android/app/src/main/res/layout/launch_screen.xml

**Note- You have to rebuild the application to make changes available each time you update the mentioned file.


# Happy Coding ❤️