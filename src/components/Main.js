import React, {useEffect} from "react";
import api from "../utils/Api";
import Card from "./Card";
import card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext)

    // const [userInfo, setUserInfo] = React.useState({});
    const [cards, setCards] = React.useState([]);

    // useEffect(() => {
    //     Promise.all([api.getProfileInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
    //         setUserInfo(profileInfo)
    //         setCards(card)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    return (
        <main>
            <section className={"profile"}>
                <button className={"profile__avatar-btn"} onClick={props.onAvatarPlace}>
                    <img className={"profile__avatar"} src={currentUser.avatar} alt={currentUser.name} />
                </button>
                <div className={"profile__info"}>
                    <div className={"profile__paragraphs"}>
                        <h1 className={"profile__name"}>{currentUser.name}</h1>
                        <p className={"profile__profession"}>{currentUser.about}</p>
                    </div>
                    <button className={"profile__edit-button"} type="button" onClick={props.onEditProfile}></button>
                </div>
                <button className={"profile__add-button"} type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card, id) => (
                    <Card
                        key={id}
                        card={card}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>

        </main>
    )
}
export default Main