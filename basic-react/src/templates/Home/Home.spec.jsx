import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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
            {
                "id": 4,
                "name": "Name 4",
                "email": "email4@gmail.com",
            },
            {
                "id": 5,
                "name": "Name 5",
                "email": "email5@gmail.com",
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
            {
                "url": "url4.png",
            },
            {
                "url": "url5.png",
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

        expect(images).toHaveLength(4);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should search for posts', async () => {
        render(<Home />);
        const noMoreUsers = screen.getByText("No users found!");

        expect.assertions(24);

        await waitForElementToBeRemoved(noMoreUsers);

        const search = screen.getByPlaceholderText(/type your search/i);

        expect(screen.getByRole('heading', { name: 'Name 1' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Name 2' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Name 3' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Name 4' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 5' })).not.toBeInTheDocument();

        userEvent.type(search, 'Name 1');

        expect(screen.getByRole('heading', { name: 'Name 1' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 2' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 3' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 4' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 5' })).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Search value: Name 1' })).toBeInTheDocument();

        userEvent.clear(search);

        expect(screen.getByRole('heading', { name: 'Name 1' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Name 2' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Name 3' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Name 4' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 5' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Search value: Name 1' })).not.toBeInTheDocument();

        userEvent.type(search, 'Name 6');

        expect(screen.queryByRole('heading', { name: 'Name 1' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 2' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 3' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 4' })).not.toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Name 5' })).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Search value: Name 6' })).toBeInTheDocument();
        expect(screen.getByText("No users found!")).toBeInTheDocument();
    });

    it('should load more posts', async () => {
        render(<Home />);
        const noMoreUsers = screen.getByText("No users found!");

        // expect.assertions(3);

        await waitForElementToBeRemoved(noMoreUsers);

        const button = screen.getByRole('button', { name: /load more/i });

        expect(screen.queryByRole('heading', { name: 'Name 5' })).not.toBeInTheDocument();

        userEvent.click(button);

        expect(screen.getByRole('heading', { name: 'Name 5' })).toBeInTheDocument();

    });
});