import React from "react";

function InputArea() {
    const [toList, setToList] = useState("")
    function AddList(e) {
        const todo = e.target.value;
        setToList(todo)
    }
    

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
