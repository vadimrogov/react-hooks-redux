# Создание собственных хуков

Иногда нужно повторно использовать одинаковую логику состояния в нескольких компонентах. Решить эту задачу можно с помощью пользовательских хуков без добавления ненужных компонентов.

Например у нас есть логика для отображения статуса текущего пользователя \(из примера выше\), эту логику можно вынести в отдельный хук и использовать для отображения статуса друзей в сети:

```jsx
function useUserStatus(id) {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

  //делаем что-то для обновления статуса, например:
    API.login(props.id, handleStatusChange);
  });
  
  return isOnline;
}
```

Мы создали хук для управления статусом.

Как правило если имя функции начинается с ”`use`” и она вызывает другие хуки, это пользовательский хук.

Таким образом, теперь мы можем использовать этот хук:

```jsx
function showMyStatus(props) {
  const isOnline = useUserStatus(props.id);
  
  return (
      <div> Status: {isOnline ? 'Online' : 'Offline'} </div>
  );
}
```

