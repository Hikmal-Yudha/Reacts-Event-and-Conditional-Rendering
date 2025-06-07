import logo from "./logo.svg";
import "./App.css";

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take The Shot!</button>
  );
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  //  if (isGoal) {
  //    return <MadeGoal />;
  //  }
  //  return <MissedGoal />;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function Garage(props) {
  const car = props.car;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}
const cars = ["Ford", "BMW", "Audi"];

function App() {
  return (
    <div className="App">
      <Football />
      <Goal isGoal={true} />
      <Garage cars={cars} />
    </div>
  );
}

export default App;
