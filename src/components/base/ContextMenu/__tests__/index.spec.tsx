import { fireEvent, render, screen, userEvent, waitFor } from '@/test-utils';
import ContextMenu from '..';

const onClickFn = jest.fn();

const setup = (props: any = { onclick: onClickFn, hideDelay: 0, trigger: 'click' }) =>
    render(
        <>
            <button>Outside</button>
            <ContextMenu
                content={
                    <div data-testid="content" onClick={() => props.onClick()}>
                        Content ContentMenu
                    </div>
                }
                hideDelay={props.hideDelay}
                trigger={props.trigger}
            >
                Children
            </ContextMenu>
        </>
    );
const user = userEvent.setup();

describe('ContextMenu', () => {
    jest.setTimeout(100000);
    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        jest.spyOn(global, 'clearTimeout');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('Should render correctly', async () => {
        setup();

        expect(screen.getByTestId('contextMenu-container')).not.toHaveTextContent('Content ContentMenu');

        await waitFor(() => {
            fireEvent.click(screen.getByRole('button', { name: 'Children' }));
            expect(screen.getByTestId('contextMenu-container')).toHaveTextContent('Content ContentMenu');
        });
    });

    test('should show & hidden correctly with hideDelay', async () => {
        setup({ trigger: 'hover', hideDelay: 1 });

        user.hover(screen.getByTestId('contextMenu-container'));
        await waitFor(() => {
            expect(screen.getByTestId('contextMenu-container')).toHaveTextContent('Content ContentMenu');
        });

        user.unhover(screen.getByTestId('contextMenu-container'));
        await waitFor(() => {
            expect(setTimeout).toHaveBeenCalled();
            expect(screen.getByTestId('contextMenu-container')).toHaveTextContent('Content ContentMenu');
        });

        jest.advanceTimersByTime(100);
        await waitFor(() => {
            expect(screen.getByTestId('contextMenu-container')).not.toHaveTextContent('Content ContentMenu');
        });

        user.hover(screen.getByTestId('contextMenu-container'));
        await waitFor(() => {
            expect(clearTimeout).toHaveBeenCalled();
            expect(screen.getByTestId('contextMenu-container')).toHaveTextContent('Content ContentMenu');
        });
    });
});
