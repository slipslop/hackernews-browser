const apiBase = 'https://hacker-news.firebaseio.com/v0/';

export interface storyResponse extends ArrayLike<number>{
    id: number,
    descendants? :number,
    by?: string,
    score?: number,
    time?: number,
    title?: string,
    type?: string,
    url?: string,
    slice(start?: number, end?: number): Array<storyResponse>
}

async function http(url: string): Promise<storyResponse> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Fetch was not successfull');
    }

    return await response.json();
}

export async function getTopStories() {
    const url = apiBase + 'topstories.json';
    return await http(url).then((data) => {
        return data;
    });
}

export async function getStory(storyId: any) {
    const url = apiBase + `item/${storyId}.json`;
    return await http(url).then((data) => {
        return data;
    });
}