import { TypeFormField, TypeOnChange } from '../Types';

import switchStyles from './Switch.module.scss';

export type TypeSwitch = { data: TypeFormField; onChange: TypeOnChange };

export default function Switch({ data, onChange }: TypeSwitch) {
    return (
        <label className={switchStyles.switch__label} htmlFor={data.name}>
            <input
                type="checkbox"
                id={data.name}
                name={data.name}
                checked={!!data.value}
                onChange={onChange}
                className={switchStyles.switch__input}
            />
            <span>
                <strong></strong>
            </span>
        </label>
    );
}
