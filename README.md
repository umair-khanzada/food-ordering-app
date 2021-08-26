## Guide for getting started with this project
1. Clone
2. npm i (one time installation)
3. npm start
## For Configuring eslint in vscode
1. install eslint and prettier to format code
2. go to your VSCode settings.json (for this you should click on 'Files->preferences->settings.json' for windows and for mac code -> preferences -> settings.json)
3. Your default formatter should be eslint. If you find prettier configurations in file just comment them out. Add following keys to start of settings.JSON file
```
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```  
