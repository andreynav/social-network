import React from "react";
import style from "./TextAreaForm.module.css";

export default function TextAreaForm({ updatePostArea, postAreaValue, addPost }) {
    return (
        <div className={style.postsInput}>
            <textarea className={style.area}
                      onChange={updatePostArea}
                      value={postAreaValue}/>
            <button className={style.buttonSend}
                    onClick={addPost}>Send</button>
        </div>
    );
}