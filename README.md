This project was bootstrapped with [react-native](https://facebook.github.io/react-native/docs/getting-started.html).

## Этапы создания новой версии приложения:
(Этапы 2 - 5, 8 - выполняются в терминале)
1. https://nodejs.org/en/ - Установить Node.js+NPM
2. "npm install -g create-react-native-app" - запустить команду для установки react-native
3. "git clone git@gitlab.reptileskin.ru:bestar-php/reactjs-avia-app.git" - Скачать файлы из репозитория
4. "cd ~/reactjs-avia-app" - переместиться в дерикторию с приложением
5. 'npm install' - запустить установку необходимых модулей
6. Разместить в директории /reactjs-avia-app/android/app/ ключ для релиза my-release-key.keystore
7. Обновить версию приложения в файле /reactjs-avia-app/android/app/build.gradle
```javascript
android {
    ...

    defaultConfig {
        ...
        versionCode 2      //Увеличить на 1
        versionName "1.1"  //Увеличить на 0.1
        ...
    }
```
8. "cd android && ./gradlew assembleRelease" - выполнить команду в корневой папке приложения для создания нового релизного билда.
9. Новая сборка будет находиться в папке android/app/build/outputs/apk/app-release.apk
