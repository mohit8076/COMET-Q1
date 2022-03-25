import React, { useState,useEffect,useRef } from "react";

// function App() {
//   // const [rerenderCount, setRerenderCount] = useState(0);

//   // useEffect(() => {
//   //   setRerenderCount((prevCount) => prevCount + 1);
//   // });

//   // return <div>{rerenderCount}</div>;

//   const rerenderCount = useRef(0);

//   useEffect(() => {
//     rerenderCount.current = rerenderCount.current + 1;
//   });

//   return <div>{rerenderCount.current}</div>;
// }

function Component() {
	const inputRef = useRef(null)
  
	const focusInput = () => {
	  inputRef.current.focus()
	}
  
	return (
	  <>
		<input ref={inputRef} />
		<button onClick={focusInput}>Focus Input</button>
	  </>
	)
  }

export default Component;

import React, { Component } from 'react'

export class RefsDemo extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
		// this.cbRef = null
		// this.setCbRef = element => {
		// 	this.cbRef = element
		// }
	}

	componentDidMount() {
		console.log(this.cbRef)
		if (this.cbRef) {
			this.cbRef.focus()
		}
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

// export default RefsDemo
