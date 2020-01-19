# Генераторы действий \(Action Creators\)

**Генераторы действий \(Action Creators\)** — это функции, создающие действия.

В Redux генераторы действий \(action creators\) просто возвращают action:

```jsx
function setMessage(msg) {
  return {
    type: actions.SET_MESSAGE,
    payload: msg
  };
}
```

Обычно инициируются вместе с функцией отправки действия:

```jsx
dispatch(setMessage('Hello'))
```

Или при определении этой функции:

```jsx
const dispatchSetMessage = i => dispatch(setMessage(i))
dispatchSetMessage('Hello')
```



