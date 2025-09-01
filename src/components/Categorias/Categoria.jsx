import ItemCategoria from "./_itemCategoria";
import listadoCategorias from "./Categoria.json";
import'./categorias.css';

const Categorias = () => {
 return (
    <div className="contenedorCategorias">
        {listadoCategorias.map((item, index) => (
    <ItemCategoria
    iconoCat="fa-user"
    nombreCat="Usuario" 
    />
    ))}
    </div>
 );
}
export default Categorias