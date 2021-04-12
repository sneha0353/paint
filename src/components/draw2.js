import Paper from "paper";

const draw2 = () => {
  Paper.view.onMouseUp=(event)=>{
      console.log(event,event.delta.length)
    var circle=new Paper.Path.Circle({
        center:event.point,
        radius:event.delta.length/2
    })
    circle.strokeColor="black";
    circle.fillColor="white";
  }
  Paper.view.draw();
};

export default draw2;