import Container from "../components/Container";

const Profile = ({helloResponse}) =>{

    return (
        <Container title ="Profile">
            <h1>Profile</h1>
            {console.log(helloResponse.hello)}
        </Container>
        )
}

Profile.getInitialProps = async() =>{

    const response = await fetch("https://us-central1-pruebasreactclase.cloudfunctions.net/api/helloWorld");
    const helloResponse = await response.json();
    return {
        helloResponse
    }
}

export default Profile