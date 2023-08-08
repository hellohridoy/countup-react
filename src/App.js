import "./App.css";
import CountUp, { useCountUp } from "react-countup";

function App() {
  // const { countUp, start, pauseResume, reset, update } = useCountUp({
  //   duration: 5,
  //   end: 10000,
  //   startOnMount: false,
  // });
  return (
    <div className="App">
      {/* <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause</button>
        <button onClick={() => update(2000)}>Start</button>
      </div> */}
      <h1>
        <CountUp end={400} />
      </h1>
      <br></br>
      <h1>
        <CountUp end={400} duration={5} />
      </h1>
      <br></br>
      <h1>
        <CountUp start={300} end={400} duration={7} />
      </h1>

      <h1>
        <CountUp end={1000} duration={5} prefix="$" decimal={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} suffix="USD" decimal={2} />
      </h1>
    </div>
  );
}

export default App;
