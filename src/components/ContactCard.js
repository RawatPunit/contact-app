import React from "react";
// import user from '../images/user.png';

//adding props because we need to access contact.name and contact.email
const ContactCard = (props) =>{
    const {id, name,email} = props.contact;  //destructed so that we dont have to write contact.name/props.conctact.name again and again
    return(
        <div className="item">
            {/* <img className="ui avatar image" src={user} alt="user"/> */}
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color: "red", marginTop: '7px'}}
            onClick={() => props.clickHandler(id)}> 
            {/* this above props.clickhandler will lead to ContactList where there will be a functionfo deletion */}
            </i>
        </div>
    )
};

export default  ContactCard;