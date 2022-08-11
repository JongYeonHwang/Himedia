import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor : 'skyblue'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle : undefined }>HOME</NavLink></li>
                <li><NavLink to="/mypage" style={ ({isActive}) => isActive? activeStyle : undefined }>Mypage</NavLink></li>
                <li><NavLink to="/login" style={ ({isActive}) => isActive? activeStyle : undefined }>Login</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;