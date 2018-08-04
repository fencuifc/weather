# Brand-new Weather App

A Simple Weather App 

### Get started!
```
git clone

npm install
```

### Start the dev server:
```

npm run start:dev

```

### Build:
```

npm run build

```

#### Note:
* Changes made to your CSS / JS triggers a full page auto-reload.
* Running a build writes the ```bundle.js``` and ```bundle.css``` to the ```/public/dist/``` directory.

### Pre-configured tools and plugins

* Module bundler: [Webpack](https://webpack.js.org/)
* ES6 Transpiler: [babel-loader](https://github.com/babel/babel-loader)
* Linting: [eslint](https://eslint.org/)
* JS Uglification: [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
* Dev Server: [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (```npm run start:dev```)

#### Codebase overview.

```
/
├─ public/
|  ├─ dist/
|  |  ├─ bundle.css           # CSS that's generated from SASS
|  |  ├─ bundle.js            # Contains scripts of components & vendor(s).
|  ├─ index.html              # Contains root element to mount your app.
└─ src/
   ├─ actions/                # Create actions here.
   |  ├─ 
   ├─ components/             # Create components here
   |  ├─ 
   |  ├─ 
   |─ containers/             # Containers bridge Components with the State.
   |  ├─ 
   |  ├─ 
   ├─ constants/              # Define action types here.
   |  ├─ 
   ├─ reducers/               # Create reducers here.
   |  ├─ 
   |  ├─ index.js             # Combine your reducers here.
   ├─ styles/                 # All styling goes here.
   |  ├─ main.scss
   ├─ App.js                  # Include your main component(s).
   ├─ index.js                # Passes state to App. Renders markup to DOM.
   └─ configureStore.js       # Creates and exports store.
```

### Learn

**Sass** - [Sass Guide](http://sass-lang.com/guide)


#### The MIT License (MIT)
MIT Fen Cui© 2018
