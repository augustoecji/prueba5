import React from 'react';
import './App.css';
import jenncy from "./imagenes/jenncy.png"
import uni from "./imagenes/uni.jpg"
import infra from "./imagenes/infra.png"
import angie from "./imagenes/angie.png"
import juan from "./imagenes/juan.png"

function App() {
  return (
 

<div className="container" >
		<div className="header">
			<img src={uni}  height="85" width="235" alt=""/>
		</div>
		<img src={infra} alt=""/>
		<div className="row">
			<div class="col">
				<h2>Jenncy Villamizar Rodriguez</h2>
				<img src={jenncy} height="300" width="300" alt=""/>
				<p>Estudiante de Noveno Semestre de ingeniería Informática de la Universidad de La Sabana.</p>
			</div>
			<div className="col">
				<h2>Angie Rodriguez</h2>
				<img src={angie} height="300" width="300" alt=""/>
				<p>Estudiante de Noveno Semestre de ingeniería Informática de la Universidad de La Sabana.</p>
			</div>
			<div className="col">
				<h2>Juan F.</h2>
				<img src={juan} height="300" width="300" alt=""/>
				<p>Estudiante de Noveno Semestre de ingeniería Informática de la Universidad de La Sabana.</p>
			</div>


	</div>
 </div>
    


                
  );
}

export default App;
