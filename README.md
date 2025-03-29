# AsyncStorage Movie Search App

## Objective
Create a Movie Search mobile app using a public API in React Native for Android or iOS.

## Features
- Search for movies by title using the OMDb API.
- Display searched movies in a list view with name and poster.
- View detailed movie information on a separate screen.
- Save favorite movies using AsyncStorage.
- Load more movies at the bottom of the list.

## Prerequisites
- Node.js and npm installed on your machine.
- React Native CLI installed globally.
- Android Studio and/or Xcode installed for Android/iOS development.
- An OMDb API key. Obtain one from [OMDb API](https://www.omdbapi.com/apikey.aspx).

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/asyncstorage.git
   cd asyncstorage
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure API Key:**
   - Open `HomeScreen.js` located in the `/screens` directory.
   - Replace `'your_omdb_api_key'` with your actual OMDb API key.

4. **Run the App:**
   - **For Android:**
     - Start an Android emulator or connect an Android device.
     - Run the following command:
       ```bash
       npx react-native run-android
       ```
   - **For iOS:**
     - Open the `ios` folder in Xcode and set up the development team.
     - Run the following command:
       ```bash
       npx react-native run-ios
       ```

## Project Structure
```
asyncstorage/
├── android/            # Android native code
├── ios/                # iOS native code
├── node_modules/       # Dependencies
├── screens/            # App screens
│   ├── HomeScreen.js   # Main search screen
│   ├── DetailScreen.js # Movie details screen
│   └── FavoritesScreen.js # Saved favorites screen
├── components/         # Reusable components
├── App.js              # Main app component
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Troubleshooting

### Common Issues:
1. **Build Failures:**
   - Ensure you have the latest version of React Native CLI.
   - Try cleaning the build with `cd android && ./gradlew clean` for Android.

2. **API Key Issues:**
   - Verify your OMDb API key is active and correctly entered.
   - Check network connectivity.

3. **AsyncStorage Errors:**
   - Make sure you've installed `@react-native-async-storage/async-storage` package.
   - Import it correctly: `import AsyncStorage from '@react-native-async-storage/async-storage';`

## Additional Information
- Ensure your development environment is set up correctly by following the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide.
- For any issues or contributions, please open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the MIT License.
