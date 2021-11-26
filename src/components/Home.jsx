import React from 'react';
import '.././App.css';

function Home(){
    return (
	<>
		<div className="grid">

			<div className="grid-uno">
				<div className="grid-anidado-uno">
					<h1>Registrate <span>y Opina </span> contestando encuestas</h1>
				</div>
				<div className="grid-anidado-dos">
					<img src="./mujer-encuesta.png" alt="" />
				</div>
			</div>

			<div className="grid-dos">
				<div className="container-grid-dos border m-4 position-relative">
					<div className="container-formulario position-absolute top-50 start-50 translate-middle">
						<p> ¡Regístrate YA!</p>
						<form className="formulario-home">
							<div className="form-group">
								<label for="exampleInputName">¿Cuál es tu primer nombre?</label>
								<input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter first name"/>
							</div>
							<div className="form-group">
								<label for="exampleInputLastName">¿Cuál es tu primer apellido?</label>
								<input type="lastname" className="form-control" id="exampleInputLastName" placeholder="Enter first lastname"/>
							</div>
							
							<button type="submit" className="boton-registro2">¡Me voy a Registrar!</button>
						</form>
					</div>
				</div>
			</div>

			<div className="grid-tres">
				<div className="rounded-pill grid-anidado-tres-uno">
						<h2>¡Únete a la MEJOR comunidad de Opinión Online!</h2>
				</div>

				<div className="grid-anidado-tres-dos">

					<div className="rounded-pill grid-anidado-tres-seccion1">
						<div className="gats1-nombre-seccion1">
							<p>Márketin Digital</p>
						</div>
						<div className="gats1-descripcion-seccion1">
							<div className="gats1-imagen-seccion1">
								<img src="./sonreir.png" alt="" />
							</div>
							<div className="gats1-contenido-imagen-seccion1">
								<p>Encuestas de Satisfacción del Cliente</p>
							</div>
						</div>
					</div>

					<div className="rounded-pill grid-anidado-tres-seccion2">
						<div className="gats2-nombre-seccion2">
								<p>Organización Social</p>
						</div>
						<div className="gats2-descripcion-seccion2">
							<div className="gats2-imagen-seccion2">
								<img src="./trabajo-en-equipo.png" alt="" />
							</div>
							<div className="gats2-contenido-imagen-seccion2">
									<p>Familiares y Amigos</p>
							</div>
						</div>
					</div>

					<div className="rounded-pill grid-anidado-tres-seccion3">
						<div className="gats3-nombre-seccion3">
								<p>Recursos Humanos</p>
						</div>
						<div className="gats3-descripcion-seccion3">
							<div className="gats3-imagen-seccion3">
								<img src="./gerente-de-recursos-humanos.png" alt="" />
							</div>
							<div className="gats3-contenido-imagen-seccion3">
									<p>Encuestas de Ambiente Laboral</p>
							</div>
						</div>	
					</div>

				</div>
			</div>

			<div className="grid-cuatro">
				<div className="rounded-3 g4-contenido">
					<div className="g4-info1">
							<p>Para ti</p>
					</div>
					<div className="g4-info2">
							<p>Obtén una plataforma que pueda crecer y evolucionar junto con las necesidades de tus encuestas. Explora nuestros planes para saber más acerca de funciones específicas.</p>
					</div>
				</div>	
			</div>

			<div className="grid-cinco">
				<div className="rounded-3 g5-contenido">
					<div className="g5-info1">
								<p>Para tu organización</p>
					</div>
					<div className="g5-info2">
								<p>Administra los datos de tu empresa con funciones avanzadas de seguridad y control para que puedas permitir que tus equipos compartan y colaboren sin problemas.</p>
					</div>
				</div>							
			</div>
		</div>
		
	</>
    )
}

export default Home;
