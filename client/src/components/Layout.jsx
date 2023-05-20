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
        }}
      >
        {props.children}
      </main>
    </Fragment>
  );
}
export default Layout;
