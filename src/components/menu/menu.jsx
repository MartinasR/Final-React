import './menu.css'

const Links1 = ['Home', 'Add']
const pradziosLinkai = ['Login', 'Register']

const Menu = () => {
    const AuthToken = localStorage.getItem('token')
    return (
        <header>
            <div className='Menu'>
                {AuthToken ? <>
                    {Links1.map((link, i) => <AddLink props={link} key={i} />)}
                </> : <>
                    {pradziosLinkai.map((link, i) => <AddLink props={link} key={i} />)}
                </>}
            </div>
        </header >
    );
}

export default Menu;