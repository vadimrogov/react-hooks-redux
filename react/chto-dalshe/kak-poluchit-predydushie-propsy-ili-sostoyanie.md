# Как получить предыдущие пропсы или состояние?

Сейчас, вы можете сделать это вручную, используя реф:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return <h1>Сейчас: {count}, до этого: {prevCount}</h1>;
}
```

Это может показаться усложнённым, но вы можете вынести эту логику в отдельный хук:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Сейчас: {count}, до этого: {prevCount}</h1>;
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Обратите внимание, как это будет работать для пропсов, состояния или любого другого вычисляемого значения.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const calculation = count + 100;
  const prevCalculation = usePrevious(calculation);
  // ...
```

Возможно, в будущем API React введёт хук `usePrevious`, так как он требуется довольно часто.

