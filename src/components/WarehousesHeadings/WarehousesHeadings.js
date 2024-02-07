import SortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehousesHeadings.scss";

export const WarehousesHeadings = () => {

    const sortIcon = <img src={SortIcon} alt="sort icon" className="warehouse-headings__icon" />
  return (
    <div className="headings">
      <div className="heading__group">
        <p className="heading__title">WAREHOUSE</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon" />
      </div>
      <div className="heading__group">
        <p className="heading__title">ADDRESS</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>
      <div className="heading__group">
        <p className="heading__title">CONTACT NAME</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>
      <div className="heading__group">
        <p className="heading__title">CONTACT INFORMATION</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>
      <p className="heading__title--actions">ACTIONS</p>
    </div>
  )
}
