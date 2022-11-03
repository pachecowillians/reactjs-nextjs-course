import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from '.';

describe('<TextInput />', () => {
    const fn = jest.fn();
    it('should have a value', () => {
        render(<TextInput onChange={fn} value='' />);

        const input = screen.getByPlaceholderText(/type your search/i);

        expect(input.value).toBe('');
    });

    it('should call onChange function on each key pressed', () => {
        render(<TextInput onChange={fn} />);

        const input = screen.getByPlaceholderText(/type your search/i);

        userEvent.type(input, "some value");
        expect(input.value).toBe('some value');
        expect(fn).toHaveBeenCalledTimes("some value".length);
    });

    it('should match snapshot', () => {
        const { container } = render(<TextInput onChange={fn} />);
        expect(container).toMatchSnapshot();
    });
});
