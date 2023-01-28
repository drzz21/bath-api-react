import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { AppRouter } from './router/AppRouter';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<AppRouter />
			{/* <Navbar/> */}
		</div>
	);
}

export default App;

