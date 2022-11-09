import React from "react";
import { useState } from "react";
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

    const onModeClickHandler = () => {
        mode === "light" ? setMode("dark") : setMode("light");
        modeName === "Light" ? setModeName("Dark") : setModeName("Light");
        textColor === "justlight" ? setTextColor("justdark") : setTextColor("justlight");

    };

    const onClearTextHandler = () => {
        setText("");
    };

    // const onCopyTextHandler = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);
    // };

    const onRemoveSpacesTextHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    };

    // let words = text.split(" ").length;
    // let minutes = 0.008 *  text.split(" ").length;



    return (
            <div className={mode}>
                <Mode onClick={onModeClickHandler} main={`Enable ${modeName}mode`} />
                <div className='container'>
                    <TextArea id="myBox" className={`form-control just ${textColor}`} value={text}onChange={onChangeHandler} />
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
                    {/* <Button className="btn btn-warning mx-1" title="Copy Text" onClick={onCopyTextHandler} /> */}
                    <Button className="btn btn-warning mx-1" title="Remove Spaces" onClick={onRemoveSpacesTextHandler} />
                </div>
                {/* <div className='container'>
                    <h2>Your text summary</h2>
                    <p>{words} words and {text.length} characters</p>
                    <p>{minutes} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
                </div> */}
            </div>
    );
}

export default App;
