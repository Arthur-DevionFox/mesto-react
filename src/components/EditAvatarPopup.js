import PopupWithForm from "./PopupWithForm";
function EditAvatarPopup(props) {
    return ( <PopupWithForm
        title = {'Обновить аватар'}
        name = {'avatar'}
        id = {'avatar'}
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        onCloseClick = {props.onCloseClick}
        >
        <form className={"popup__form"} name="card-form" id="form-avatarEdit" noValidate>
            <input id="input-link" className={"popup__input popup__input_type_avatar"} placeholder="Ссылка" type="url" name="avatar" required/>
            <span className={"popup__input-error input-link-error"}></span>
            <button className={"popup__submit"} type="submit" id="add-newAvatar">Сохранить</button>
        </form>
    </PopupWithForm> )
}
export default EditAvatarPopup