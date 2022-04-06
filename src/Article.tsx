import { BrowserRouter, Link } from "react-router-dom";

export function Article(props: any) {
    let id = props.id;

    
    return (
        <div>
            <BrowserRouter>
                <Link to={`/${id}`}>{id}</Link>
            </BrowserRouter>
        </div>
    )
}