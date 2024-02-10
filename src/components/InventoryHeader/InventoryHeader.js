import '../InventoryHeader/InventoryHeader.scss'
import SortIcon from "../../assets/icons/sort-24px.svg";

export const InventoryHeader = () =>{

    return(
        <div className="headings">
      <div className="heading__group">
        <p className="heading__title">inventory Item</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon" />
      </div>

      <div className="heading__group">
        <p className="heading__title">category</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>

      <div className="heading__group">
        <p className="heading__title">status</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>

      <div className="heading__group">
        <p className="heading__title">qty</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>

      <div className="heading__group">
        <p className="heading__title">warehouse</p>
        <img src={SortIcon} alt="sort icon" className="heading__icon"/>
      </div>

      <p className="heading__title--actions">ACTIONS</p>
    </div>


    ); 
}; 