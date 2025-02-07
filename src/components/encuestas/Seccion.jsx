import React, { Component } from 'react';
import '../.././App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import API from '../../api/api'

import { Link } from 'react-router-dom';


class Seccion extends Component {
	state = {
		data: [],
		modalInsertar: false,
		modalEliminar: false,
		form: {
			id: '',
			nombre: '',
			id_encuesta: '' 
		},
	}

	peticionGet = () => {

		this.state.form.id_encuesta=this.props.match.params.id	
		API.get(`secciones_encuesta?id=${this.state.form.id_encuesta}`).then(response => {
			this.setState({ data: response.data });
		}).catch(error => {
			console.log(error.message);
		})
	}


	peticionPost = async () => {
		let id_encuesta = this.props.match.params.id;
		const data = new FormData()

		data.append('nombre', this.state.form.nombre)
		data.append('id_encuesta', id_encuesta)

		await API.post('seccion', data).then(response => {
			this.modalInsertar();
			this.peticionGet();
		}).catch(error => {
			console.log(error.message);
		})
	}

	peticionPut = () => {
		const data = new FormData()

		data.append('id', this.state.form.id)
		data.append('nombre', this.state.form.nombre)

		API.put('seccion', data).then(response => {
			this.modalInsertar();
			this.peticionGet();
		})
	}

	peticionDelete = () => {
		API.delete('seccion?id=' + this.state.form.id).then(response => {
			this.setState({ modalEliminar: false });
			this.peticionGet();
		})
	}

	modalInsertar = () => {
		this.setState({ modalInsertar: !this.state.modalInsertar });
	}

	seleccionarseccion = (seccion) => {
		this.setState({
			tipoModal: 'actualizar',
			form: {
				id: seccion.id,
				nombre: seccion.nombre,
				id_encuesta: this.props.match.params.id,
			}
		})
	}

	handleChange = async e => {
		e.persist();
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
		console.log(this.state.form);
	}

	componentDidMount() {
		this.state.form.id_encuesta=this.props.match.params.id	
		console.log(this.state.form.id_encuesta);
		this.peticionGet();

	}


	render() {
		const { form } = this.state;
		return (
			<div className="App">
				<br /><br /><br />
				<button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar seccion</button>
				<br /><br />
				<table className="table ">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map(seccion => {
							return (
								<tr>
									<td>{seccion.id}</td>
									<td>{seccion.nombre}</td>
									<td>
										<Link to={`/en-questas_uno/encuesta/seccion/preguntas/${seccion.id}`}>

											<button className="btn btn-info"><FontAwesomeIcon icon={faQuestionCircle} /></button>
										</Link>
										{"   "}
										<button className="btn btn-primary" onClick={() => { this.seleccionarseccion(seccion); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
										{"   "}
										<button className="btn btn-danger" onClick={() => { this.seleccionarseccion(seccion); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>



				<Modal isOpen={this.state.modalInsertar}>
					<ModalHeader style={{ display: 'block' }}>
						<span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
					</ModalHeader>
					<ModalBody>
						<div className="form-group">
							<label htmlFor="id">ID</label>
							<input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
							<br />
							<label htmlFor="nombre">Name</label>
							<input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
							<br />
						</div>
					</ModalBody>

					<ModalFooter>
						{this.state.tipoModal == 'insertar' ?
							<button className="btn btn-success" onClick={() => this.peticionPost()}>
								Insertar
							</button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
								Actualizar
							</button>
						}
						<button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
					</ModalFooter>
				</Modal>


				<Modal isOpen={this.state.modalEliminar}>
					<ModalBody>
						Estás seguro que deseas eliminar a la seccion {form && form.nombre}
					</ModalBody>
					<ModalFooter>
						<button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
						<button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default Seccion;