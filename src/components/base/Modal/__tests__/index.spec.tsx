import { render, screen } from '@/test-utils';
import Modal, { ModalProps } from '../Modal';
import ModalContext from '../ModalContext';

const onClose = jest.fn();

const defaultValue: ModalProps = {
    children: <p>Modal</p>,
    closeOnClickOverlay: false,
    isCentered: false,
    isOpen: true,
    onClose: onClose,
    size: undefined,
};
const setup = (props = defaultValue) => {
    return render(
        <ModalContext.Provider value={{ isOpen: props.isOpen, setIsOpen: props.onClose }}>
            <Modal {...props}>{props.children}</Modal>
        </ModalContext.Provider>
    );
};

describe('Component Modal', () => {
    it('Should render without crashing', () => {
        setup();
        expect(screen.getByTestId('g-Modal')).toBeInTheDocument();
    });
    describe('Check classname', () => {
        it('Modal centered', () => {
            setup({ ...defaultValue, isCentered: true });
            const container = screen.getByTestId('g-Modal');
            expect(container.classList.contains('items-center')).toBe(true);
        });
        it('Modal sm', () => {
            setup({ ...defaultValue, size: 'sm', isCentered: true });
            const container = screen.getByTestId('modal-inside');
            expect(container.classList.contains('sm:w-[400px]')).toBe(true);
        });
        it('Modal md', () => {
            setup({ ...defaultValue, size: 'md' });
            const container = screen.getByTestId('modal-inside');
            expect(container.classList.contains('sm:w-[600px]')).toBe(true);
        });
        it('Modal lg', () => {
            setup({ ...defaultValue, size: 'lg' });
            const container = screen.getByTestId('modal-inside');
            expect(container.classList.contains('md:w-[768px]')).toBe(true);
        });
        it('Modal xl', () => {
            setup({ ...defaultValue, size: 'xl' });
            const container = screen.getByTestId('modal-inside');
            expect(container.classList.contains('lg:w-[80%]')).toBe(true);
        });
        it('Modal full', () => {
            setup({ ...defaultValue, size: 'full' });
            const container = screen.getByTestId('modal-inside');
            expect(container.classList.contains('w-full')).toBe(true);
        });
    });
});
