import React from "react";
import style from "./TextAreaForm.module.css";

export default function TextAreaForm({ updatePostArea, postAreaValue, onAddPost }) {
    return (
        <div className={style.postsInput}>
            <textarea className={style.area}
                      onChange={updatePostArea}
                      value={postAreaValue}/>
            <button className={style.buttonSend}
                    onClick={onAddPost}>Send</button>
        </div>
    );
}