import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    //copiar referencia de ariba
    const nameRef = useRef('');


    function pressButton() {
        const text = messageRef.current.value;
        alert(`text in input: ${text}`);

    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }




    return (
        <div style={{ backgroundColor: 'green', padding: '30px' }}>
            <p onMouseOver={() => console.log('On Mouse Over')}>
                Helo, {name}
            </p>
            <button onClick={() => console.log('Boton1 pulsado')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('hola')}>
                Button 3
            </button>
            <input
                placeholder="Send a text to your father"
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input Changed : ', e)}
                onCopy={() => console.log('Copied test from Input')}
                ref={messageRef}>
            </input>
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'>
                        <button type="submit">Update Name</button>
                    </input>
                </form>
            </div>
        </div>
    );
}

export default Child;   
