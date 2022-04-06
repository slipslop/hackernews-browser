import { useEffect, useState } from "react";
import { ArticleLink } from "./ArticleLink";
import { getTopStories, storyResponse } from "./http";

export function ArticleListing() {
    const [posts, setPosts] = useState<storyResponse[]>();
    const fetchData = () => {
        getTopStories().then(response => {
            return response;
        })
        .then(data => {
            console.log(data);
            setPosts(data.slice(0, 20));
        })
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                posts?.map((item, index) => (
                    <ArticleLink key={index} id={item}/>
                ))
            }
        </div>
    )
}