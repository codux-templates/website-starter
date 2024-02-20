import { createBoard } from '@wixc3/react-board';
import { PageWithNavigation } from 'src/_codux/board-wrappers/page-with-navigation';

export default createBoard({
    name: 'New Board',
    Board: () => <PageWithNavigation path="/" />,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
});
