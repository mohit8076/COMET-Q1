import React from 'react'
import ContactForm from './ContactForm'

class App extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (<>
    <ContactForm onSubmit={this.submit} />
    <h1></h1>
    </>
    )
  }
}

export default App;
