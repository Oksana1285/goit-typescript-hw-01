import axios from 'axios';

type Tudu = { userId: 1; id: 1; title: 'delectus aut autem'; completed: false };

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<Tudu>('url');
