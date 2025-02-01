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
  }
}

class Producto extends Component {
  render() {
    const { producto, agregarCarrito } = this.props; // Keep agregarCarrito
    const { name, price, img } = producto; // Extraer las propiedades desde producto
    return (
      <div style={styles.producto}>
        <img alt={name} src={img} />
        <h3>{name}</h3>
        <p>{price}</p>
        <Button onClick={() => agregarCarrito(producto)}> // Keep agregarCarrito
          Agregar al carrito
        </Button>
      </div>
    );
  }
}

export default Producto;
