# Как осуществлять запросы за данными с помощью хуков?

Хук эффекта, называемый `useEffect`, можно использовать для получения данных и записывания их в локальное состояние компонента с помощью `useState`.

```jsx
import React,  {  useState,  useEffect }  from 'react';
import axios from 'axios';

function App( ) {
    const [data, setData] = useState({});
    useEffect(async () => {
        const result =  await axios(https://daataurl',);
        setData(result.data);
    });

    return (
        <ul>
            {data.hits.map( item => (
                <li key={item.objectID}>
                    <a href={item.url}> {item.title} </a>
                </li>
            ))}
        </ul>
    );
}

export default App;
```

Однако, когда вы запускаете свое приложение, вы должны наткнуться на неприятный цикл. Хук эффекта запускается при монтировании компонента, но также и при обновлении компонента. Поскольку мы обновляем состояние после каждой выборки данных, компонент обновляется и эффект запускается снова. Это ошибка, и ее нужно избегать. **Мы только хотим получить данные, когда компонент монтируется.** Вот почему вы можете предоставить пустой массив в качестве второго аргумента к хуку эффекта, чтобы избежать его активации при обновлении компонента.

```jsx
import React,  {  useState,  useEffect }  from 'react';
import axios from 'axios';

function App( ) {
    const [data, setData] = useState({});
    useEffect(async () => {
        const result =  await axios(https://daataurl',);
        setData(result.data);
    }, []);

    return (
        <ul>
            {data.hits.map( item => (
                <li key={item.objectID}>
                    <a href={item.url}> {item.title} </a>
                </li>
            ))}
        </ul>
    );
}

export default App;
```

Второй аргумент может быть использован для определения всех переменных \(выделенных в этом массиве\), от которых зависит Хук. Если одна из переменных изменяется, хук запускается снова. Если массив с переменными пуст, то хук вообще не запускается при обновлении компонента, так как ему не нужно следить за любыми переменными.

Есть еще один последний подвох. В коде мы используем async / await для извлечения данных из стороннего API. Согласно документации, каждая функция, аннотированная async, возвращает неявное обещание. Однако хук эффекта ничего не должен возвращать. Давайте реализуем обходной путь для этого, используя асинхронную функцию внутри эффекта.

```jsx
import React,  {  useState,  useEffect }  from 'react';
import axios from 'axios';

function App( ) {
    const [data, setData] = useState({});
    useEffect(()  => {
        const fetchData = async () => {
            const result =  await axios('https://daataurl',);
            setData(result.data);
        };
        fetchData();
    }, []);
   
    return (
        <ul>
            { data.hits.map( item => (
                <li key={item.objectID}>
                    <a href={item.url}> { item.title} </a>
                </li>
            ))}
                                                                                    < / ul>  );}
export default App;
```

Это выборка данных с помощью React hooks в двух словах. Но также можно создать многоразовый хук запроса данных.

Уже есть множество пользовательских хуков которые вы можете использовать для этих и других целей.

