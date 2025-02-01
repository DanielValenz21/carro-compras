import {Component} from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
class App extends Component {

  state={
    productos: [
      {name: 'tomate', price: 1500, img: '/prodcutos/tomate.jpg'},
      {name: 'arbejas', price: 500, img: '/prodcutos/arbejas.jpg'},
      {name: 'lechuga', price: 100, img: '/prodcutos/lechuga.jpg'},
    ]
  }


  render() {
    return (
      <div >
        <Layout>
          <Title/>
        <Productos
        agregarAlCarrito={()=> console.log('No hace nada ')}
        productos={this.state.productos}
        
        />  
                </Layout>

      </div>
    ); 
  }
}

export default App;
