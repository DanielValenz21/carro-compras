import { Component } from "react";
const Styles = {
    title: {
        marginBottom: '30px',
    }
}
class Title extends Component {
    render() {
        return (
            <h1 style={Styles.title }>Productos</h1>
        )
    }
}

export default Title;