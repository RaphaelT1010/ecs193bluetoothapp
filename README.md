# Getting Started

## What Raph Did
1. Make an empty folder.
2. npx create-expo-app [folderName]
3. cd [folderName]
4. Copy all GitHub files into that folder as well
5. npx expo start. npm start alternatively. Here, there may be errors thrown. This is fine. Refer to below

## Important Tips
- If you get something related to metro, I did npm install metro
- If you get something related to react-native-ble-manager, let me know and I can send you the node module. For some reason, doing npm i --save react-native-ble-manager (the conventional way) can sometimes break the application, throwing errors related to jdk, :app:compileDebugJavaWithJavac, etc. and make you lose many steps. Paste this into the node modules folder
- Make sure you have Android Studio or an Android connected via USB to your computer. It should detect either. In my experience, it prioritzes the device
- It's annoying that GitHub doesn't let you upload .expo (created calling npm install metro), or the node modules. As a result, you will be doing console commands in order to add onto the project/these locations which are hard to revert. Be careful with this as sometimes doing things like --force fix audit or ./gradlew clean will revert many steps, so try to do commitments like this conservatively.
- You can safely delete App.tsx and just have the App.js
- I don't have experience using yarn like below. Could be something to look into, but npm (at the minimum) can allow us to run the app when the Metro server is running and can run on Android Studio.


### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
