const apiBase = 'https://hacker-news.firebaseio.com/v0/';

async function http(url: string): Promise<any> {
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
