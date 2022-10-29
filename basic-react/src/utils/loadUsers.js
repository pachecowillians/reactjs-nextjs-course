export const loadUsers = async () => {

    const usersResponse = fetch('https://jsonplaceholder.typicode.com/users');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [users, photos] = await Promise.all([usersResponse, photosResponse]);

    const usersJson = await users.json();
    const photosJson = await photos.json();

    const usersAndPhotos = usersJson.map((user, index) => ({
        ...user,
        photo: photosJson[index].url
    }));

    return usersAndPhotos;
}