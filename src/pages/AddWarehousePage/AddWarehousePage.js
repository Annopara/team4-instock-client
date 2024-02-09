import "./AddWarehousePage.scss";
import {
  isPhoneNumberValid,
  isEmailValid,
} from "../../utils/validation-utils/validation-utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WarehouseForm from "../../components/warehouseForm/warehouseForm";
// remember to import as {} since it's not the default export

const { REACT_APP_API_URL } = process.env;
console.log(REACT_APP_API_URL);

export const AddWarehousePage = () => {
  const navigate = useNavigate();

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
        // Send POST request to add warehouse
        const response = await axios.post(
          `${REACT_APP_API_URL}/warehouse`,
          formInfo
        );

        if (response.status === 201) {
          alert("Warehouse added successfully.");
          // Navigate to home page upon successful warehouse addition
          navigate("/");
        }
      } catch (error) {
        console.error("Error adding warehouse:", error.message);
      }
    } else {
      alert("Request Denied, Please fill all fields correctly.");
    }
  };

  return (
    <section>
      <h2 className='newWarehouse__h2'>+ Add New Warehouse</h2>
      <WarehouseForm
        currentFormInfo={{
          warehouse_name: "",
          address: "",
          city: "",
          country: "",
          contact_name: "",
          contact_position: "",
          contact_phone: "",
          contact_email: "",
        }}
        onSubmit={formSubmit}
        submitBtnText='+ Add New Warehouse'
        isAllWarehouseInfoValid={isAllWarehouseInfoValid}
      />
    </section>
  );
};
