import React,{useContext} from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import TodoContext from "../context/TodoContext"
import {ADD_TODO} from "../context/action.types"
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const CodeEditor = ({code}) => {
    const {todos,dispatch}=useContext(TodoContext)
    return(
        <CodeMirror
            value={code}
            options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
                editor.on('inputRead',function(cm,event){
                    if(event.origin == "copy")
                    {
                        console.log("show",event.text)
                    }
                    if(event.origin == "paste"){
                        let m=value
                        console.log(m)
                        dispatch({
                            type:ADD_TODO,
                            payload:event.text
                        })
                    }
                })
            }}
        />
    )
}

export default CodeEditor;
