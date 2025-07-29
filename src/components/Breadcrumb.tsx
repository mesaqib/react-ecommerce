import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  // console.log(pathname)

  const pathnames = pathname.split("/").filter((x) => x);
//   console.log(pathnames);

  let breadcrumPath = "";

  return (
    <>
      <div className="my-3">
        <Link to="/">Home</Link>
        {pathnames.map((name, index) => {
          breadcrumPath += `/${name}`;
          const isLast = index == pathnames.length-1;
          return (
            isLast ? <span key={index} className="text-12">/ {name}</span> : <Link to={breadcrumPath} key={index}><span className="text-12">/ {name}</span></Link>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumb;
