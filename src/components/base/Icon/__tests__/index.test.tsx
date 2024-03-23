import { render, screen } from '../../../../test-utils';

import Icon from '../Icon';

describe('Icon', () => {
    test('renders the correct icon with the specified color', () => {
        const name = 'eye';
        const color = 'rgb(255, 0, 0)';

        render(<Icon name={name} color={color} />);

        const iconElement = screen.getByTestId(`icon-${name}`);

        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveStyle(`color: ${color}`);
    });

    test('memoizes the component', () => {
        const name = 'eye-off';
        
        const { rerender } = render(<Icon name={name}/>);
        const firstIconComponent = screen.getByTestId(`icon-${name}`);

        rerender(<Icon name={name}/>);
        const secondIconComponent = screen.getByTestId(`icon-${name}`);

        expect(firstIconComponent).toBe(secondIconComponent);
    });
});