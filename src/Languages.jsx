import { useState, useRef } from 'react';

function Languages() {
    const rName = useRef();

    const [name, setName] = useState("");
    const [py, setPy] = useState(false);
    const [java, setJava] = useState(false);
    const [js, setJs] = useState(false);
    const [msg, setMsg] = useState("");

    const hName = (event) => {
        setName(event.target.value);
    };

    const hPy = (event) => setPy(event.target.checked);
    const hJava = (event) => setJava(event.target.checked);
    const hJs = (event) => setJs(event.target.checked);

    const show = (event) => {
        event.preventDefault();
        if (name === "") {
            alert("Please enter your name");
            setMsg("");
            rName.current.focus();
            return;
        }
        if (name.trim() === "") {
            alert("Name should not be empty");
            setMsg("");
            rName.current.focus();
            return;
        }
        if (!name.match(/^[a-zA-Z ]+$/)) {
            alert("Name should contain only letters and spaces");
            setMsg("");
            rName.current.focus();
            return;
        }

        let lang = "";
        if (py) lang += " Python ";
        if (java) lang += " Java ";
        if (js) lang += " JavaScript ";
        if (lang.length === 0) lang = "no language ";
        let ans = "name = " + name + " languages = " + lang;
        setMsg(ans);
    };

    return (
        <>
            <center>
                <h1>Feedback Form</h1>
                <form onSubmit={show}>
                    <label>
                        Name:
                        <input
                            type="text"
                            placeholder="Enter name"
                            ref={rName}
                            value={name}
                            onChange={hName}
                        />
                    </label>
                    <br />
                    <label>
                        Feedback:
                        <label>
                            <input type="checkbox" value="excellent" defaultChecked={true} onChange={hPy} />
                            Python
                        </label>
                        <label>
                            <input type="checkbox" value="superb" onChange={hJava} />
                            Java
                        </label>
                        <label>
                            <input type="checkbox" value="good" onChange={hJs} />
                            JavaScript
                        </label>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <h2>{msg}</h2>
            </center>
        </>
    );
}

export default Languages;
