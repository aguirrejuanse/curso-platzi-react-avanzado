import React from "react";
import { Helmet } from "react-helmet";

import { Children, Subtitle, Title } from "./styles";

const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <Children>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Children>
  </>
);

export default Layout;
