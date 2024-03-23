import { modalInitial } from '@/constants/mocks';
import { fireEvent, render, screen, waitFor } from '@/test-utils';
import { ModalHeader, ModalContext } from '../';

const defaultValue = {
    children: <p>Modal</p>,
    hideIconClick: true,
    classNameText: '',
    className: '',
};
const setup = (props = defaultValue) => {
    return render(
        <ModalContext.Provider value={modalInitial}>
            <ModalHeader {...props}>{props.children}</ModalHeader>
        </ModalContext.Provider>
    );
};

describe('Component ModalHeader', () => {
    it('Should render without crashing', () => {
        setup();
        expect(screen.getByTestId('g-ModalHeader')).toBeInTheDocument();
    });
    it('Close when click icon close', async () => {
        setup();
        const iconClose = screen.getByTestId('ic-close');
        await waitFor(() => fireEvent.click(iconClose));
        expect(screen.getByTestId('g-ModalHeader')).toBeInTheDocument();
    });
    it('Hide icon close', async () => {
        setup();
        const iconClose = screen.getByTestId('ic-close');
        await waitFor(() => fireEvent.click(iconClose));
        expect(screen.getByTestId('g-ModalHeader')).toBeNulll;
    });
});
