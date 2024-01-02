import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../components/home-page/home-page';

export default createBoard({
    name: 'Test',
    Board: () => <HomePage />,
    isSnippet: true,
});
