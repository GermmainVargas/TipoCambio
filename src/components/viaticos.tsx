function Viaticos() {
  return (
    <>
    {/* <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
        <div className="bg-gray-950 text-center text-3xl p-4 w-2/5">
            <div className="font-semibold justify-center">
                <p>Bienvenido/(a) - Portal Grupo FG</p>
            </div>
        </div>
    </div> */}
    <div>
      <body className="bg-white py-10">
        
        <section className="w-full max-w-md mx-auto bg-white shadow-2xl md:flex md:rounded-2xl md:max-w-7xl">

          <article className="bg-gradient-to-b from-orange-600 to-gray-700 p-10 text-gray-900 md:rounded-md
          text-center md:w-1/2 md:grid md:content-center">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src="https://capacitacion.fgelectrical.com/pluginfile.php/1/theme_moove/logo/1700069296/Logo%20Grupo%20FG.png"
                className="mx-auto h-20 w-auto"
              />
              <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
              Bienvenido/(a) - Portal Grupo FG
              </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <p className="font-bold text-2xl text-center content-center mb-4 mt-5">Solicitud de Viaticos</p>
            </div>
          </article>
          
          <article>
      
            <div className="mt-2 p-2 ">
              <h4 className="font-bold text-2xl text-gray-800">Datos del Colaborador</h4>
            </div>
            
            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Sociedad: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
          
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Sucursal: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Área: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
          
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Núm de tarjeta: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
              <label className="font-semibold font-sans">Fecha de salida: </label>
              <input className="" type="date"/>
              </div>

              <div className="p-4">
                <label className="font-semibold font-sans">Fecha de regreso: </label>
                <input className="" type="date" />
              </div>
            </div>

            <div className="columns-1">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Motivo del viaje: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Tranporte: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
          
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Casetas: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Hospedaje: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
          
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Aliementos: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Fletes: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
          
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Herramientas & Equipos: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Envios & Mensajería: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
          
              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Diversos: </label>
                <input className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" />
              </div>
            </div>

            <div className="columns-2">
              <div className="p-4">
                <label className="font-semibold font-sans">Fecha de salida: </label>
                <input className="" type="date"/>
              </div>

              <div className="p-4">
                <label className="font-semibold font-sans" htmlFor="">Cantidad total: </label>
                <input className="outline block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" readOnly/>
              </div>
            </div>

            <div className="p-4">
              <span><p className="font-semibold font-sans">Menciona 5 objetivos del viaje</p></span>
              <textarea className="outline rounded-md w-full mt-2" name="" id=""></textarea>
            </div>

            <div className="p-4 flex justify-center">
              <button className="rounded-md p-2 text-white font-sans font-bold bg-green-600" type="button">Enviar</button>
            </div>

          </article>
        </section>

      </body>
    </div>

    </>
  )
}

export default Viaticos