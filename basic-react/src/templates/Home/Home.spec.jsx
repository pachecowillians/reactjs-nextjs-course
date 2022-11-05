import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Home } from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "name": "Name 1",
                "email": "email1@gmail.com",
            },
            {
                "id": 2,
                "name": "Name 2",
                "email": "email2@gmail.com",
            },
            {
                "id": 3,
                "name": "Name 3",
                "email": "email3@gmail.com",
            },
        ]));
    }),
    rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
        return res(ctx.json([
            {
                "url": "url1.png",
            },
            {
                "url": "url2.png",
            },
            {
                "url": "url3.png",
            },
        ]));
    }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
    beforeAll(() => {
        server.listen();
    });

    afterEach(() => server.resetHandlers());

    afterAll(() => {
        server.close();
    });

    it('should render search, users and load more', async () => {
        render(<Home />);
        const noMoreUsers = screen.getByText("No users found!");

        expect.assertions(3);

        await waitForElementToBeRemoved(noMoreUsers);

        const search = screen.getByPlaceholderText(/type your search/i);
        expect(search).toBeInTheDocument();

        const images = screen.getAllByRole('img');

        expect(images).toHaveLength(3);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
});