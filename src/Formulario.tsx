import {  useEffect, useState } from "react";

const API_URL = "/api";
const URL = "/alianza";

export default function Formulario () {

    const [exchangeRate, setExchangeRate] = useState("");
    const [exchangeRateEUR, setExchangeRateEUR] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [token, setToken] = useState(()=>{
        const savedToken = localStorage.getItem("session");
        return savedToken ? JSON.parse(savedToken) : null;
    });

  // OBTENER FECHA DE DE AYER
    const getYesterdayDate = () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      const year = yesterday.getFullYear();
      const month = String(yesterday.getMonth() + 1).padStart(2, "0");
      const day = String(yesterday.getDate()).padStart(2, "0");

      return `${year}${month}${day}`;
    }

  // INICIO DE SESION Y OBTENCION DE TOKEN
    useEffect(() => {
    const autoLogin = async () => {
        try {
            const response = await fetch(`${API_URL}/Login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ CompanyDB:'SBO_Pruebas', UserName:'erp', Password:'Wiin2012' }),
            });

            if(!response.ok) throw new Error("Error en inicio de sesión");

            const data = await response.json();
            setToken(data.SessionId);
            localStorage.setItem("session", JSON.stringify(data.SessionId));
        } catch(error){
            console.error("Error de inicio de sesión automático:", error.message);
            setMessage("Error en inicio de sesión. Verifique las credenciales o la conexión con SAP.");
        }
      };

      if(!token) {
      autoLogin();
      }
    }, [token]);

  // OBTENER TIPO DE CAMBIO EN USD
    useEffect(()=>{
      const fetchExchangeRate = async () => {
        try {
          const response = await fetch(`${URL}/tipodecambio_actual`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Error al obtener el tipo de cambio");
          }
          const data = await response.json();
          setExchangeRate(data.tipo_de_cambio);
        }catch (error) {
          console.error("Error obteniendo el tipo de cambio:", error.message);
        }
      };
      fetchExchangeRate();
    }, []);

  // OBTENER TIPO DE CAMBIO EN EUR
    useEffect(()=>{
      const fetchExchangeRateEUR = async () => {
        try {
          const response = await fetch(`${URL}/tipodecambio_euro`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Error al obtener el tipo de cambio");
          }
          const data = await response.json();
          setExchangeRateEUR(data.tipo_de_cambio);
        }catch (error) {
          console.error("Error obteniendo el tipo de cambio:", error.message);
        }
      };
      fetchExchangeRateEUR();
    }, []);

    const handleSetExchangeRate = async () => {
        if (!token) {
          setMessage("Debe iniciar sesión primero");
          return;
        }
        
        setLoading(true);
        setMessage("");

        const exchangeRates = [
          { Currency: "USD", Rate: parseFloat(exchangeRate) },
          { Currency: "EUR", Rate: parseFloat(exchangeRateEUR) },
        ];

        const yesterdayDate = getYesterdayDate();
        
        try {
          for (const { Currency, Rate } of exchangeRates) {
            let response = await fetch(`${API_URL}/SBOBobService_SetCurrencyRate`, {
              method: "POST",
              headers: {
                    "Content-Type": "application/json",
                    "Authorization":`${token}`,
      
                  },
                  body: JSON.stringify({
                        Currency,
                        Rate,
                        RateDate: yesterdayDate,
                      }),
            });

            if(response.status === 401) {
              try {
                console.warn("Token expirado, intentando reautenticación...");

                const loginResponse = await fetch(`${API_URL}/Login`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ CompanyDB: "SBO_Pruebas", UserName: "erp", Password: "Wiin2012" }),
                });

                if (!loginResponse.ok) throw new Error("Error al reautenticar");

                const loginData = await loginResponse.json();
                localStorage.setItem("session", JSON.stringify(loginData.SessionId));
                setToken(loginData.SessionId); // Actualizar el token

                console.log("Reautenticación exitosa, reintentando actualización de tipo de cambio...");

                // Intentar nuevamente con el nuevo token
                response = await fetch(`${API_URL}/SBOBobService_SetCurrencyRate`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`,
                  },
                  body: JSON.stringify({
                    Currency,
                    Rate,
                    date: yesterdayDate,
                  }),
                });
                if (!response.ok) throw new Error(`Error al actualizar ${Currency} después de reautenticación`);
                } catch (loginError) {
                  console.error("Error en el intento de reautenticación:", loginError.message);
                  setMessage("Error en la reautenticación. Inicie sesión nuevamente.");
                  return;
                }
              }
              if (!response.ok) throw new Error(`Error al actualizar el tipo de cambio para ${Currency}`);

              console.log(`Tipo de cambio para ${Currency} actualizado exitosamente`);
            }
            setMessage("Tipo de cambio para USD y EUR actualizado exitosamente");
          }
          catch (error) {
            console.error("Error en la actualización del tipo de cambio:", error.message);
            setMessage(error.message);
        }finally {
          setLoading(false);
        }      
      };    

      return (
        <>
            <div className="flex flex-col items-center mt-10">
            {token ? (
                <div>
                  <h2 className="text-xl font-bold mb-4">Actualizar Tipo de Cambio</h2>
                    <div className="columns-2">   
                        <div> 
                          <span><p>DOLARES</p></span>
                          <input type="text" 
                          placeholder="Ingrese el tipo de cambio"
                          value={exchangeRate || ""}
                          onChange={(e) => setExchangeRate(e.target.value)}
                          className="mb-4 text-black" />
                        </div>

                        <div>
                          <span><p>EUROS</p></span>
                          <input type="text" 
                          placeholder="Ingrese el tipo de cambio"
                          value={exchangeRateEUR || ""}
                          onChange={(e) => setExchangeRateEUR(e.target.value)}
                          className="mb-4 text-black" />
                        </div>
                    </div>
                    <div className="columns-1 flex justify-center">
                        <div> 
                          <span><p>FECHA</p></span>
                          <input type="text" 
                          placeholder="Ingresa fecha"
                          value={getYesterdayDate()}
                          onChange={(e) => setExchangeRate(e.target.value)}
                          className="mb-4 text-black" />
                        </div>
                    </div>
                    
                    <div>
                        <button
                        onClick={handleSetExchangeRate}
                        disabled={loading}>
                        {loading ? "Actualizando..." : "Actualizar"}
                        </button>
                        {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
                    </div>
                </div>
            ):(
                <p className="text-gray-600">Iniciando sesión automáticamente...</p>
            )}
            </div>
        </>
      );
}
