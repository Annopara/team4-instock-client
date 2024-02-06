import './SearchHeader.scss'
import { useNavigate } from "react-router-dom";

export const SearchHeader = ({pageTitle, btnText, navToTitle}) => {

    const navigate = useNavigate();

    return (
    <div className="search">
      <h1 className="search__pageTitle">{pageTitle}</h1>
      <div className="search__container">
        <input className="search__input" type="text" placeholder="Search..." />
        <button onClick={() => navigate(navToTitle)} className="search__button">{btnText}</button>
      </div>

    </div>
    )
}