import {  useEffect, useState } from "react";

const API_URL = "/api";

export default function Formulario () {

    const [data, setData] = useState("");
    const [exchangeRate, setExchangeRate] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [token, setToken] = useState(()=>{
        const savedToken = localStorage.getItem("session");
        return savedToken ? JSON.parse(savedToken) : null;
    });

    const getYesterdayDate = () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, "0");
        const day = String(yesterday.getDate()).padStart(2, "0");

        return `${year}${month}${day}`;
      }
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/tipodecambio_actual')
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch(err => console.error(err))
    },[]);

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
    

    const handleSetExchangeRate = async () => {
        if (!token) {
          setMessage("Debe iniciar sesión primero");
          return;
        }
        
        setLoading(true);
        setMessage("");

        const yesterdayDate = getYesterdayDate();
        
        try {
          const response = await fetch(`${API_URL}/SBOBobService_SetCurrencyRate`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization":`${token}`,

            },
            body: JSON.stringify({
              Currency: "USD",
              Rate: parseFloat(exchangeRate),
              RateDate: yesterdayDate,
            }),
          });
          
          if (!response.ok){
            if (response.status === 401) {
                localStorage.removeItem("session");
                setToken(null);
                throw new Error("Sesión expirada. Intentando iniciar sesión nuevamente...");
              }
              throw new Error("Error al actualizar el tipo de cambio");
          }           
          setMessage("Tipo de cambio actualizado exitosamente");
        } catch (error) {
          setMessage(error.message);
        } finally {
          setLoading(false);
        }
      };

      return (
        <>
            <div className="flex flex-col items-center mt-10">
            {token ? (
                <div>
                    <div>
                        {/* 20.3893 */}
                        <h2 className="text-xl font-bold mb-4">Actualizar Tipo de Cambio</h2>
                        <input type="text" 
                        placeholder="Ingrese el tipo de cambio"
                        value={exchangeRate}
                        onChange={(e) => setExchangeRate(e.target.value)}
                        className="mb-4 text-black" />
                    </div>

                    <div>
                        <input type="text" 
                        placeholder="Ingresa fecha"
                        value={getYesterdayDate()}
                        onChange={(e) => setExchangeRate(e.target.value)}
                        className="mb-4 text-black" />
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
