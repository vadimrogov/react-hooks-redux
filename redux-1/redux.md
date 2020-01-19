# Задание Redux

По [ссылке](https://github.com/rogov-v/react-hooks-redux) находиться все тот же проект, который должен быть уже переписан на функциональные компоненты. Если нет, то можно  переключиться на ветку `react-stateless` и использовать ее как стартовую точку для начала задания. 

Задание следующее: необходимо добавить в проект `Redux` и вынести всю логику использующую `state` в `Redux`. 

### Пример:

{% tabs %}
{% tab title="До" %}
```jsx
import React, { useState, Fragment } from "react";
import Popup from "./Popup";

const ContactUs = () => {
  const [state, setState] = useState({
    email: "",
    msg: ""
  });
  const [popupActive, renderPopup] = useState(false);
  const [formDataHasError, showError] = useState(false);

  const changeEmailHandler = value =>
    setState({
      ...state,
      email: value
    });

  const changeMessageHandler = value =>
    setState({
      ...state,
      msg: value
    });

  const flushStateHandler = () =>
    setState({
      ...state,
      email: "",
      msg: ""
    });

  const showPopup = (hasError = false) => {
    renderPopup(true);
    showError(hasError);
  };

  const closePopupHandler = () => {
    renderPopup(false);
  };

  const sendContactForm = () => {
    if (!(state.email.trim() && state.msg.trim())) {
      showPopup(true);
    } else {
      showPopup();
      flushStateHandler();
    }
  };

  return (
    <Fragment>
      {popupActive &&
        (!formDataHasError ? (
          <Popup
            popupHeader={"Server say:"}
            renderPopupContentHandler={() => (
              <img
                className="img-responsive"
                src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LtZJGF3BnjoLSeYeXE_%2F-LuOTLcQnAaCxuZPlxc2%2F-LuOVsoiOc6D7i8HNglF%2F2300883_3.jpg?alt=media&token=0c6d76e7-f6d9-4c08-ab92-5d7032935575"
                alt="no"
              />
            )}
            closePopupContentHandler={closePopupHandler}
          />
        ) : (
          <Popup
            popupHeader={"Server say:"}
            renderPopupContentHandler={() => "Server sent an error"}
            closePopupContentHandler={closePopupHandler}
          />
        ))}
      <div className="page-body">
        <div className="page-element">
          <h2>CONTACT US</h2>
          E-mail:
          <input
            value={state.email}
            className="filter-small"
            onChange={e => changeEmailHandler(e.target.value)}
            placeholder="Enter your email"
          />
          Message:
          <textarea
            value={state.msg}
            className="input-field-large"
            onChange={e => changeMessageHandler(e.target.value)}
            placeholder="Enter your message..."
          />
          <button className="common-btn" onClick={() => sendContactForm()}>
            Send
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;

```
{% endtab %}

{% tab title="После" %}
```jsx
import React, { useState, Fragment } from "react";
import Popup from "./Popup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsContactUs from "../actions/contact-us-actions";

const ContactUs = ({ email, msg, formDataHasError, actionsContactUs }) => {
  const [popupActive, renderPopup] = useState(false);
  const { setEmail, setMessage, flushForm, showError } = actionsContactUs;

  const showPopup = (hasError = false) => {
    renderPopup(true);
    showError(hasError);
  };

  const closePopupHandler = () => {
    renderPopup(false);
  };

  const sendContactForm = () => {
    if (!(email.trim() && msg.trim())) {
      showPopup(true);
    } else {
      showPopup();
      flushForm();
    }
  };

  return (
    <Fragment>
      {popupActive &&
        (!formDataHasError ? (
          <Popup
            popupHeader={"Server say:"}
            renderPopupContentHandler={() => (
              <img
                className="img-responsive"
                src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LtZJGF3BnjoLSeYeXE_%2F-LuOTLcQnAaCxuZPlxc2%2F-LuOVsoiOc6D7i8HNglF%2F2300883_3.jpg?alt=media&token=0c6d76e7-f6d9-4c08-ab92-5d7032935575"
                alt="no"
              />
            )}
            closePopupContentHandler={closePopupHandler}
          />
        ) : (
          <Popup
            popupHeader={"Server say:"}
            renderPopupContentHandler={() => "Server sent an error"}
            closePopupContentHandler={closePopupHandler}
          />
        ))}
      <div className="page-body">
        <div className="page-element">
          <h2>CONTACT US</h2>
          E-mail:
          <input
            value={email}
            className="filter-small"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          Message:
          <textarea
            value={msg}
            className="input-field-large"
            onChange={e => setMessage(e.target.value)}
            placeholder="Enter your message..."
          />
          <button className="common-btn" onClick={() => sendContactForm()}>
            Send
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actionsContactUs: bindActionCreators(actionsContactUs, dispatch)
  };
};

function mapStateToProps(state) {
  return state.contactFormReducer;
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);

```
{% endtab %}
{% endtabs %}

В ветке `react-redux` , можно посмотреть и протестировать уже готовый пример с подключенным `Redux`.



