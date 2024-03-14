# Getting Started

## What Raph Did
1. Make an empty folder.
2. npx create-expo-app [folderName]
3. cd [folderName]
4. Copy all GitHub files into that folder as well
5. npx expo start. npm start alternatively
Here, there may be errors thrown. This is fine.
- If you get something related to metro, I did npm install metro
- If you get something related to react-native-ble-manager, let me know and I can send you the node module. For some reason, doing npm i --save react-native-ble-manager (the conventional way) can sometimes break the application, throwing errors related to jdk, appdebugwithjavac, etc. Paste this into the node modules folder
- Make sure you have Android Studio or an Android connected via USB to your computer. It should detect this device.


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
