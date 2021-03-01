import React from "react";
import Search from "./Search";

function Header({onSearch, onSort, sorted, baseURL}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        onSearch={onSearch}
        onSort={onSort}
        sorted={sorted}
        baseURL={baseURL}
      />
    </header>
  );
}

export default Header;
