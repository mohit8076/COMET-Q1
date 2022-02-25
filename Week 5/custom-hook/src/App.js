import React from 'react'
import './App.css'

import CounterOne from './components/CounterOne'
// import CounterTwo from './components/CounterTwo'
import UserForm from './components/UserForm'

function App() {
	return (
		<div className="App">
			<CounterOne />
			{/* <CounterTwo /> */}
			<hr/>
			<UserForm />
		</div>
	)
}

export default App
