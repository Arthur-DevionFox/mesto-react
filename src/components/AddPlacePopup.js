import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    return (
        <PopupWithForm
            title = {'Обновить аватар'}
            name = {'name'}
            id = {'add'}
            isOpen = {props.isOpen}
            onClose = {props.onClose}
            onCloseClick = {props.onCloseClick}
        >
            <form className={"popup__form"} name={"card-form"} id={"form-add"} noValidate>
                <input id={"input-title"} className={"popup__input popup__input_type_head"} minLength="2" maxLength="30" placeholder="Название" type="text" name="name" required/>
                <span className={"popup__input-error input-title-error"}></span>
                <input id={"input-url"} className={"popup__input popup__input_type_url"} placeholder="Ссылка на картинку" type="url" name="link" required/>
                <span className={"popup__input-error input-url-error"}></span>
                <button className={"popup__submit"} type="submit" id="add-save">Создать</button>
            </form>
        </PopupWithForm>
    )
}

export default AddPlacePopup