import classNames from 'classnames';
import styles from './footer.module.scss';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Contact Jane Doe</div>
                <div className={styles.small}>
                    Mail: info@mysite.com
                    <br />
                    Tel: 123-456-7890
                    <br />
                    500 Terry Francine Street,
                    <br />
                    San Francisco, CA 94158
                </div>
            </div>
            <div className={styles.social}>
                <a href="/">
                    <FacebookIcon className={styles.icon} />
                </a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </div>
        </div>
    );
};
