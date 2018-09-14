# React Help Queue

## Author(s)

  * Steven Colburn

## Install

```
  git clone https://github.com/Xamdes/react-help-queue.git
  cd react-help-queue
  npm install
```

## Instructions

* npm run fresh
  * installs packages from package.json and run webpack
  * npm run gen [component-name] [optional-component]
    * generates a component bast on given component name
    * puts component in ./src/components/ directory
    * will prepend imput in a component file
    * npm run gen App Header
      * puts import Header from './Header'; into App component
* npm run commit '[message]'
  * runs git commit -m using npm
* npm run git-cinfig '[name]' '[email]'
  * configures local git username and email
* npm run start
  * starts webpack-dev-server
  * http://localhost:8080
* npm run start-web
  * starts webpack-dev-server and opens http://localhost:8080 in browser (Chrome)
* npm run web
  * opens http://localhost:8080
* npm run lint
  * runs eslint on files in ./src/
* npm run lint-fix
  * runs eslint and tells it to attempt to fix errors in files located in ./src/

## Specifications
