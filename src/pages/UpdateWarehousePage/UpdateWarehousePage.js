import "../AddWarehousePage/AddWarehousePage.scss";
// remember to import as {} since it's not the default export
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import WarehouseForm from "../../components/warehouseForm/warehouseForm";
import {
  isPhoneNumberValid,
  isEmailValid,
} from "../../utils/validation-utils/validation-utils";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const REACT_APP_API_URL = process.env;

export const UpdateWarehousePage = () => {
  const { id } = useParams(); // Get the warehouse ID from the URL params
  const navigate = useNavigate();
  const [warehouseInfo, setWarehouseInfo] = useState({});

  useEffect(() => {
    // Fetch warehouse information by ID when component mounts
    const fetchWarehouseInfo = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_API_URL}/api/warehouses/${id}`
        );
        setWarehouseInfo(response.data);
      } catch (error) {
        console.error("Error fetching warehouse information:", error.message);
      }
    };

    fetchWarehouseInfo();
  }, [id]);

  const isAllWarehouseInfoValid = (formInfo) => {
    // destructure initial state
    const {
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_position,
      contact_phone,
      contact_email,
    } = formInfo;

    // Check if all fields are filled
    if (
      !warehouse_name ||
      !address ||
      !city ||
      !country ||
      !contact_name ||
      !contact_position ||
      !contact_phone ||
      !contact_email
    ) {
      return false;
    }

    // Perform additional validation for phone number and email
    if (!isPhoneNumberValid(contact_phone) || !isEmailValid(contact_email)) {
      return false;
    }

    return true;
  };

  const formSubmit = async (formInfo) => {
    // Handle form submission logic here
    if (isAllWarehouseInfoValid(formInfo)) {
      try {
        const response = await axios.put(
          `${REACT_APP_API_URL}/warehouse/${id}`,
          formInfo
        );
        if (response.status === 200) {
          alert("Warehouse updated successfully.");
          navigate("/");
        }
      } catch (error) {
        console.error("Error updating warehouse:", error.message);
      }
    } else {
      alert("Request Denied, Please fill all fields correctly.");
    }
  };

  return (
    <section>
      {/* PageHeader */}
      <section className='newWarehouse__section'>
        <Link to='/warehouses'>
          <img src={arrowIcon} alt='backarrow' className='newWarehouse__icon' />
        </Link>

        <h1 className='newWarehouse__h1'> Edit Warehouse</h1>
      </section>
      <WarehouseForm
        currentFormInfo={{
          warehouse_name: warehouseInfo.warehouse_name,
          address: warehouseInfo.address,
          city: warehouseInfo.city,
          country: warehouseInfo.country,
          contact_name: warehouseInfo.contact_name,
          contact_position: warehouseInfo.contact_phone,
          contact_phone: warehouseInfo.contact_phone,
          contact_email: warehouseInfo.contact_email,
        }}
        onSubmit={formSubmit}
        submitBtnText='Save'
        isAllWarehouseInfoValid={isAllWarehouseInfoValid}
      />
    </section>
  );
};
