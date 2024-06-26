import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './AddInventoryItem.scss';
import errorIcon from '../../assets/icons/error-24px.svg';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

const AddInventory = () => {
    const [formData, setFormData] = useState({
        itemName: '',
        description: '',
        category: '',
        status: '',
        quantity: 0,
        warehouseName: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        const addItem = {
            id: uuidv4(),
            ...formData,
            warehouseID: 'need to assign to assign a proper warehouseID', 
        };

        try {
            await axios.post("http://localhost:8088/inventories", addItem);
            console.log('Form submitted', addItem);
            setFormData({
                itemName: '',
                description: '',
                category: '',
                status: '',
                quantity: 0,
                warehouseName: '',
            });
        } catch (error) {
            console.error('Form submission error', error);
        }
    };

    return (
        <>
        <section className="addInventory">
            <div className="addInventory__heading">
                <img className="addInventory__heading-arrow" src={arrowBack} alt="Back arrow" />
                    <h1 className="addInventory__heading-title">Add New Inventory Item</h1>
            </div>
        <div className="addInventory__container">
        <form className="item-form" onSubmit={submitForm}>
            <div className="item-form__container">
                <div className="item-form__details">
                    <h2 className="item-form__title">Item Details</h2>
                    <label className="item-form__label">Item Name</label>
                    <input
                        className="item-form__input"
                        type="text"
                        placeholder="Item Name"
                        name="itemName"
                        required
                        value={formData.itemName}
                        onChange={handleChange}
                    />
                    {formData.itemName === "" && (
                        <div className="item-form__error">
                            <img className="item-form__error-icon" src={errorIcon} alt="Error icon"/>
                            <div className="item-form__error-text">This field is required</div>
                        </div>
                    )}

                    <label className="item-form__label">Description</label>
                    <textarea
                        className="item-form__description-input"
                        placeholder="Please enter a brief item description..."
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {formData.description === "" && (
                        <div className="item-form__error">
                            <img className="item-form__error-icon" src={errorIcon} alt="Error icon"/>
                            <div className="item-form__error-text">This field is required</div>
                        </div>
                    )}

                    <label className="item-form__label">Category</label>
                    <select
                        className="item-form__dropdown"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Please Select</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Gear">Gear</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Health">Health</option>
                    </select>
                    {formData.category === "" && (
                        <div className="item-form__error">
                            <img className="item-form__error-icon" src={errorIcon} alt="Error icon"/>
                            <div className="item-form__error-text">This field is required</div>
                        </div>
                    )}
                </div>

                <div className="item-form__line"></div>

                <div className="item-form__availability">
                    <h2 className="item-form__title">Item Availability</h2>
                    <label className="item-form__label">Status</label>
                    <div className="item-form__status">
                        <div className="item-form__status-container">
                            <input
                                className="item-form__status-container-option"
                                type="radio"
                                value="In Stock"
                                name="status"
                                checked={formData.status === "In Stock"}
                                onChange={handleChange}
                            />
                            <p className="item-form__status-container-text">In stock</p>
                        </div>
                        <div className="item-form__status-container">
                            <input
                                className="item-form__status-container-option"
                                type="radio"
                                value="Out of Stock"
                                name="status"
                                checked={formData.status === "Out of Stock"}
                                onChange={handleChange}
                            />
                            <p className="item-form__status-container-text">Out of stock</p>
                        </div>
                    </div>
                    {formData.status === "" && (
                        <div className="item-form__error">
                            <img className="item-form__error-icon" src={errorIcon} alt="Error icon"/>
                            <div className="item-form__error-text">This field is required</div>
                        </div>
                    )}
                    {formData.status === 'In Stock' && (
                        <>
                            <label className="item-form__label">Quantity</label>
                            <input
                                className="item-form__input"
                                type="number"
                                placeholder="0"
                                name="quantity"
                                required={formData.status === 'In Stock'}
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    <label className="item-form__label">Warehouse</label>
                    <select
                        className="item-form__dropdown"
                        name="warehouseName"
                        required
                        value={formData.warehouseName}
                        onChange={handleChange}
                    >
                        <option value="">Please Select</option>
                        <option type="text" value="Manhatten">Manhatten</option>
                        <option type="text" value="Washington">Washington</option>
                        <option type="text" value="Jersey">Jersey</option>
                        <option type="text" value="San Fran">San Fran</option>
                        <option type="text" value="Santa Monica">Santa Monica</option>
                        <option type="text" value="Seattle">Seattle</option>
                        <option type="text" value="Miami">Miami</option>
                    </select>
                    {formData.warehouseName === "" && (
                        <div className="item-form__error">
                            <img className="item-form__error-icon" src={errorIcon} alt="Error icon"/>
                            <div className="item-form__error-text">This field is required</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="item-form__button">
                <div className="item-form__button-container">
                    <button type="button" className="item-form__button-cancel">Cancel</button>
                    <button type="submit" className="item-form__button-add">+ Add Item</button>
                </div>
            </div>
        </form>
        </div>
            </section>
        </>
    );
};

export default AddInventory;
