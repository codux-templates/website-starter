import styles from './new-board.module.scss';
import { createBoard, ContentSlot } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div className={styles.wrapper}>
            <ContentSlot />
        </div>
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
