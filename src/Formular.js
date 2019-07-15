import React, { Component } from 'react';
import './Formular.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Formular extends Component {
    constructor(props) {
      super(props);
      this.state = {
          users: [],
          value: '',
          name: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showUsers = this.showUsers.bind(this);
    }

    componentDidMount(){
        let random = Math.floor(Math.random() * (1000 - 100 + 1) ) + 100;
        this.setState({name: random});       
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({name: this.state.value});
      const user = {username: this.state.value,}    
      axios.post('http://localhost:8080/users/add', user)
        .then(res => console.log(res.data));
            
      this.setState({value: ""});
    }

    showUsers(){
      axios.get('http://localhost:8080/users/')
      .then(res => {
        if(res.data.length > 0) {
          this.setState({
            users: res.data.map(user => user.username),
            username: res.data.username
          })
        }
      })
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

            <div className="values">
              <div>Real time Input Value = {this.state.value}</div>
              <div>Name = {this.state.name}</div>
            </div>

            <div className="usersButton">
              <Button onClick={this.showUsers} variant="contained" color="primary" >
                      Show Users
              </Button>
            </div>

        </div>

      );
    }
  }

  export default Formular;