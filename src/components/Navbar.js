import { Component } from 'react'
import Logo from './Logo.js'
import Carro from './Carro.js'
const styles = {
    navbar: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       height: '100px',
       justifyContent: 'space-between',
       postion: 'relative',
       padding: '0 50px',
       boxShadow: '0 2px 3px rgb(0,0,0,0.2',
    }
}

class Navbar extends Component {
    render() {
        const { carro } = this.props;
        return(
            <nav style={styles.navbar}>
                <Logo />
                <Carro carro={carro} />
            </nav>
        )
    }
}

export default Navbar;