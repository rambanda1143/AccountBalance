import { Component } from "react";
import './index.css'
import TopSession from "../Topcontainer";
import BottomSession from "../BottomContainer";
class Home extends Component{
    state={Balance:2000}

    handlerDeduction=(amount)=>{
    
        this.setState((prevState)=>{

            if(prevState.Balance<=0){
                alert("No Balance left to Withdraw")
                return null

            }else if (amount>prevState.Balance){
                alert("Insufficient Balance")
                return null;
            }
           
              return { Balance:prevState.Balance-amount}

        }
           
        )
    
    }

    AddingAmount=(value)=>{
        this.setState((prevState)=>({
            Balance:prevState.Balance+value
        }))
    }
    render(){
        const {Balance}=this.state
        return(
            <div className="main-container">
               <div className="container">
                  <TopSession balance={Balance}/>
                  <BottomSession onDeduct={this.handlerDeduction} onAdd={this.AddingAmount}/>

               </div>
            
            </div>
        )
    }

}

export default Home