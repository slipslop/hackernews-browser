const apiBase = 'https://hacker-news.firebaseio.com/v0/';

export interface StoryResponse extends ArrayLike<number>{
    id: number,
    descendants: number,
    by: string,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string,
    text?: string,
    slice(start?: number, end?: number): Array<StoryResponse>
}

async function http<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Fetch was not successfull');
    }

    return await response.json();
}

export async function getTopStories() {
    const url = apiBase + 'topstories.json';
    return await http<Array<number>>(url)
}

export async function getStory(storyId: string|number|undefined) {
    if (storyId === undefined) {
        throw Error('Story id is undefined');
    }

    const url = apiBase + `item/${storyId}.json`;
    return await http<StoryResponse>(url);
}

export async function getStories(amount: number = 20) {
    const topStories = await getTopStories();
    const t = topStories.slice(0, amount);
    const promises: Array<Promise<StoryResponse>> = t.map(getStory);
    return await Promise.all(promises);
}
