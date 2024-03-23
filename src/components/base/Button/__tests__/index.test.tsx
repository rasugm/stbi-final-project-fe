import { render, screen } from '../../../../test-utils';
import Button from '@/components/base/Button';

describe('Button', () => {
    test('should render correctly', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
