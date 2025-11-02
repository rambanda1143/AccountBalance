import { Component  } from "react";

import './index.css'

class TopSession extends Component{
   
    render(){
         const {balance}=this.props
    return(
            <div className="top-main-container">
                <div className="inner-top-container">
                    <p className="capital balance-text">S</p>
                      <p className="balance-text">Sarah Williams</p>

                </div>
                <div className="top-inner-bottom-container">
                    <p className="balance-text">Your Balance</p>
                    <div className="top-bottom-balance">
                        <h4 className="balance">{balance}</h4>
                        <p className="balance-text rs">In Rupees</p>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default TopSession