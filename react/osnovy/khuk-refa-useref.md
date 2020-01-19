# Хук рефа \(useRef\)

`useRef` - возвращает изменяемый ref-объект, свойство `.current` которого инициализируется переданным аргументом \(`initialValue`\). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.

```jsx
const refContainer = useRef(initialValue);
```

Давайте посмотрим пример использования useRef\(\) hook:

```jsx
function TextInputWithFocusButton() {
  const [name, setName] = useState('');
  const nameRef = useRef(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    setName(nameRef.current.value);
  };
  return (
    <div>
      <p>{name}</p>
      
      <input ref={nameRef} type="text" />
      <button onClick={onButtonClick}>Задать имя</button>
    </div>
  );
}
```

В приведенном выше примере мы используем `useRef` в сочетании с `useState`, чтобы отрендерить значение `input` в тег `p`.

Ref создается в переменной `nameRef`. Затем переменную `nameRef` можно использовать в `input`, задав как `ref`. По существу, это означает, что теперь поле ввода будет доступно через `ref`.

`setName` будет использоваться для установки state `name`. Чтобы извлечь имя из тега `input`, мы читаем значение `nameRef.current.value`.

