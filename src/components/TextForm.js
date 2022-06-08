import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleToClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleToClear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text","success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text","success")
    }
    const handleRemoveExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Space","success")
    }
    const handleOnchange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "new text"; //wrong way to change text 
    // setText("new text"); //Correct way to change state
  return (
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'rgb(25 74 64)',color: props.mode==='dark'?'white':'black'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Connect to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleToClick}>Connect to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleToClear}>ClearText</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>CopyText</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpace}>Remove Space</button>
       
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.split("").filter((element)=>{return element.length!==0}).length} characters</p>
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take time to read</p>
            <h3>Preview</h3>
            <p>{text.length >0?text:"Enter something above to bring text here"}</p>
        </div>
    </div>
  )
}
