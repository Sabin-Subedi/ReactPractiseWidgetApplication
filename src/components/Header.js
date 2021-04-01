import React from "react";
import Link from "./Link";

function Header() {
  return (
    <div className="ui secondary pointing menu container">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        SearchList
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
    </div>
  );
}

export default Header;
