import './App.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import { env } from "./evaulation.js"

function App() {
  const { register, handleSubmit } = useForm();
  const ev = env(process.env.REACT_APP_ENV); 


  var onSubmit = (data, e) => {
    console.log(data.uname)
    console.log(e.target);
    document.getElementById("fw").style.display = "none";
    document.getElementById("title").innerHTML += "<p class='sucIR'>Sent succesfull</p>";
    document.getElementById("title").innerHTML += `<h6>U: ${data.uname}</h6>`;
    

    axios.post(`${ev.backend_url}${data.uname}/2`)
    .then(function (response) {
      document.getElementById("title").innerHTML += `<h6>Dev logs: ${JSON.stringify(response)}</h6>`;
    })
    .catch(function (error) {
    console.log("Backend error" + error);
    })

  }
  return (
    <div className="App">
      <header className="App-header" id="title">
        <p>
          Welcome to the Hello World app!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} id="fw">
            <input type="text" name="uname" placeholder="abc123" {...register('uname')} ></input><br />
          <button type="submit" className="btn btn-primary">Register in database!</button>
        </form>

      </header>
    </div>
  );

}

export default App;
