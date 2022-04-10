import styles from './Button.module.scss';

export type TypeButtonProps = {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ children, type, onClick }: TypeButtonProps) {
    const attrs: any = {};

    if (typeof onClick !== 'undefined') {
        attrs.onClick = onClick;
    }

    return (
        <button type={type} className={styles.button} {...onClick}>
            {children}
        </button>
    );
}
