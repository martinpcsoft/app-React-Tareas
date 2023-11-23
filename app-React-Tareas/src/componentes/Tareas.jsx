const Tareas = ({ tarea, setTarea, EliminarTarea }) => {
    const { titulo, fecha, descripcion, id } = tarea; //Esto es para no tener que llamarlo de la forma {tarea.titulo} {tarea.fecha} {tarea.descripcion}
  
    const handleEliminar =() => {
      const respuesta = confirm('¿Desea eliminar está tarea?');
  
      if(respuesta){
          EliminarTarea(id)
      }
    }
  
    return (
      <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Titulo: <span className="font-normal normal-case">{titulo}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha: <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Descripción:{" "}
          <span className="font-normal normal-case">{descripcion}</span>
        </p>
        <div className="flex justify-between">
          <button
            className="bg-green-600 hover:bg-green-800 mt-4 py-2 px-10 text-white font-bold rounded-md"
            type="button"
            onClick={()=> setTarea(tarea)}
          >
            Actualizar
          </button>
          <button
            className="bg-red-600 hover:bg-red-800 mt-4 py-2 px-10 text-white font-bold rounded-md"
            type="button"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  };
  
  export default Tareas;