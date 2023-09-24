import React from "react";

type Props = {
  children: any;
};

const Layout = (props: Props) => {
  return <div className="w-11/12 py-2">
    
    {props.children}</div>;
};

export default Layout;
