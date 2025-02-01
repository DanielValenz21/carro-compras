import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: '#0a283e',
    color: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px'
  }
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
        </div>
        klalal
      </div>
    );
  }
}

export default Layout;
