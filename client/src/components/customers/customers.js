import React,{Component} from 'react';
import './customers.css';

class Customers extends Component {
    constructor()
    {
        super();
        this.state = {
            customers:[]
        }
    }

    componentDidMount()
    {
         fetch('http://localhost:5000/api/customers')
         .then(res => res.json())
         .then(customers => this.setState({customers},()=> console.log("Customer fetched",customers)));

    }

    render()
    {
        return (
        <div>
            <h2>customers</h2>
        </div>
        );
    }
}

export default Customers;
