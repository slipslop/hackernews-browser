const apiBase = 'https://hacker-news.firebaseio.com/v0/';

interface t extends ArrayLike<number>{
    id: number,
    slice(start?: number, end?: number): Array<number>
}

async function http(url: string): Promise<t> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Fetch was not successfull');
    }

    return await response.json();
}

export async function get() {
    const url = apiBase + 'topstories.json';
    return await http(url).then((data) => {
        return data;
    });
}
