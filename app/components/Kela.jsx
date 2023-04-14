import React, { useState } from 'react';

export default function Kela() {
    const [name, setName] = useState(undefined);

    function generateKelaName() {
        if (name) {
            return <p>your anssi kela name is {name} Kela</p>;
        }
    }

    return (
        <>
            <h2>Anssi kela name generator</h2>
            <label>Input yur name to find out your anssi kela name</label>
            <br />
            <input
                id="namefield"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <button onClick={() => setName(name)}>
                generate
            </button>
            <br />
            <br />
            <br />
            {generateKelaName()}
        </>
    );
}