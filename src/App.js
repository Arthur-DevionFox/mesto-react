import Header from "./components/Header";
import React from "react";

function App() {
  return (
      <>

  <div className={"page"}>
      <Header />

      <main>
        <section className={"profile"}>
          <button className={"profile__avatar-btn"}>
            <img alt="Аватар" className={"profile__avatar"} src={require('./images/Avatar.jpg')} />
          </button>
          <div className={"profile__info"}>

            <div className={"profile__paragraphs"}>
              <h1 className={"profile__name"}>Жак-Ив Кусто</h1>
              <p className={"profile__profession"}>Исследователь океана</p>
            </div>
            <button className={"profile__edit-button"} type="button"></button>
          </div>
          <button className={"profile__add-button"} type="button"></button>
        </section>

        <section className={"elements"}>

        </section>

      </main>

      <footer className={"footer"}>
        <p className={"footer__paragraph"}>© 2023 Mesto Russia</p>
      </footer>

    <template id={"element"}>
      <div className={"element"}>
        <button type="submit" className={"element__delete"}></button>
        <img src=" " alt="" className={"element__image"} />
          <div className={"element__info"}>
            <h2 className={"element__paragraph"}></h2>
            <div className={"element__likes"}>
              <button type="button" className={"element__like"}></button>
              <label className={"element__like-info"}>
                <p className={"element__counter"}></p>
              </label>
            </div>
          </div>
      </div>
    </template>

    <div className={"popup"} id={"edit"}>
      <div className={"popup__container"}>
        <h2 className={"popup__paragraph"}>Редактировать профиль</h2>
        <form name={"profile-form"} className={"popup__form"} id={"form-edit"} noValidate>
          <input id={"input-name"} className={"popup__input popup__input_type_name"} placeholder={"Введите имя"} minLength="2" maxLength="40" type={"text"} name={"name"} required/>
          <span className={"popup__input-error input-name-error"}></span>
          <input id={"input-profession"} className={"popup__input popup__input_type_profession"} placeholder={"Введите род деятельности"} minLength="2" maxLength="200" type={"text"} name={"profession"} required/>
            <span className={"popup__input-error input-profession-error"}></span>
            <button className={"popup__submit"} type={"submit"}>Сохранить</button>
        </form>
        <button type={"button"} className={"popup__close"} id={"close-edit"}></button>
      </div>
    </div>

    <div className={"popup"} id={"add"}>
      <div className={"popup__container"}>
        <h2 className={"popup__paragraph"}>Новое место</h2>
        <form className={"popup__form"} name={"card-form"} id={"form-add"} noValidate>
          <input id={"input-title"} className={"popup__input popup__input_type_head"} minLength="2" maxLength="30" placeholder="Название" type="text" name="name" required/>
          <span className={"popup__input-error input-title-error"}></span>
          <input id={"input-url"} className={"popup__input popup__input_type_url"} placeholder="Ссылка на картинку" type="url" name="link" required/>
          <span className={"popup__input-error input-url-error"}></span>
          <button className={"popup__submit"} type="submit" id="add-save">Создать</button>
        </form>
        <button type="button" className={"popup__close"} id="close-add"></button>
      </div>
    </div>

    <div className={"popup"} id="avatar">
      <div className={"popup__container"}>
        <h2 className={"popup__paragraph"}>Обновить аватар</h2>
        <form className={"popup__form"} name="card-form" id="form-avatarEdit" noValidate>
          <input id="input-link" className={"popup__input popup__input_type_avatar"} placeholder="Ссылка" type="url" name="avatar" required/>
            <span className={"popup__input-error input-link-error"}></span>
            <button className={"popup__submit"} type="submit" id="add-newAvatar">Сохранить</button>
        </form>
        <button type="button" className={"popup__close"} id="close-avatarEdit"></button>
      </div>
    </div>

    <div className={"popup popup_img"} id="image">
      <div className={"popup__container-big-img"}>
        <figure className={"popup__figure"}>
          <img className={"popup__image"} src=" " alt="" />
            <figcaption className={"popup__undertaker"} id="undertaker"></figcaption>
        </figure>
        <button type="button" className={"popup__close"} id="img-close"></button>
      </div>
    </div>

    <div className={"popup popup_delete"} id="delete">
      <div className={"popup__container popup__container_delete"}>
        <p className={"popup__text"}>Вы уверены?</p>
        <button className={"popup__submit popup__submit_delete"}>Да</button>
        <button type="button" className={"popup__close"} id="delete-close"></button>
      </div>

    </div>
  </div>
        </>
  );
}

export default App