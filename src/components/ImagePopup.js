import React from "react";

function ImagePopup() {
    return (
        <div className={"popup popup_img"} id="image">
            <div className={"popup__container-big-img"}>
                <figure className={"popup__figure"}>
                    <img className={"popup__image"} src=" " alt="" />
                    <figcaption className={"popup__undertaker"} id="undertaker"></figcaption>
                </figure>
                <button type="button" className={"popup__close"} id="img-close"></button>
            </div>
        </div>
    )
}