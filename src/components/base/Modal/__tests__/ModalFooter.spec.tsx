import { render, screen } from '@/test-utils';
import { ModalFooter } from '../';

const defaultValue = {
    children: <p>Modal</p>,
    className: '',
};
const setup = (props = defaultValue) => {
    return render(<ModalFooter {...props}>{props.children}</ModalFooter>);
};

describe('Component ModalFooter', () => {
    it('Should render without crashing', () => {
        setup();
        expect(screen.getByTestId('g-ModalFooter')).toBeInTheDocument();
    });
});
