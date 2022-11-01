import { render, screen } from "@testing-library/react";
import { UserCard } from '.'

const props = {
    photo: 'photo.png',
    name: 'name',
    email: 'email',

}

describe('<UserCard />', () => {
    it('should render UserCard correctly', () => {
        // const { debug } = render(<UserCard user={props} />);
        // debug();
        render(<UserCard user={props} />);

        expect(screen.getByRole('img', { name: props.name })).toHaveAttribute('src', props.photo);
        expect(screen.getByRole('heading', { name: props.name })).toBeInTheDocument();
        expect(screen.getByText(props.email)).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<UserCard user={props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});
