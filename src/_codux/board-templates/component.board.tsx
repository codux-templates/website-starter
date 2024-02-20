import { createBoard, ContentSlot } from '@wixc3/react-board';
import { ComponentWrapper } from 'src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <ComponentWrapper>
            <ContentSlot />
        </ComponentWrapper>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        },
    },
});
