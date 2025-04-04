import React, { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("UpperCase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        console.log("UpperCase was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }

    const handleClearClick = (event) => {
        console.log("Clear Text");
        setText('')
        props.showAlert("Text Cleared", "success")
    }

    const handleCopyClick = () => {
        console.log("Copy text");
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpace = () => {
        console.log("Remove Extra Space");
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra Space removed", "success")
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}}
            className="form-control" id="myBox" value={text} rows={8}></textarea>
            </div>
            
            <button disabled={text.length===0}
            onClick={handleUpClick}
            type="submit" className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
            <button disabled={text.length===0}
            onClick={handleLowClick}
            type="submit" className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
            <button disabled={text.length===0}
            onClick={handleClearClick}
            type="submit" className="btn btn-primary mx-1 my-1">Clear Text</button>
            <button disabled={text.length===0}
            onClick={handleCopyClick}
            type="submit" className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button disabled={text.length===0}
            onClick={handleExtraSpace}
            type="submit" className="btn btn-primary mx-1 my-1">Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter(Boolean).length} Minutes Need to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
        </>
    );
};

export default TextForm;