import { fireEvent, render, screen } from '@/test-utils';
import Pagination from '..';

const mockChangePage = jest.fn();
const setup = (activePage: number, totalPage = 10) => (
    <div data-testid="containerPagination">
        <Pagination activePage={activePage} changePage={mockChangePage} totalPage={totalPage} />
    </div>
);

describe('Pagination', () => {
    test('should render corectly', async () => {
        const { rerender } = render(setup(1));
        expect(screen.getByLabelText('Previous Page')).toHaveClass(
            'w-10 h-10 text-center border-r border-[#CDD5DF] grid place-content-center text-[#CDD5DF]'
        );
        expect(screen.getByLabelText('Next Page')).toHaveClass(
            'w-10 h-10 text-center border-l border-[#CDD5DF] grid place-content-center text-[#202939]'
        );
        expect(screen.getByText(1)).toBeInTheDocument();

        rerender(setup(5));
        expect(screen.getByLabelText('Previous Page')).toHaveClass(
            'w-10 h-10 text-center border-r border-[#CDD5DF] grid place-content-center text-[#202939]'
        );
        expect(screen.getByLabelText('Next Page')).toHaveClass(
            'w-10 h-10 text-center border-l border-[#CDD5DF] grid place-content-center text-[#202939]'
        );

        rerender(setup(10));
        expect(screen.getByLabelText('Previous Page')).toHaveClass(
            'w-10 h-10 text-center border-r border-[#CDD5DF] grid place-content-center text-[#202939]'
        );
        expect(screen.getByLabelText('Next Page')).toHaveClass(
            'w-10 h-10 text-center border-l border-[#CDD5DF] grid place-content-center text-[#CDD5DF]'
        );
    });

    test('should change page', async () => {
        render(setup(1));

        fireEvent.click(screen.getByRole('button', { name: '2' }));
        expect(mockChangePage).toBeCalledWith(2);

        fireEvent.click(screen.getByRole('button', { name: '10' }));
        expect(mockChangePage).toBeCalledWith(10);
    });

    test('should render number page corectly', async () => {
        const { rerender } = render(setup(3, 4));
        expect(screen.getByText(1)).toBeInTheDocument();

        rerender(setup(3, 5));
        expect(screen.getByText(1)).toBeInTheDocument();

        rerender(setup(4, 5));
        expect(screen.getByText('...')).toBeInTheDocument();

        rerender(setup(3));
        expect(screen.getByText(1)).toBeInTheDocument();

        rerender(setup(4));
        expect(screen.getByText(1)).toBeInTheDocument();

        rerender(setup(2, 4));
        expect(screen.getByText(4)).toBeInTheDocument();

        rerender(setup(2, 5));
        expect(screen.getByText('...')).toBeInTheDocument();

        rerender(setup(8, 10));
        expect(screen.getByText(10)).toBeInTheDocument();
    });

    test('should prev or next page', async () => {
        const { rerender } = render(setup(2));
        fireEvent.click(screen.getByLabelText('Previous Page'));
        expect(mockChangePage).toBeCalledWith(1);

        rerender(setup(5));
        fireEvent.click(screen.getByLabelText('Next Page'));
        expect(mockChangePage).toBeCalledWith(6);
    });
});
