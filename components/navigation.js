import Link from "next/link";

const Navigation = () =>{

    const pages = [
        {
            id : 1,
            name : "Home",
            link : "/"
        },
        {
            id : 2,
            name : "Profile",
            link : "/profile"
        },
        {
            id : 3,
            name : "Register",
            link : "/register"
        }

    ]
            
    

    return(
        <div>
            {pages.map(page =>{
                return(
                    <li key={page.id}>
                        <Link href={page.link}><a>{page.name}</a></Link>
                    </li> 
                )
            })}
        </div>
    )
}

export default Navigation;