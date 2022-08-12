import { NavLink } from 'react-router-dom'

function Navbar() {

    const activeStyle = {
        backgroundColor : 'skyblue'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle : undefined }>HOME</NavLink></li>
                <li><NavLink to="/about" style={ ({isActive}) => isActive? activeStyle : undefined }>About</NavLink></li>
                <li><NavLink to="/main" style={ ({isActive}) => isActive? activeStyle : undefined }>MENU</NavLink></li>
            </ul>
        </div>
    );

}

export default Navbar;