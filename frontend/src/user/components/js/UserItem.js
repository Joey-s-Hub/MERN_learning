import React from "react";
import {Link} from "react-router-dom";

import Avatar from "../../../shared/components/UIElements/js/Avatar.js";
import Card from "../../../shared/components/UIElements/js/Card.js";
import "../scss/UserItem.scss"

const UserItem = props => {
    return (
        <li>
            <div className='user-item'>
                <Card className='user-item__content'>
                    <Link to={`${props.id}/places`}>
                        <div className='user-item__image'>
                            <Avatar image={props.image} alt={props.name}/>
                        </div>
                        <div className='user-item__info'>
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </Link>
                </Card>
            </div>
        </li>
    );
};

export default UserItem