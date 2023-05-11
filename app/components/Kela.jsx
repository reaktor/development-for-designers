import React, { useState } from 'react';

export default function Kela() {
    const [name, setName] = useState(undefined);
    const [kelaName, setKelaName] = useState(undefined);

    function generateKelaName() {
        if (kelaName) {
            return <p>your anssi kela name is {kelaName} Kela</p>;
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
            <button onClick={() => setKelaName(name)}>
                generate
            </button>
            <br />
            <br />
            <br />
            {generateKelaName()}
        </>
    );
}