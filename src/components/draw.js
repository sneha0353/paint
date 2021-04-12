import Paper from "paper";

const draw1 = ({color,width}) => {
    let myPath = new Paper.Path();
    Paper.view.onMouseDown = (event) => {
    myPath.strokeColor = "black";
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseUp=(event)=>{
    myPath = new Paper.Path();   
  }

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };
  Paper.view.draw();
};

export default draw1;