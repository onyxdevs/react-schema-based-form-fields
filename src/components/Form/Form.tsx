import SectionLabel from './SectionLabel';
import FieldWrapper from './FieldWrapper';
import Select from './Select';
import Switch from './Switch';

import styles from './Form.module.scss';

export type TypeFormProps = { children: React.ReactNode; onSubmit: (event: React.SyntheticEvent) => void };

function Form({ children, onSubmit }: TypeFormProps) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className="row">{children}</div>
        </form>
    );
}

Form.SectionLabel = SectionLabel;
Form.FieldWrapper = FieldWrapper;
Form.Select = Select;
Form.Switch = Switch;

export default Form;
