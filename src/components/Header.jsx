import {Link} from "react-router-dom"

import Config from "../../config.json"
import centilLawLogo from "../assets/centil-law-logo.png"

import "./Header.scss"

const Header = () => {
  return (
    <header id="header">
      <h1>{Config.title}</h1>
      {(Config.bookmarks ?? []).map((noteIndex) => (
        <Link
          key={noteIndex}
          className="noteLink"
          to={noteIndex === "Home" ? "/" : `/${encodeURIComponent(noteIndex)}`}
        >
          {noteIndex}
        </Link>
      ))}
      <Link className="noteLink" to="/tags">
        Tags
      </Link>
      <img className="siteLogo" src={centilLawLogo} alt="Centil Law" />
    </header>
  )
}

export default Header
