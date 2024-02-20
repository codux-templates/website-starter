import { HomePage } from '../../../components/home-page/home-page';
import { createBoard, ContentSlot } from '@wixc3/react-board';
import { PageNoNavigation } from 'src/_codux/board-wrappers/page-no-navigation';

export default createBoard({
    name: 'Page-Home',
    Board: () => (
        <PageNoNavigation>
            <ContentSlot>
                <HomePage />
            </ContentSlot>
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
