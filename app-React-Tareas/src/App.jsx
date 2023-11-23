import { useState, useEffect } from "react";
import Form from "./componentes/Form";
import Header from "./componentes/Header";
import ListaTareas from "./componentes/TaskList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) ?? [];

      setTareas(tareasLocalStorage);
    };

    obtenerTareasLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const EliminarTarea = (id) => {
    const actualizarTarea = tareas.filter((tarea) => tarea.id !== id);
    setTareas(actualizarTarea);
  };

  return (
    <div className="contanier mx-auto  mt-20">
      <Header />
      <div className="mt-12 justify-center md:flex">
        <Form
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <ListaTareas
          tareas={tareas}
          setTarea={setTarea}
          EliminarTarea={EliminarTarea}
        />
      </div>
    </div>
  );
}

export default App;
