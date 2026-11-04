import Plato from "./assets/components/Plato.jsx";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <h1>Cosas que tienes que probar antes irte con San Pedro:</h1>

        <Plato
          imagen="pan-chicharron.jpg"
          nombre="Pan con chicharrón"
          tipo="Desayuno"
          descripcion="Desayuno tradicional peruano que consiste en un pan crujiente relleno de chicharrón de cerdo, acompañado de rodajas de boniato frito y salsa criolla de cebolla roja, limón y hierbabuena. Es muy popular en Perú, especialmente durante los desayunos de fin de semana."
        />
        <Plato
          imagen="ceviche.webp"
          nombre="Ceviche"
          tipo="Comida"
          descripcion="Plato tradicional preparado con pescado fresco marinado en zumo de limón, acompañado de cebolla roja, cilantro, maíz y boniato. Destaca por su sabor cítrico y refrescante."
        />
        <Plato
          imagen="lomo-saltado.jpg"
          nombre="Lomo saltado"
          tipo="Comida"
          descripcion="Receta elaborada con tiras de carne de ternera salteadas con cebolla, tomate, salsa de soja y especias. Se sirve normalmente con patatas fritas y arroz blanco."
        />
        <Plato
          imagen="suspiro-limena.webp"
          nombre="Suspiro a la limeña"
          tipo="Postre"
          descripcion="Postre típico de Lima compuesto por una base dulce y cremosa de leche condensada y evaporada, cubierta con merengue suave y espolvoreada con canela."
        />
        <Plato
          imagen="picarones.webp"
          nombre="Picarones"
          tipo="Postre"
          descripcion="Dulces fritos con forma de anillo, elaborados con una masa de calabaza y boniato. Se sirven calientes bañados en miel de chancaca, una preparación dulce de azúcar de caña."
        />
      </div>
    </>
  );
}

export default App;
