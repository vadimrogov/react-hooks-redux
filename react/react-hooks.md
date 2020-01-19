# Задание React Hooks

По [ссылке](https://github.com/rogov-v/react-hooks-redux) находиться проект написанный с помощью классовых компонентов \(_stateful_\). Его необходимо переписать на функциональные компоненты с использованием хуков.

### Пример:

#### 1. Исходный компонент \(stateful component\):

```jsx
import React, { Component } from "react";
import { CommonLinkBtn } from "./CommonLinkBtn";

class Checkout extends Component {
  componentDidMount() {
    this.props.flushCartHandler();
  }
  render() {
    return (
      <div className="page-body">
        <div className="page-element">
          <div className="checkout-page">
            <h2>Successful!</h2>
            <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
```

#### 2. Компонент после изменения:

```jsx
import React, { useEffect } from "react";
import { CommonLinkBtn } from "./CommonLinkBtn";

const Checkout = ({ flushCartHandler }) => {
  useEffect(() => {
    flushCartHandler();
  }, []);

  return (
    <div className="page-body">
      <div className="page-element">
        <div className="checkout-page">
          <h2>Successful!</h2>
          <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
```

П.с. проект уже переписан на функциональные компоненты, и если что-то не понятно можно переключиться на ветку `react-stateless` , посмотреть и протестировать уже готовый пример.

