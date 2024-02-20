import { createBoard, ContentSlot } from '@wixc3/react-board';
import { PageNoNavigation } from 'src/_codux/board-wrappers/page-no-navigation';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <PageNoNavigation>
            <ContentSlot />
        </PageNoNavigation>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
});
