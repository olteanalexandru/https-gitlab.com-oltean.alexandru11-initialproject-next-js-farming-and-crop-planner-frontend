import {Card, Container} from 'react-bootstrap'
import LinkParola from '../Elemente/page'
import {useGlobalContext} from '../../../features/Context/UserStore';


 export const UserInfos = () => {
    const { data } = useGlobalContext()
    return (
        <Container>
            <Card>
                <section className='heading'>
                    <h1>Salut {data && data.name}</h1>
                    <LinkParola/>
                    <h3>Email: {data.email}</h3>
                    <h3>Nume utilizator: {data.name}</h3>
                    <h3>Permisiuni: {data.rol}</h3>
                </section>
            </Card>
        </Container>
    )
}
