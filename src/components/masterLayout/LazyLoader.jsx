// const LazyLoader = () => {
//   const loaderStyles = {
//     loadingOverlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(255, 255, 255, 0.2)",
//       zIndex: 500000,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     lineProgress: {
//       position: "relative",
//       width: "100%",
//     },
//     indeterminate: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       height: "3px",
//       backgroundColor: "#cb0c9f",
//       animation:
//         "indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
//     },
//     indeterminateShort: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       height: "3px",
//       backgroundColor: "#cb0c9f",
//       animation:
//         "indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
//       animationDelay: "1.15s",
//     },
//   };

//   return (
//     <>
//       <style>
//         {`
//           @keyframes indeterminate {
//             0% {
//               left: -35%;
//               right: 100%;
//             }
//             60% {
//               left: 100%;
//               right: -90%;
//             }
//             100% {
//               left: 100%;
//               right: -90%;
//             }
//           }

//           @keyframes indeterminate-short {
//             0% {
//               left: -200%;
//               right: 100%;
//             }
//             60% {
//               left: 107%;
//               right: -8%;
//             }
//             100% {
//               left: 107%;
//               right: -8%;
//             }
//           }
//         `}
//       </style>

//       <div style={loaderStyles.loadingOverlay} className="d-none">
//         <div style={loaderStyles.lineProgress}>
//           <div style={loaderStyles.indeterminate}></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LazyLoader;

const LazyLoader = () => {
  return (
    <>
      <div className="LoadingOverlay">
        <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    </>
  );
};

export default LazyLoader;
