import Container from "../components/Container";

const Profile = ({hello}) =>{

    return (
        <Container title ="Profile">
            <h1>Profile</h1>
            {console.log("from firebase "+hello)}
        </Container>
        )
}

Profile.getInitialProps = async() =>{

    const response = await fetch("https://us-central1-pruebasreactclase.cloudfunctions.net/api/helloWorld");
    const helloResponse = await response.json();
    return {hello:helloResponse};
}

export default Profile