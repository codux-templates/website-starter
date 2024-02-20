import { Footer } from '../../../components/footer/footer';
import { createBoard, ContentSlot } from '@wixc3/react-board';

export default createBoard({
    name: 'Footer',
    Board: () => (
        <ContentSlot>
            <Footer />
        </ContentSlot>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        },
    },
});
