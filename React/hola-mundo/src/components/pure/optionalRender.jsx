import React, { useState } from 'react';

// Login  /  logout button

const LoginButton = ({ loginAction, propStyle }) => {
    return (

        <button style={propStyle} onClick={loginAction}>Login</button>

    );
}


const LogoutButton = ({ LogoutAction }) => {
    return (

        <button onClick={LogoutAction}>Logout</button>

    )
}



//? (Exprecion true) && exprecion => se renderiza de la exprecion
//? (Exprecion false) && exprecion => no se renderiza de la exprecion




const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nMessage, setNMessage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }





    let optionalButton;

    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>

    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }




    if (access) {
        optionalButton = <LogoutButton LogoutAction={logoutAction} />

    } else {
        optionalButton = <LoginButton loginAction={loginAction} />

    }

    // unread messages
    let addMessage = () => {
        setNMessage(nMessage + 1);
    }


    return (
        <div>
            {/*optional Buuton*/}
            {optionalButton}
            {/* N Message unread message */}
            {/* {nMessage > 0 && nMessage === 1 && < p > You have{nMessage} new messages...</p>}
            {nMessage > 1 && <p>You have {nMessage} unread messages</p>} {/* Si nMessage es mayor a 0, se renderiza el p */}
            {/*} {nMessage === 0 && <p>You have no unread messages</p>} {/* Si nMessage es igual a 0, se renderiza el p */}

            {/* Ternary operator // OPERADOR TERNARIO*/}
            {nMessage > 0 ?
                <p>You have {nMessage} new messages{nMessage > 1 ? 's' : null} ... </p> :
                <p>There are no new messages</p>}

            <button onClick={addMessage}>{nMessage > 0 ? 'New Message' : 'No New Message'}</button>
        </div>
    );
}

export default OptionalRender;

