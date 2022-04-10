import { TypeFormField, TypeOnChange } from '../Types';

import selectStyles from './Select.module.scss';
import formStyles from '../Form.module.scss';

export type TypeSelect = { data: TypeFormField; onChange: TypeOnChange };

export default function Select({ data, onChange }: TypeSelect) {
    return (
        <div className={selectStyles.select}>
            {!!data.label && (
                <label className={formStyles.form__label} htmlFor={data.name}>
                    {data.label}
                </label>
            )}

            <div className={selectStyles.select__inner}>
                <select name={data.name} id={data.name} className={selectStyles.select__field} onChange={onChange}>
                    {data.options &&
                        data.options.length > 0 &&
                        data.options.map((option) => (
                            <option key={`${data.name}_${option.value}`} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}
