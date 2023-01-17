import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const allLinks = links.map((link, index) => {
    return <li key={index}>{link}</li>
  })
  return <nav>{allLinks }</nav>;
}

export default NavBar;
