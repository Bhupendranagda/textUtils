import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange =(e)=>{
        console.log("On Change")
        setText(e.target.value)
    }

    const [text,setText] = useState('');
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea onChange={handleOnChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert To Uppercase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-1">Convert To Lowercase</button>
            </div>
        </div>
        <div>
           <h1>Text Summary</h1> 
           <p>{text.split(" ").length} words and {text.length} letter</p>
           <p>{ 0.008 * text.split(" ").length} Minutes read</p>
           <h2>Preview</h2>
           <p>{text}</p>
        </div>
        </>
    )
}
