CricketerConnect – A React Native Cricketer Profile App CricketerConnect is a React Native mobile application designed to display profile cards of famous cricketers. Each card showcases the cricketer’s name, role, and profile picture, along with clickable social media icons that redirect users to popular platforms like LinkedIn, GitHub, Facebook, and YouTube.

The app is built using React Native with Expo, ensuring smooth cross-platform compatibility. The ProfileCard component is the core UI element, designed with Flexbox for layout and StyleSheet API for styling. Each card has a shadow effect for a modern look. We used React Native Linking API to handle external redirections, enabling seamless navigation to different social media platforms when users tap on the icons. To ensure the UI does not overlap with the status bar, we implemented SafeAreaView, which optimizes the layout for different devices.

For development, we initialized the project using:

npx create-expo-app cricketer-connect
cd cricketer-connect
npm install

Additionally, we installed @expo/vector-icons for social media icons:

npm install @expo/vector-icons

The app was tested using Expo Go, and it runs efficiently on both Android and iOS devices. CricketerConnect demonstrates essential React Native concepts, including components, state management, styling, external linking, and UI optimization. The project can be extended by integrating a real-time cricketer API, animations, and a search feature. It serves as a strong foundation for mobile app development using React Native.

FinalLook
![FinalLook](https://github.com/user-attachments/assets/57832994-e36d-4552-8b04-5b5e8128547e)
