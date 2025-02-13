export const fetchApiData = async (source) => {
    const response = await fetch(source);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};