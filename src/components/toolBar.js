import React, { useState,useContext } from "react";
import Paper from "paper";
import {Icon} from "semantic-ui-react";
import CodeEditor from "./codeEditor";
import TodoContext from "../context/TodoContext"

const ToolBar = ({color,width}) => {
    const [code,setCode] = useState()
    const {todos}=useContext(TodoContext)
    const draw1 = () => {
      setCode(`
      let myPath = new Paper.Path();
      console.log(color,width);
      Paper.view.onMouseDown = (event) => {
      myPath.strokeColor = color;
      myPath.strokeWidth = width;
    };
  
    Paper.view.onMouseUp=(event)=>{
      myPath = new Paper.Path();   
    }
  
    Paper.view.onMouseDrag = (event) => {
      myPath.add(event.point);
    };
    Paper.view.draw();
      `)
        let myPath = new Paper.Path();
          console.log(color,width);
          Paper.view.onMouseDown = (event) => {
          myPath.strokeColor = color;
          myPath.strokeWidth = width;
        };
      
        Paper.view.onMouseUp=(event)=>{
          myPath = new Paper.Path();   
        }
      
        Paper.view.onMouseDrag = (event) => {
          myPath.add(event.point);
        };
        Paper.view.draw();
      };

      const draw2 = () => {
        setCode(`
        Paper.view.onMouseUp=(event)=>{
          console.log(event,event.delta.length)
        var circle=new Paper.Path.Circle({
            center:event.point,
            radius:event.delta.length/2
        })
        circle.strokeColor=color;
        circle.fillColor=color;
      }
      Paper.view.draw();
        `)
        Paper.view.onMouseUp=(event)=>{
            console.log(event,event.delta.length)
          var circle=new Paper.Path.Circle({
              center:event.point,
              radius:event.delta.length/2
          })
          circle.strokeColor=color;
          circle.fillColor=color;
        }
        Paper.view.draw();
      };

      const draw3 = () => {
        setCode(`
        var start,end;
        Paper.view.onMouseDown = (event) => {
          start = event.point
        }
        Paper.view.onMouseUp = (event) => {
          end = event.point
          var rectangle = new Paper.Path.Rectangle({
              from : start,
              to:end
          })
          rectangle.strokeColor=color;
          rectangle.fillColor=color;
        }
        Paper.view.draw();
        `)
        var start,end;
        Paper.view.onMouseDown = (event) => {
          start = event.point
        }
        Paper.view.onMouseUp = (event) => {
          end = event.point
          var rectangle = new Paper.Path.Rectangle({
              from : start,
              to:end
          })
          rectangle.strokeColor=color;
          rectangle.fillColor=color;
        }
        Paper.view.draw();
    }

    const drawNew=()=>{
        setCode("")
    }

    console.log(todos)

    return(
      <div>
        <div>
            <button
                onClick={()=>draw1()}
                className='btn pencil' style={{height:'30px',background:'black',borderRadius:'20px',marginTop:"15px",marginLeft:"50px"}}>
            <Icon name="pencil" style={{color:'white'}} />
            <span style={{marginLeft:'5px',color:"white"}}>Pencil</span>
            </button> 
            <div class="expand_button" style={{marginTop:"30px",marginLeft:"50px"}}>
            <button 
            onClick={()=>draw3()}
            href="#" class="btn e-button" style={{height:'30px',borderRadius:"15px"}}> 
                <span class="e-button-text">
                <Icon name="square" style={{color:'white'}} />
                <span style={{marginLeft:'5px'}}>Rectangle</span>
                </span> 
            </button> 
            </div>
            <div class="expand_button" style={{marginTop:"15px",marginLeft:"50px"}}>
            <button
            onClick={()=>draw2()}
            href="#" class="btn e-button" style={{height:'30px',borderRadius:"20px"}}> 
                <span class="e-button-text">
                <Icon name="circle" style={{color:'white'}} />
                <span style={{marginLeft:'5px'}}>Centered Circle</span>
                </span> 
            </button> 
            </div>
            <div class="expand_button" style={{marginTop:"15px",marginLeft:"50px"}}>
            <button
            onClick={()=>drawNew()}
            href="#" class="btn e-button" style={{height:'30px',borderRadius:"20px"}}> 
                <span class="e-button-text">
                <Icon name="add" style={{color:'white'}} />
                <span style={{marginLeft:'5px'}}>Add</span>
                </span> 
            </button> 
            </div>
        </div>
        <CodeEditor code={code} />
        </div>
    )
}

export default ToolBar;