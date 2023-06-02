import { Fragment } from "react";
import Navbar from "./Navbar";
function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main
        style={{
          width: "100vw",
          paddingTop: "97px",
          zIndex: "-100",
          position: "relative",
        }}
      >
        {props.children}
      </main>
    </Fragment>
  );
}
export default Layout;
