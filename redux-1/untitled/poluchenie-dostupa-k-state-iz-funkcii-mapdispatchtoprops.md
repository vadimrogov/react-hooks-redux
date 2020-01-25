# Получение доступа к actions и state с помощью функции connect\(\)

Функция `connect()`, предоставляемая пакетом `react-redux`, может принимать до четырёх аргументов, каждый из которых является необязательным. После вызова функции `connect()` возвращается компонент высшего порядка, который можно использовать для оборачивания любого компонента React.

```jsx
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
```

Аргумент `mapStateToProps` является функцией, которая возвращает либо обычный объект, либо другую функцию. Передача этого аргумента `connect()` приводит к подписке компонента-контейнера на обновления хранилища Redux. Это означает, что функция `mapStateToProps` будет вызываться каждый раз, когда состояние хранилища изменяется.

```jsx
const mapStateToProps = state => {
  return {
    ...state.cartReducer,
    ...state.filterReducer
  };
};
```

Аргумент `mapDispatchToProps` может быть либо объектом, либо функцией, которая возвращает либо обычный объект, либо другую функцию.

```jsx
const mapDispatchToProps = dispatch => {
  return {
    actionsCart: bindActionCreators(actionsCart, dispatch),
    actionsFilter: bindActionCreators(actionsFilter, dispatch)
  };
};
```

Если функции `connect()` передаётся аргумент `mergeProps`, то он представляет собой функцию, которая принимает следующие три параметра:

* `stateProps` — объект свойств, возвращённый из вызова `mapStateToProps()`.
* `dispatchProps` — объект свойств с генераторами действий из `mapDispatchToProps()`.
* `ownProps` — исходные свойства, полученные компонентом.

Эта функция возвращает простой объект со свойствами, который будет передан заключённому в обёртку компоненту. Это полезно для осуществления условного маппинга части состояния хранилища Redux или генераторов действий на основе свойств.

```jsx
...
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
...

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
```

В `mergeProps` прилетают `stateProps`, который содержит текущее состояние и `dispatchProps`, который дает возможность отправить событие. Далее возвращаем объект с текущим `state` и событием, который попадет в `props` нашего компонента.

Если `connect()` не передают эту функцию, то используется её стандартная реализация:

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

Тут все просто, определяем функции **mapStateToProps\(\)** для чтения состояния и **mapDispatchToProps\(\)** для передачи события. Далее генерируем компонент путем передачи созданных функций в **connect\(\)**.

