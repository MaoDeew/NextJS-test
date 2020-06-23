import Navigation from "./navigation"
import Head from "next/head";

const Container = (props) =>{
    return (
        <div>
            <Head>
                <title>Next.js Prueba - {props.title}</title>
            </Head>
            <Navigation />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container
