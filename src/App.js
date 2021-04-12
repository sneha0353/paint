import React, { useEffect, useRef, useState,useReducer } from "react";
import './App.css';
import Paper from "paper";
import ToolBar from "./components/toolBar";
import 'semantic-ui-css/semantic.min.css';
import {Grid,Input,Card, Form} from "semantic-ui-react";
import TodoContext from "./context/TodoContext"
import {todoReducer,initialState} from "./context/reducer"

const App = props => {

  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
  }, []);

  const [color,setColor] = useState('black');
  const [width,setWidth] = useState(3);
  const [todos,dispatch]=useReducer(todoReducer,initialState)

  return (
    <div >
    <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
            <TodoContext.Provider value={{todos,dispatch}}>
            <ToolBar id='tool' color={color} width={width} />
            </TodoContext.Provider>
            </Grid.Column> 
            <Grid.Column>
            <Card style={{padding:'10px',marginTop:'15px'}}>
            <Form>
            <Form.Field>
            <label>Stroke Color</label> 
            <Input type='color' value={color} onChange={(e)=>setColor(e.target.value)} />
            </Form.Field>
            <Form.Field>
            <label>Stroke Width</label>
            <Input type='number' value={width} onChange={(e)=>setWidth(e.target.value)} />
            </Form.Field>
            </Form>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      <canvas style={{height:'100%',width:'100%',border:'solid black 2px'}} ref={canvasRef} {...props} id="canvas" resize="true" />
      <div>
      </div>
    </div>
  );
}

export default App;
