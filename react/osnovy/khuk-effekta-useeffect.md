---
description: >-
  будет гарно если человек увидит все варианты жизненных  циклов с помощью этого
  хука - це Дима
---

# Хук эффекта \(useEffect\)

`useEffect` - выполняет ту же роль, что и `componentDidMount`, `componentDidUpdate` и `componentWillUnmount` в React-классах, но объединяет их в единый API.

### useEffect как componentDidUpdate

```jsx
function showMyStatus(props) {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    //делаем что-то для обновления статуса, например:
    API.login(props.id, handleStatusChange);
  });
  
  return (
      <div> Status: {isOnline ? 'Online' : 'Offline'} </div>
  );
}
```

**Что же делает `useEffect`?** Используя этот хук, мы говорим React сделать что-то после рендера. React запомнит функцию \(эффект\) и вызовет её после того, как внесёт все изменения в DOM.

Если необходимо чтобы React _пропускал_ вызов эффекта, если определённые значения остались без изменений между последующими рендерами, передайте массив в `useEffect` вторым необязательным аргументом так:

```jsx
useEffect(() => {
  document.title = `Вы нажали ${count} раз`;
}, [count]); // Перезапускать эффект только если count поменялся
```

Рассмотрим варианты использования хука эффекта более подробно.

### useEffect как componentDidMount

`componentDidMount()` вызывается один раз, сразу после монтирования компонента. Инициализация, требующая доступа к узлам DOM, должна находиться здесь. Если вам нужно загружать данные с удаленного источника, это хорошее место для инициирования сетевого запроса.

Чтобы реализовать метод `componentDidMount()` с помощью `useEffect`, достаточно передать в пустой массив вторым аргументом в `useEffect`. 

```jsx
function counter(props) {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(0);
  }, []);
  
  return (
      <div> Count: {state} </div>
  );
}
```

Таким образом useEffect вызывается один раз, сразу после монтирования компонента.

### useEffect как componentWillUnmount

`сomponentWillUnmount()` вызывается непосредственно перед демонтированием и уничтожением компонента. 

Чтобы повторить `сomponentWillUnmount()` , необходимо возвращать в `useEffect` функцию отчистки:

```jsx
  ...
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);
  
  ...
```

