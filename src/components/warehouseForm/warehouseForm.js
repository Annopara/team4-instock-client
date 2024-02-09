import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./WarehouseForm.scss";

const WarehouseForm = ({
  currentFormInfo,
  onSubmit,
  submitBtnText,
  isAllWarehouseInfoValid,
}) => {
  const navigate = useNavigate();
  //initial state
  const [formInfo, setFormInfo] = useState(currentFormInfo);

  // Function to handle input changes and update state
  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Update the warehouse input state
    setFormInfo({ ...formInfo, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    // check validity is truthy
    if (isAllWarehouseInfoValid(formInfo)) {
      await onSubmit(formInfo);
    } else {
      alert("Failed to add warehouse. Please fill all fields correctly.");
    }
  };

  const CancelBtn = () => {
    navigate("/warehouses");
  };

  return (
    <form id='form' onSubmit={formSubmit} className='newWarehouse__form'>
      <section className='newWarehouse__all-forms'>
        <fieldset className='newWarehouse__fieldset newWarehouse__fieldset--divider'>
          <h3 className='newWarehouse__h3'>Warehouse Details</h3>
          {/* Warehouse Name */}
          <section className='newWarehouse__section'>
            <label htmlFor='wName' className='newWarehouse__label'>
              Warehouse Name
            </label>
            <input
              type='text'
              id='wName'
              name='warehouse_name'
              placeholder='Warehouse Name'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.warehouse_name}
            />
          </section>

          {/* Street Address */}
          <section className='newWarehouse__section'>
            <label htmlFor='sAddress' className='newWarehouse__label'>
              Street Address
            </label>
            <input
              type='text'
              id='sAddress'
              name='address'
              placeholder='Street Address'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.address}
            />
          </section>

          {/* City */}
          <section className='newWarehouse__section'>
            <label htmlFor='city' className='newWarehouse__label'>
              City
            </label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='City'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.city}
            />
          </section>

          {/* Country */}
          <section className='newWarehouse__section'>
            <label htmlFor='country' className='newWarehouse__label'>
              Country
            </label>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='Country'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.country}
            />
          </section>
        </fieldset>

        {/*   SECOND FIELDSET */}

        <fieldset className='newWarehouse__fieldset'>
          <h3 className='newWarehouse__h3'>Contact Details</h3>
          {/* Contact Name */}
          <section className='newWarehouse__section'>
            <label htmlFor='cName' className='newWarehouse__label'>
              Contact Name
            </label>
            <input
              type='text'
              id='cName'
              name='contact_name'
              placeholder='Contact Name'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.contact_name}
            />
          </section>

          {/* Position */}
          <section className='newWarehouse__section'>
            <label htmlFor='position' className='newWarehouse__label'>
              Position
            </label>
            <input
              type='text'
              id='position'
              name='contact_position'
              placeholder='Position'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.contact_position}
            />
          </section>

          {/* Phone Number */}
          <section className='newWarehouse__section'>
            <label htmlFor='pNumber' className='newWarehouse__label'>
              Phone Number
            </label>
            <input
              type='tel'
              id='pNumber'
              name='contact_phone'
              placeholder='Phone Number'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.contact_phone}
            />
          </section>

          {/* Email */}
          <section className='newWarehouse__section'>
            <label htmlFor='email' className='newWarehouse__label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='contact_email'
              placeholder='Email'
              className='newWarehouse__input'
              onChange={inputChange}
              value={formInfo.contact_email}
            />
          </section>
        </fieldset>
      </section>
      <section className='newWarehouse__btn'>
        <button
          type='button'
          className='newWarehouse__cancel btn'
          onClick={CancelBtn}
        >
          Cancel
        </button>
        <button type='submit' className='newWarehouse__submit btn'>
          {submitBtnText}
        </button>
      </section>
    </form>
  );
};

export default WarehouseForm;
