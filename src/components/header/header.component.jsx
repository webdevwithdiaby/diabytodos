import React from "react";
import { ReactComponent as SunLogo } from "../../assets/icon-sun.svg";
import FormInput from "../form-input/form-input.component";

import bgImage from "../../assets/bg-mobile-light.jpg";

const Header = () => {
  const headerStyles = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <header className="header" style={headerStyles}>
      <div className="wrapper">
        <div className="header__container">
          <h1 className="header__brand"> Diaby</h1>
          <SunLogo className="toggle-icon" />
        </div>
        <FormInput />
      </div>
    </header>
  );
};

export default Header;
