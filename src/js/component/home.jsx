import React, { useEffect, useState } from "react";



//create your first component
const Home = () => {
	const [newEntry, setNewEntry]= useState('');
	const [toDoList, setToDoList]= useState(["Make the bed", "Eat"]);
	const [estado, setEstado] = useState(false);
	const conteo = toDoList.length;


	function ratonEncimaDelElemento(index) {
        setEstado(index);
    }

    function ratonFueraDelElemento() {
        setEstado(false);
		
    }

	function onSubmit(e) {
		e.preventDefault();
		const nuevaLista = [...toDoList, newEntry];
		setToDoList(nuevaLista)
		setNewEntry('');
		console.log("onSubmit");
	};

	function eliminarElemento(value) {
		const result = toDoList.filter((element, index) => index !== value);
		setToDoList(result);
		
	};

	console.log(toDoList);
	return (
		<div className="container w-50 text-center">
			<label htmlFor="exampleInputEmail1" className="form-label " style={{fontSize:"30px", paddingTop:"10px"}}>To Do List</label>
			<div className="container-flex lavenderBlush border myStyle">
				<form onSubmit={onSubmit}>
					<div className="container-flex border-bottom p-1">
						<input onChange={(e) => setNewEntry(e.target.value)} value={newEntry} type="text" className="form-control lavenderBlush inputStyle" placeholder="Agregar tarea" id="exampleInput" aria-describedby="emailHelp"/>
					</div>
				</form>
					<ul className="list-group list-group-flush">
						{toDoList.length === 0 ? (
							<p className="text-center pt-3">No hay tareas</p>
						) : (
							toDoList.map((item, index) => (
								<li 
									key={index} 
									className="list-group-item lavenderBlush d-flex justify-content-between align-items-center" 
									onMouseOver={() => ratonEncimaDelElemento(index)}
									onMouseOut={() => ratonFueraDelElemento()}
								>
									{item}
									{estado === index && (
										<button className="btn" onClick={() => eliminarElemento(index)}>❌</button>
									)}
								</li>
							))
						)}
					</ul>
					<div className="pt-3 ps-2 border-top">
						{conteo} Tareas pendientes
					</div>
			</div>
			<div style={{ height: "3px", borderRadius: "3px"}} className="lavenderBlush border mx-1"></div>
			<div style={{ height: "3px", borderRadius: "3px"}} className="lavenderBlush border mx-2"></div>
		</div>

	);
};

export default Home;