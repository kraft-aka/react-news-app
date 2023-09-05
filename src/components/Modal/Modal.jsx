import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalEL = document.getElementById("overlay");

export const Modal = (props) => {
  console.log(props.newsItems)
  // return (
  //   <>
  //     {ReactDOM.createPortal(<Backdrop onClose={props.onClose} onShow={props.onShow}/>, portalEL)}
  //     {ReactDOM.createPortal(
  //       <ModalOverlay>
  //         <h2>{props.news.title}</h2>
  //         <h6>{props.news.author}</h6>
  //         <p>{props.news.content}</p>
  //       </ModalOverlay>,
  //       portalEL
  //     )}
  //   </>
  // );
  return (
    <div className={classes.backdrop} onClose={props.onClose} >
      <div className={classes.modal}>
        <h2>{props.title}</h2>
        <h6>{props.author}</h6>
        <p>{props.content}</p>
        <button type="button" onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};
