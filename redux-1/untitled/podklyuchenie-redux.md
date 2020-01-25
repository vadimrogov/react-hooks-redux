# Подключение Redux

Добавление Redux зависимостей в проект:

```jsx
npm install --save redux react-redux

// установка devtools
npm install --save-dev redux-devtools
```

1. Создаем `store` с помощью функции `createStore` :

{% code title="store.js" %}
```jsx
import { createStore } from 'redux';
import rootReducer from './root-reducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
```
{% endcode %}

2. Для работы `store` необходимо создать `reducer` и `initialState`

{% code title="root-reducer.js" %}
```jsx
const initialState = {
  isShowed: true
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_OR_HIDE_LOGO":
      return {
        ...state,
        isShowed: !state.isShowed
      };

    default:
      return state;
  }
}

export default rootReducer;

```
{% endcode %}

3. Создание списка `actions`

{% code title="action-types.js" %}
```jsx
const actions = {
    SHOW_OR_HIDE_LOGO: "SHOW_OR_HIDE_LOGO",
};

export default actions;
```
{% endcode %}

4. Создание генераторов действий

{% code title="actions.js" %}
```jsx
import actions from "./action-types";

export function showOrHide(value) {
  return {
    type: actions.SHOW_OR_HIDE_LOGO,
    payload: value
  };
}

```
{% endcode %}

5. Подключение `store` к проекту

{% code title="index.js" %}
```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

```
{% endcode %}

6. Передача генераторов действий и `state` в компоненты

{% code title="App.js" %}
```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        {props.isShowed && <img src={logo} className="App-logo" alt="logo" />}
        <button
          className="common-btn"
          onClick={() => props.showOrHide(!props.isShowed)}
        >
          {props.isShowed ? "HIDE" : "SHOW"}
        </button>
      </header>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);

```
{% endcode %}

7. `Redux` подключен и функционирует \([GitHub](https://github.com/rogov-v/redux-app)\).

