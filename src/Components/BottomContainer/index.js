import { Component } from "react";

import './index.css'

class BottomSession extends Component{
   
    render(){
        const {onDeduct,onAdd}=this.props
        return(
            <div className="bottom-main-container">
                <div className="balance-desk">
                    <h2 className="withdraw-title">Withdraw</h2>
                    <p className="balance-text choose">CHOOSE SUM (IN RUPEES)</p>
                </div>
                <div className="top-wrap-button">
                    <div className="wrap-button">
                     <div>
                        <button className="btn" onClick={()=>onDeduct(50)}>50</button>
                        </div>
                        <div>
                            <button className="btn" onClick={()=>onDeduct(100)}>100</button>
                        </div>

                    </div>
                   <div className="wrap-button">
                        <div>
                            <button className="btn" onClick={()=>onDeduct(200)}>200</button>
                        </div>
                        <div>
                            <button className="btn" onClick={()=>onDeduct(500)}>500</button>
                        </div>

                   </div>
                   </div>
                   <div className="adding-container">
                        <p className="add-text">ADD Money</p>
                          <button className="btn"  onClick={()=>onAdd(500)}>500</button>
                

                   </div>
                   
            </div>
        )
    }

}
export default BottomSession