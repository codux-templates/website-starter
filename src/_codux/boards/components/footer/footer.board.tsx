import { Footer } from '../../../../components/footer/footer';
import { createBoard, ContentSlot } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'Footer',
    Board: () => (
        <ComponentWrapper>
            <ContentSlot>
                <Footer />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
});
