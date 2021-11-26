import React from 'react';
import './App.css';
import NaBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Routing from './Router/Routing';
import {BrowserRouter as Router} from 'react-router-dom';

function App(){
	return (
		<Router>
			<div className="App d-flex flex-column min-vh-100">
				<NaBar />
				<Routing />
				<Footer  />
			</div>
		</Router>
	);
}

export default App;