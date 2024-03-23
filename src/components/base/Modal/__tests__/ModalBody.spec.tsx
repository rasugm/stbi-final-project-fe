import { render, screen } from '@/test-utils';
import ModalBody from '../ModalBody';

const defaultValue = {
    children: <p>Modal</p>,
    className: '',
};
const setup = (props = defaultValue) => {
    return render(<ModalBody {...props}>{props.children}</ModalBody>);
};

describe('Component ModalBody', () => {
    it('Should render without crashing', () => {
        setup();
        expect(screen.getByTestId('g-ModalBody')).toBeInTheDocument();
    });
});
