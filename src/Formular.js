import React, { Component } from 'react';
import './Formular.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Formular extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          name: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let random = Math.floor(Math.random() * (1000 - 100 + 1) ) + 100;
        this.setState({name: random});
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.setState({name: this.state.value});
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="Formular">
            
            <form onSubmit={this.handleSubmit}>
                <div className="textField">
                <TextField                    
                    id="standard-name"
                    label="Name"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Button type="submit" value="Submit" variant="contained" color="primary" >
                    Click Here!
                </Button>
                </div>
                
            </form>

            <div>Real time Input Value = {this.state.value}</div>

            <div>Name = {this.state.name}</div>

        </div>

      );
    }
  }

  export default Formular;