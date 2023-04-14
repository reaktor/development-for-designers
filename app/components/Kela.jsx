let name = undefined;

function generateKelaName() {
    if (name) {
        return <p>your anssi kela name is {name} Kela</p>;
    }
}

export default function Kela() {
    return (
        <>
            <h2>Anssi kela name generator</h2>
            <label>Input yur name to find out your anssi kela name</label>
            <br />
            <input
                id="n"
                onChange={(event) => {
                    name = event.target.value;
                }}
            />
            <button onClick={() => alert(`your anssi kela name is ${name} Kela`)}>
                generate
            </button>
            <br />
            <br />
            <br />
        </>
    );
}