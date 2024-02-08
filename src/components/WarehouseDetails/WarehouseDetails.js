import React from 'react'
//set up backend warehouse ID request
import pencilIcon from '../../assets/icons/edit-24px-white.svg'
import arrow from '../../assets/icons/arrow_back-24px.svg'
import './WarehouseDetails.scss'
import { Link } from 'react-router-dom'


const WarehouseDetails = () => {
  return (
    <section className="warehouseDetails">
        <div className="warehouseDetails__header">
            <div className="warehouseDetails__titleArrow">
                <Link to='/warehouses'>
                <img className="warehouseDetails__img" src={arrow}/>
                </Link>
                <h1 className="warehouseDetails__title">Washington</h1> 
                {/* <img src={pencilIcon}/> */}
 
                {/* please replace this with something to inject code */}
            </div>
            <div className="warehouseDetails__edit">
                <button className="warehouseDetails__editButton">
    
                    <img className="warehouseDetails__editButton--image" src={pencilIcon}/>
                    
                    <p1 className="warehouseDetails__editButton--text" >Edit</p1>
                </button>
            </div>
        </div>

        <div className="warehouseDetails__additionalInfo">
            <div className="warehouseDetails__address">
                <h3 className="warehouseDetails__address--header">warehouse Address:</h3>
                <p1 className="warehouseDetails__address--subheader" >300 pearl street SW, Washington USA</p1>
            </div>

            <div className="warehouseDetails__contacts">
                <div className="warehouseDetails__contactName">
                    <h3 className="warehouseDetails__contactName--header">Contact Name:</h3>
                    <p1 className="warehouseDetails__contactName--subheader" >Graeme Lyon Warehouse Manager</p1>
                </div>

                <div className="warehouseDetails__contactInfo" >
                    <h3 className="warehouseDetails__contactInfo--header">Contact Information:</h3>
                    <p1 className="warehouseDetails__contactInfo--subheader" >+1asdfasdfadf </p1>
                </div>
            </div>

        </div>
    </section>
  )
}

export default WarehouseDetails
