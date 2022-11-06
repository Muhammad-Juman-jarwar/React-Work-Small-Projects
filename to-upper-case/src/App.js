import React from "react";
import { Fragment, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Mode from "./components/Mode";
import TextArea from "./components/TextArea";

function App() {
    const [buttonFunc, setButtonFunc] = useState("toUpCase");

    const [textColor, setTextColor] = useState("justlight");

    const [modeName, setModeName] = useState("Dark");
    
    const [mode, setMode] = useState("light");

    const [text, setText] = useState();

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    const onClickUpHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        setButtonFunc("toLowCase");
    };

    const onClickLowHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        setButtonFunc("toUpCase");
    };

    // const Words = text.split(" ").length;
    // const Time = 0.008 * text.split(" ").length;

    const onModeClickHandler = () => {
        mode === "light" ? setMode("dark") : setMode("light");
        modeName === "Light" ? setModeName("Dark") : setModeName("Light");
        textColor === "justlight" ? setTextColor("justdark") : setTextColor("justlight");

    };

    const onClearTextHandler = () => {
        setText("");
    };

    return (
        <Fragment>
            <div className={mode}>
            <Mode onClick={onModeClickHandler} main={`Enable ${modeName}mode`} />
                <div className='container'>
                    <TextArea className={`form-control just ${textColor}`} value={text}onChange={onChangeHandler} />
                    <Button
                        className="btn btn-warning"
                        title={buttonFunc === "toUpCase" ? "Convert To UpperCase" : "Convert To LowerCase"}
                        onClick={buttonFunc === "toUpCase" ? onClickUpHandler : onClickLowHandler}
                    />
                    <Button 
                        className="btn btn-warning mx-1"
                        title="Clear Text"
                        onClick={ onClearTextHandler} 
                    />
                </div>
                {/* <div className='container'>
                    <h2>Your Text Summary</h2>
                    <p>{Words} Words and {text.length} Characters</p>
                    <p>{Time} Minutes Read</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
             */}
            </div>
        </Fragment>
    );
}

export default App;
