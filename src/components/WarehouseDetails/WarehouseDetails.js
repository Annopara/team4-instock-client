import React from 'react'
//set up backend warehouse ID request
import pencilIcon from '../../assets/icons/edit-24px-white.svg'
import arrow from '../../assets/icons/arrow_back-24px.svg'
import './WarehouseDetails.scss'
import { Link, useParams } from 'react-router-dom'
import warehouseData from "./WarehouseDetailsTestData.json"

const WarehouseDetails = () => {
    const urlParams = useParams(); 

    console.log(warehouseData); 

        const warehouseDetail = warehouseData.find((warehouse)=>{
            return warehouse.id == urlParams.warehouseID; 
        }); 

        console.log(warehouseDetail); 

  return (
    <section className="warehouseDetails">
        <div className="warehouseDetails__header">
            <div className="warehouseDetails__titleArrow">
                <Link to='/warehouses'>
                <img className="warehouseDetails__img" src={arrow}/>
                </Link>
                <h1 className="warehouseDetails__title">{warehouseDetail.warehouse_name}</h1>  
                {/* libbie will replace this with something to inject the correct warehouse info */}
            </div>

            <div className="warehouseDetails__edit">
                <Link to='/updatewarehousepage'> 
                {/* is this link^^^ going to the correct location? */}
                    <button className="warehouseDetails__editButton">
        
                        <img className="warehouseDetails__editButton--image" src={pencilIcon}/>
                        
                        <p className="warehouseDetails__editButton--text" >Edit</p>
                    </button>
                </Link>
            </div>
        </div>

        <div className="warehouseDetails__additionalInfo">
            <div className="warehouseDetails__address">
                <h4 className="warehouseDetails__address--header">warehouse Address:</h4>
                <p className="warehouseDetails__address--subheader" >{warehouseDetail.address}</p>
                <p className="warehouseDetails__address--subheader" >{warehouseDetail.city}</p>
                <p className="warehouseDetails__address--subheader" >{warehouseDetail.country}</p>


            </div>

            <div className="warehouseDetails__contacts">
                <div className="warehouseDetails__contactName">
                    <h4 className="warehouseDetails__contactName--header">Contact Name:</h4>
                    <p className="warehouseDetails__contactName--subheader" >{warehouseDetail.contact_name}</p>
                    <p className="warehouseDetails__contactName--subheader" >{warehouseDetail.contact_position}</p>
                </div>

                <div className="warehouseDetails__contactInfo" >
                    <h4 className="warehouseDetails__contactInfo--header">Contact Information:</h4>
                    <p className="warehouseDetails__contactInfo--subheader" >{warehouseDetail.contact_phone} </p>
                    <p className="warehouseDetails__contactInfo--subheader" >{warehouseDetail.contact_email}</p>

                </div>
            </div>

        </div>
    </section>
  )
}

export default WarehouseDetails
