import "./WarehouseDataList.scss";
import SortIcon from "../../assets/icons/sort-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronRightIcon from "../../assets/icons/chevron_right-24px.svg";

export const WarehouseDataList = ({ warehouseData }) => {
  const titles = [
    "WAREHOUSE",
    "ADDRESS",
    "CONTACT NAME",
    "CONTACT INFORMATION",
    "ACTIONS",
  ];

  const sortIcon = (
    <img
      className="warehouse-data-list__title-sort"
      src={SortIcon}
      alt="sort icon"
    />
  );

  return (
    <section className="warehouse-datalist">
      <div className="warehouse-datalist__titles-container">
            <div className="warehouse-datalist__title-group">
              <h3 className="warehouse-datalist__title">WAREHOUSE</h3>
              {sortIcon}
            </div>
            <div className="warehouse-datalist__title-group">
              <h3 className="warehouse-datalist__title">ADDRESS</h3>
              {sortIcon}
            </div>
            <div className="warehouse-datalist__title-group">
              <h3 className="warehouse-datalist__title">WAREHOUSE</h3>
              {sortIcon}
            </div>
            <div className="warehouse-datalist__title-group">
              <h3 className="warehouse-datalist__title">WAREHOUSE</h3>
              {sortIcon}
            </div>
            <div className="warehouse-datalist__title-group">
              <h3 className="warehouse-datalist__title">WAREHOUSE</h3>
              {sortIcon}
            </div>
      </div>
      
    </section>
  );
};

//       <div className="warehouse-data-list__header">
//         <p className="warehouse-data-list__header-list-items">ADDRESS</p>
//         <img
//           className="warehouse-data-list__header-sort"
//           src={SortIcon}
//           alt="sort icon"
//         />
//       </div>
//       <div className="warehouse-data-list__header">
//         <p className="warehouse-data-list__header-list-items">
//           CONTACT NAME
//         </p>
//         <img
//           className="warehouse-data-list__header-sort"
//           src={SortIcon}
//           alt="sort icon"
//         />
//       </div>
//       <div className="warehouse-data-list__header">
//         <p className="warehouse-data-list__header-list-items">
//           CONTACT INFORMATION
//         </p>
//         <img
//           className="warehouse-data-list__header-sort"
//           src={SortIcon}
//           alt="sort icon"
//         />
//       </div>
//       <div className="warehouse-data-list__header">
//         <p className="warehouse-data-list__header-list-items">ACTIONS</p>
//       </div>
//     </li>

//         </ul>
// </section>
