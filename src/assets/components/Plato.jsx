import "../styles/Plato.css";

const imagenes = import.meta.glob("../img/*", {
  eager: true,
  import: "default",
});

function Plato(props) {
  return (
    <div className="contenedor-plato">
      <img
        className="imagen-plato"
        src={imagenes[`../img/${props.imagen}`]}
        alt={`Foto de ${props.nombre}`}
      />

      <div className="contenedor-texto-plato">
        <p className="nombre-plato">
          <strong>{props.nombre}</strong>
        </p>

        <p className="tipo-plato">
          <strong>{props.tipo} </strong>
        </p>

        <p className="descripcion-plato">"{props.descripcion}"</p>
      </div>
    </div>
  );
}

export default Plato;
