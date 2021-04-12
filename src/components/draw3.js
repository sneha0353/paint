import Paper from "paper";

const draw3 = () => {
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
    rectangle.strokeColor="black";
    rectangle.fillColor="white";
  }
  Paper.view.draw();
};

export default draw3;