import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm
        title = {'Редактировать профиль'}
        name = {'name'}
        id = {'edit'}
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        onCloseClick = {props.onCloseClick}
        >
        <form name={"profile-form"} className={"popup__form"} id={"form-edit"} noValidate>
            <input id={"input-name"} className={"popup__input popup__input_type_name"} placeholder={"Введите имя"} minLength="2" maxLength="40" type={"text"} name={"name"} required/>
            <span className={"popup__input-error input-name-error"}></span>
            <input id={"input-profession"} className={"popup__input popup__input_type_profession"} placeholder={"Введите род деятельности"} minLength="2" maxLength="200" type={"text"} name={"profession"} required/>
            <span className={"popup__input-error input-profession-error"}></span>
            <button className={"popup__submit"} type={"submit"}>Сохранить</button>
        </form>
    </PopupWithForm> )
}

export default EditProfilePopup