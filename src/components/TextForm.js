import React ,{ useState }from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnchange = (e) =>{
        setText(e.target.value);
    }
    const [text, setText] = useState('');
    const handleCopy = () =>{
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        console.log(newText)
        setText(newText.join(" "))

    }

  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-2">
        <h1>Your text Summery</h1>
        <p>{text.split(" ").length} words {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something i the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
