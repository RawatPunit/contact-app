// we are going to use class component instead functional component
import React from "react";
class AddContact extends React.Component{
    render()  {
        return(
        //what we want from the render method we are going to create a form with name and  email id
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
        );
    }
}

export default AddContact;
