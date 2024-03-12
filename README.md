## Instructions
When you download after you need to run these 3 commands:

```
yarn install
```
```
yarn start --reset-cache
```
```
cd ios/ && pod install
yarn ios
```
or
```
yarn android
```

## Project structure


```bash
src/
├── app/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── ...
│   ├── components/
│   ├── localization/
│   ├── navigators/
│   │   ├── RootNavigator
│   │   ├── MainNavigator
│   │   └── ...
│   ├── screens/
│   │   ├── Screen1/
│   │   ├── Screen2/
│   │   └── ...
│   ├── services/
│   ├── utils/
│   ├── store/
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── selectors/
│   │   ├── types/
│   │   └── ...
│   ├── themes/
│   ├── App.tsx
│   └── ...
└── ...
```
