import { Fragment } from "react";
import Navbar from "./Navbar";
// import Styles from '../styles/layout.module.scss';
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
