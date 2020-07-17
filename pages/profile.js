import Container from "../components/Container";

const Profile = ({hello}) =>{

    return (
        <Container title ="Profile">
            <h1>Profile</h1>
            <p>{hello}</p>
        </Container>
        )
}

Profile.getInitialProps = async() =>{
    let header = new Headers({
        "Access-Control-Allow-Origin": "*"
      });

    const response = await fetch("https://us-central1-pruebasreactclase.cloudfunctions.net/helloWorld",{
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    });
    const helloResponse = await response.json();
    return {hello:helloResponse}
}

export default Profile