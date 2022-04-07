import { storyResponse } from "../../http";
import { Link } from "react-router-dom";

export function Comment(props: {story: storyResponse}) {
    let story = props.story;
    let date = new Date(story.time * 1000);
    return (
        <>
            <p className='title'>{story.title}</p>
            <p>Comment by: {story.by}</p>
            <p>id: {story.id}</p>
            <p>date: {date.toLocaleString('fi-FI')}</p>
            <p className="comment">{story.text}</p>
            <button className="btn">
                <Link to={`/`}>Home</Link>
            </button>
        </>
    );
}