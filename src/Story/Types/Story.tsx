import { storyResponse } from "../../http";
import { Link } from "react-router-dom";

export function Story(props: {story: storyResponse}) {
    let story = props.story;
    let date = new Date(story.time * 1000);
    return (
        <>
            <p className="title">{story.title}</p>
            <p>Linked by: {story.by}</p>
            <p>id: {story.id}</p>
            <p>date: {date.toLocaleString('fi-FI')}</p>
            <a href={story.url} target="_blank" rel="noreferrer">Link to story</a>
            <button className="btn">
                <Link to={`/`}>Home</Link>
            </button>
        </>
    );
}