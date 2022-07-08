import Logo from '../../images/ILTQq.png'
import './menu.css'

import AddLink from '../link/link'

const antriLinkai = ['Home', 'Add','Logout']
const pirmiLinkai = ['Register','Login' ]

const Menu = () => {
    const AuthToken = localStorage.getItem('token')
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" height="50px" />
            </div>
            <div className='MenuLinks'>
                {AuthToken ? <>
                    {antriLinkai.map((link, i) => <AddLink props={link} key={i} />)}
                </> : <>
                    {pirmiLinkai.map((link, i) => <AddLink props={link} key={i} />)}
                </>}
            </div>
        </header >
    );
}

export default Menu;