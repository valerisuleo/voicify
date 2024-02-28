import { render, cleanup, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardComponent from './card';
import { ICard } from './interfaces';

describe('CardComponent', () => {
    let component: (props: ICard) => RenderResult;

    beforeEach(() => {
        // Placeholder for dynamic component rendering
        component = (props) => {
            return render(<CardComponent {...props} />);
        };
    });

    afterEach(() => {
        cleanup();
    });

    it('should create', () => {
        const { getByText } = component({
            header: { children: 'Test Header' },
            body: { cardTitle: 'Test Title', cardText: 'Test Text', children: 'Test Body' }
        });
        expect(getByText('Test Title')).toBeTruthy();
    });

    it('should render only the header correctly when there is no body', () => {
        const { getByText, queryByText } = component({
            header: { children: 'Header Only Test' },
            body: {}
        });

        // The header should be in the document
        expect(getByText('Header Only Test')).toBeInTheDocument();

        // The body content should not be present
        expect(queryByText(/Test Title/i)).not.toBeInTheDocument();
        expect(queryByText(/Test Text/i)).not.toBeInTheDocument();
    });

    it('should render only the body correctly when there is no header', () => {
        const { getByText, queryByText } = component({
            header: {},
            body: { cardTitle: 'Body Only Test Title', cardText: 'Body Only Test Text' }
        });

        // The body content should be in the document
        expect(getByText('Body Only Test Title')).toBeInTheDocument();
        expect(getByText('Body Only Test Text')).toBeInTheDocument();

        // The header content should not be present
        expect(queryByText('Header Only Test')).not.toBeInTheDocument();
    });
});
