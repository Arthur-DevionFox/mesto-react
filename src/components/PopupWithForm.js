function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`} id={props.id}>
            <div className={"popup__container"}>
                <h2 className={"popup__paragraph"}>{props.title}</h2>
                {props.children}
                <button type={"button"} className={"popup__close"} id={"close-edit"}></button>
            </div>
        </div>
    )
}

export function EditProfilePopup() {
    return (
        <div className={"popup popup_type_profile"} id={"edit"}>
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
    )
}

export function EditAvatarPopup() {
    return (
        <div className={"popup popup_type_avatar"} id="avatar">
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
    )
}

export function AddPlacePopup() {
    return (
        <div className={"popup popup_type_add"} id={"add"}>
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
    )
}

export function DeletePopup() {
    return (
        <div className={"popup popup_delete"} id="delete">
            <div className={"popup__container popup__container_delete"}>
                <p className={"popup__text"}>Вы уверены?</p>
                <button className={"popup__submit popup__submit_delete"}>Да</button>
                <button type="button" className={"popup__close"} id="delete-close"></button>
            </div>

        </div>
    )
}

export default PopupWithForm