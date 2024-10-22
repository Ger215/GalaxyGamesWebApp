export const getData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data' + response?.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error while fetching data', error);
    throw error;
  }
};
