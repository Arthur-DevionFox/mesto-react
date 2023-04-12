import React from "react";

function Main() {
    return (
        <main>
            <section className={"profile"}>
                <button className={"profile__avatar-btn"} onClick={handleEditAvatarClick}>
                    <img alt="Аватар" className={"profile__avatar"} src={require('../images/Avatar.jpg')} />
                </button>
                <div className={"profile__info"}>

                    <div className={"profile__paragraphs"}>
                        <h1 className={"profile__name"}>Жак-Ив Кусто</h1>
                        <p className={"profile__profession"}>Исследователь океана</p>
                    </div>
                    <button className={"profile__edit-button"} type="button" onClick={handleEditProfileClick}></button>
                </div>
                <button className={"profile__add-button"} type="button" onClick={handleAddPlaceClick}></button>
            </section>

            <section className={"elements"}>

            </section>

        </main>
    )
}

function handleEditAvatarClick() {
    const editAvatarPopup = document.querySelector('#avatar');
    editAvatarPopup.classList.add('popup_opened')
}

function handleEditProfileClick() {
    const editInfoPopup = document.querySelector('#edit');
    editInfoPopup.classList.add('popup_opened')
}

function handleAddPlaceClick() {
    const addPlacePopup = document.querySelector('#add');
    addPlacePopup.classList.add('popup_opened')
}

export default Main