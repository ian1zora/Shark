const ItemCategoria = ({iconoCat, nombreCat}) => {
    // props = {iconoCat, nombreCat}
  return (
    <div className="itemCategoria">
        <span className={`fa ${iconoCat}`}></span>
        <h4>{nombreCat}</h4>
    </div>
  )
}
export default ItemCategoria