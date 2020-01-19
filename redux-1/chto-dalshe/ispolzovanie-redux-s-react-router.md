# Использование Redux с React Router

В Redux-приложении есть `<Provider />` — компонент высшего порядка, поставляемый с React Redux.

Обернем `<Router />` в `<Provider />`  , таким образом обработчики маршрутизации смогут получить доступ к стору:

```jsx
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  document.getElementById('root')
);
```

Таким образом все дочерние элементы имеют доступ к стору.

