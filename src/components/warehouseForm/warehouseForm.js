import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./warehouseForm.scss";

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
    <form id='form' onSubmit={formSubmit} className='form'>
      <section className='form__all-forms'>
        <fieldset className='form__fieldset form__fieldset--divider'>
          <h2 className='form__h2'>Warehouse Details</h2>
          {/* Warehouse Name */}
          <section className='form__section'>
            <label htmlFor='wName' className='form__label'>
              Warehouse Name
            </label>
            <input
              type='text'
              id='wName'
              name='warehouse_name'
              placeholder='Warehouse Name'
              className='form__input'
              onChange={inputChange}
              value={formInfo.warehouse_name}
            />
          </section>

          {/* Street Address */}
          <section className='form__section'>
            <label htmlFor='sAddress' className='form__label'>
              Street Address
            </label>
            <input
              type='text'
              id='sAddress'
              name='address'
              placeholder='Street Address'
              className='form__input'
              onChange={inputChange}
              value={formInfo.address}
            />
          </section>

          {/* City */}
          <section className='form__section'>
            <label htmlFor='city' className='form__label'>
              City
            </label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='City'
              className='form__input'
              onChange={inputChange}
              value={formInfo.city}
            />
          </section>

          {/* Country */}
          <section className='form__section'>
            <label htmlFor='country' className='form__label'>
              Country
            </label>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='Country'
              className='form__input'
              onChange={inputChange}
              value={formInfo.country}
            />
          </section>
        </fieldset>

        {/*   SECOND FIELDSET */}

        <fieldset className='form__fieldset'>
          <h2 className='form__h2'>Contact Details</h2>
          {/* Contact Name */}
          <section className='form__section'>
            <label htmlFor='cName' className='form__label'>
              Contact Name
            </label>
            <input
              type='text'
              id='cName'
              name='contact_name'
              placeholder='Contact Name'
              className='form__input'
              onChange={inputChange}
              value={formInfo.contact_name}
            />
          </section>

          {/* Position */}
          <section className='form__section'>
            <label htmlFor='position' className='form__label'>
              Position
            </label>
            <input
              type='text'
              id='position'
              name='contact_position'
              placeholder='Position'
              className='form__input'
              onChange={inputChange}
              value={formInfo.contact_position}
            />
          </section>

          {/* Phone Number */}
          <section className='form__section'>
            <label htmlFor='pNumber' className='form__label'>
              Phone Number
            </label>
            <input
              type='tel'
              id='pNumber'
              name='contact_phone'
              placeholder='Phone Number'
              className='form__input'
              onChange={inputChange}
              value={formInfo.contact_phone}
            />
          </section>

          {/* Email */}
          <section className='form__section'>
            <label htmlFor='email' className='form__label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='contact_email'
              placeholder='Email'
              className='form__input'
              onChange={inputChange}
              value={formInfo.contact_email}
            />
          </section>
        </fieldset>
      </section>
      <section className='form__btn'>
        <button type='button' className='form__cancel btn' onClick={CancelBtn}>
          Cancel
        </button>
        <button type='submit' className='form__submit btn'>
          {submitBtnText}
        </button>
      </section>
    </form>
  );
};

export default WarehouseForm;
