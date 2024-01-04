import { createBoard } from '@wixc3/react-board';
import { PagewithNavigation } from '../../board-wrappers/page-with-navigation';

export default createBoard({
    name: 'App',
    Board: () => <PagewithNavigation />,
});
