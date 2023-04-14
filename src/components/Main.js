import React from "react";
import api from "../utils/Api";

function Main(props) {



    const [ userName, setUserName ] = React.useState('Имя пользователя')
    const [ userAvatar, setUserAvatar ] = React.useState('https://graziamagazine.ru/upload/attach/e6b/e6b512b4232be912a087f9166040e6ec.jpg')
    const [ userDescription, setUserDescription ] = React.useState('Род деятельности')

    return (
        <main>
            <section className={"profile"}>
                <button className={"profile__avatar-btn"} onClick={props.onAvatarPlace}>
                    <img alt="Аватар" className={"profile__avatar"} src={userAvatar}/>
                </button>
                <div className={"profile__info"}>
                    <div className={"profile__paragraphs"}>
                        <h1 className={"profile__name"}>{userName}</h1>
                        <p className={"profile__profession"}>{userDescription}</p>
                    </div>
                    <button className={"profile__edit-button"} type="button" onClick={props.onEditProfile}></button>
                </div>
                <button className={"profile__add-button"} type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className={"elements"}>

            </section>

        </main>
    )
}
export default Main