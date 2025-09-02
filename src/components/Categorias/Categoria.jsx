import ItemCategoria from "./_itemCategoria";
import listadoCategorias from "./Categoria.json";
import'./Categoria.css';

const Categorias = () => {
 return (
    <div className="contenedorCategorias">
        {listadoCategorias.map((item, index) => (
    <ItemCategoria
    key={index}
    iconoCat={item.icono}
    nombreCat={item.nombre}
    />
    ))}
    </div>
 );
}
export default Categorias