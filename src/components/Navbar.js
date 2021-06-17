import React, { useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header-item">
        <Link to="/">
          <strong>Awesome Blog</strong>
        </Link>
      </div>
      <div className="header-item">
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            placeholder="search posts"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button>Go</button>
        </form>
      </div>
      <div className="header-item">
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Theme:light' : 'Theme:dark'}
        </button>
      </div>
    </div>
  );
}
