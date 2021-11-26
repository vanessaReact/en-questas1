import React from 'react';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import Register from '../components/auth/Register';
import Encuesta from '../components/encuestas/Encuesta'
import Seccion from '../components/encuestas/Seccion'
import Pregunta from '../components/encuestas/Pregunta'
import Opcion from '../components/encuestas/Opcion'
import Home from '../components/Home';
import {Switch, Route} from 'react-router-dom';

function Routing(){

    return (
		<>
			<Switch>
				<Route path="/en-questas_uno/" exact component={Home} />
				<Route path="/en-questas_uno/encuesta" exact component={Encuesta} />
				<Route path="/en-questas_uno/encuesta/seccion/:id" exact component={Seccion} />
				<Route path="/en-questas_uno/encuesta/seccion/preguntas/:id" exact component={Pregunta} />
				<Route path="/en-questas_uno/encuesta/seccion/preguntas/opciones/:id" exact component={Opcion} />
				<Route path="/en-questas_uno/login" exact component={Login} />
				<Route path="/en-questas_uno/logout" exact component={Logout} />
				<Route path="/en-questas_uno/register" exact component={Register} />
			</Switch>
		</>
    )
}

export default Routing;