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
                {/* ^^^^ please replace this with something to inject code */}
            </div>

            {/* is there an edit page this button links to? */}
            <div className="warehouseDetails__edit">
                <button className="warehouseDetails__editButton">
    
                    <img className="warehouseDetails__editButton--image" src={pencilIcon}/>
                    
                    <p1 className="warehouseDetails__editButton--text" >Edit</p1>
                </button>
            </div>
        </div>

        <div className="warehouseDetails__additionalInfo">
            <div className="warehouseDetails__address">
                <h4 className="warehouseDetails__address--header">warehouse Address:</h4>
                <p1 className="warehouseDetails__address--subheader" >300 pearl street SW, Washington USA</p1>
            </div>

            <div className="warehouseDetails__contacts">
                <div className="warehouseDetails__contactName">
                    <h4 className="warehouseDetails__contactName--header">Contact Name:</h4>
                    <p1 className="warehouseDetails__contactName--subheader" >Graeme Lyon Warehouse Manager</p1>
                </div>

                <div className="warehouseDetails__contactInfo" >
                    <h4 className="warehouseDetails__contactInfo--header">Contact Information:</h4>
                    <p1 className="warehouseDetails__contactInfo--subheader" >+1asdfasdfadf </p1>
                </div>
            </div>

        </div>
    </section>
  )
}

export default WarehouseDetails
