// const API = 'https://localhost:50000/b1s/v1/SBOBobService_SetCurrencyRate'

// export interface tCambio{
//     fecha?: string,
//     tipo_de_cambio: string,
// }

// export const createCambioRequest = (cambio: tCambio) => {
//     fetch(`${API}`,{
//         method: "POST",
//         body: JSON.stringify(cambio),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then((response) => response.json())
//     .then((result) => {
//         if(result.message === "SUCCESS"){
//           alert("You are logged in.");
//           this.goToMain();
//          } else {
//              alert("Please check your login information.");
//          }
//       });
// }