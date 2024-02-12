import './SearchHeader.scss'
import { useNavigate } from "react-router-dom";

export const SearchHeader = ({title, btnText, navToTitle}) => {

    const navigate = useNavigate();

    return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <div className="page-header__search-container">
        <input className="page-header__search-input" type="text" placeholder="Search..." />
        <button onClick={() => navigate(navToTitle)} className="page-header__search-button">{btnText}</button>
      </div>

    </div>
    )
}