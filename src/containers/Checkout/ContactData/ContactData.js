import React, {Component} from 'react' 
import axios from '../../../axios-order'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import Spinner from '../../../components/UI/spinner/spinner'

class ContactData extends Component{
    state={
        name: '',
        email:'',
        adress:{
            street:'',
            postalcode:''
        },
        loading:false

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({loading:true});
        const order = {
        ingredients: this.props.ingredients,
        price: this.props.totalPrice,
        customer:{
        name: 'max',
        address:{
              street:'test street',
              country:"india"
              },
         email: '.com',
        deliverymethod: 'fast'
            }
        }
         axios.post('/orders.json',order)
        .then(
          respose => {
            this.setState({loading:false})
            console.log(respose)
            this.props.history.push('/');
        }
            

        )
        .catch(
        error => {
            this.setState({loading:false})
             console.log(error)
          }
        )
    }

    render() {
        let form = ( <form>
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="email" name="email" placeholder="Your Mail"/>
            <input type="text" name="street" placeholder="Street"/>
            <input type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>);
        if (this.state.loading){
            form = <Spinner />
        }

        console.log("ASACASCASCASCASCASCASCASC")
        return(
            <div className="ContactData">
                <h4>Enter you rcontact data</h4>
                {form}
            </div>
        )
    }
 }

 export default ContactData