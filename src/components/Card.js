import React from "react";

function Card(props) {
    return (
        <div className={"element"}>
            <button type="submit" className={"element__delete"}></button>
            <img src={props.link} alt={props.name} className={"element__image"} />
            <div className={"element__info"}>
                <h2 className={"element__paragraph"}>{props.name}</h2>
                <div className={"element__likes"}>
                    <button type="button" className={"element__like"}></button>
                    <label className={"element__like-info"}>
                        <p className={"element__counter"}>{props.likes}</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Card