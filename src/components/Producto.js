import { Component } from "react";
import Button from './Button';
 
const styles = {
  producto: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
    margin: '10px',
    boxSizing: 'border-box'
  },
  imagen: {
    width: '100%',    // La imagen ocupará el 100% del ancho del contenedor
    height: 'auto'
  }
};

class Producto extends Component {
  render() {
    const { producto, agregarCarrito } = this.props;
    const { name, price, img } = producto;
    return (
      <div style={styles.producto}>
        <img alt={name} src={img} style={styles.imagen} />
        <h3>{name}</h3>
        <p>{price}</p>
        <Button onClick={() => agregarCarrito(producto)}>
          Agregar al carrito
        </Button>
      </div>
    );
  }
}

export default Producto;
