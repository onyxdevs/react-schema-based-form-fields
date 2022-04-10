import styles from '../Form.module.scss';

export type TypeSectionLabel = { children: React.ReactNode };

export default function SectionLabel({ children }: TypeSectionLabel) {
    return <h3 className={styles['form__section-label']}>{children}</h3>;
}
