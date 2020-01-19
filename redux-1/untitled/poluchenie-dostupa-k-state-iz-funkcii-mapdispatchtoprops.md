# Получение доступа к state из функции mapDispatchToProps\(\)

Имеется типовой компонент-контейнер \(про идеологию компонентов react-redux можно почитать здесь\), который генерирую с помощью функции **connect\(\)**. Код представлен ниже \(публикую кусок кода, относящийся к данной теме\):

```jsx
...

const mapDispatchToProps = dispatch => {
  return {
    actionsCart: bindActionCreators(actionsCart, dispatch),
    actionsFilter: bindActionCreators(actionsFilter, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    ...state.cartReducer,
    ...state.filterReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

```

Тут все просто, определяем функции **mapStateToProps\(\)** для чтения состояния и **mapDispatchToProps\(\)** для передачи события. Далее генерируем компонент путем передачи созданных функций в **connect\(\)**.



