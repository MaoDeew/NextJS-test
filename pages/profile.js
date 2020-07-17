import Container from "../components/Container";

const Profile = ({hello}) =>{

    return (
        <Container title ="Profile">
            <h1>Profile</h1>
            <p>{hello}</p>
        </Container>
        )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://us-central1-pruebasreactclase.cloudfunctions.net/helloWorld')
    const hello = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      hello: {
        hello,
      }
    }
  }

export default Profile