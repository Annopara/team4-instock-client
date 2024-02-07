import './SearchHeader.scss'
import { useNavigate } from "react-router-dom";

export const SearchHeader = ({title, btnText, navToTitle}) => {

    const navigate = useNavigate();

    return (
    <div className="list-header">
      <h1 className="list-header__title">{title}</h1>
      <div className="list-header__search-container">
        <input className="list-header__search-input" type="text" placeholder="Search..." />
        <button onClick={() => navigate(navToTitle)} className="list-header__search-button">{btnText}</button>
      </div>

    </div>
    )
}