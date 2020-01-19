# Хук колбека \(useCallback\)

`useCallback` -  Возвращает мемоизированный колбэк.

> **Мемоизация** \(запоминание, от англ. memoization\) — в программировании сохранение результатов выполнения функций для предотвращения повторных вычислений. Это один из способов оптимизации, применяемый для увеличения скорости выполнения компьютерных программ. Перед вызовом функции проверяется, вызывалась ли функция ранее:
>
> * если не вызывалась, то функция вызывается, и результат её выполнения сохраняется;
> * если вызывалась, то используется сохранённый результат.

`useCallback` принимает в качестве аргументов встроенный колбэк и массив зависимостей. Возвращает мемоизированную версию колбэка, который изменяется только, если изменяются значения одной из зависимостей:

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

Пример:

```jsx
function renderInput() {
  const [value, setValue] = useState();
  const [secondInput, setSecondInput] = useState();
  const callbackCach = useCallback(e => setValue(e.target.value), []);
  return (
    <div>
      <h1>Callbacks caching examples:</h1>

      <div className="part">
        <h3>Using useCallback hook:</h3>
        <Input onChange={callbackCach} />
        <p>Input value is: {value}</p>
      </div>

      <div className="part">
        <h3>Without useCallback hook:</h3>
        <Input onChange={e => setSecondInput(e.target.value)} />
        <p>Input value is: {secondInput}</p>
      </div>
    </div>
  );
}
```

В этом примере `useCallback` возвращает закешированную функцию \(то есть ссылка не изменяется от рендера к рендеру\). Помимо функции, которую нужно кешировать, в нее передан второй аргумент — пустой массив. Этот массив позволяет передать список полей, при изменении которых необходимо изменить функцию, т.е. вернуть новую ссылку.

