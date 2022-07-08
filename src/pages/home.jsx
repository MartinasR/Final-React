import Menu from '../components/menu/menu'
import Footer from '../components/footer/footer';
import Card from '../components/card1/card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const redirect = useNavigate();
    const AuthToken = localStorage.getItem('token')
    const [Data, setData] = useState([])

    useEffect(() => {
        if (AuthToken === null) {
            redirect('/Login')
        } else {
            fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${AuthToken}`
                }
            })
                .then(res => res.json())
                .then(Skills => {setData(Skills)})
                .catch(err => { return alert(err) })
        }

    }, [AuthToken])

    return (<>
        <Menu/>
        <main className='SkillCardTab'>
            {Data.length !==0 ? Data.map(skill => <Card props={skill} key={skill.id} />) : <h1>Please add information</h1>}
        </main>
        <Footer />
    </>);
}

export default Home;