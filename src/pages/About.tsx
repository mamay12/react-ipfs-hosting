import {Link} from "react-router";

function About(){
    return(
        <div>
            <p>This is About page</p>
            <Link to='/'>Go to Main page</Link>
            <br/>
            <Link to='/contact'>Go to Contact page</Link>
        </div>
    )
}

export default About
