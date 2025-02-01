import { Component } from "react";
const styles = {
    layout: {
    backgroundColor: '#0a283e',
    color: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

  }
}

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div>
          {this.props.children}
        </div>
        klalal
      </div>
    );
  }
}

export default Layout;