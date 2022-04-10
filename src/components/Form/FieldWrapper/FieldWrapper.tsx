import { useState } from 'react';

import { TypeFormField, TypeHandleInputChange, TypeOnChange } from '../Types';
import fieldsMap from '../fieldsMap';

import styles from '../Form.module.scss';

export type TypeSectionField = {
    data: TypeFormField;
    path: (string | number)[];
    handleInputChange: TypeHandleInputChange;
};

export default function FieldWrapper({ data, path, handleInputChange }: TypeSectionField) {
    const [showSubfields, setShowSubfields] = useState(data.value);

    const FieldComponent = fieldsMap[data.type];
    const hasSubfields = data.subfields && data.subfields.length > 0;
    const triggerClasses = [styles['form__section-field__subfields-trigger']];

    const handleShowSubfields = () => {
        setShowSubfields(!showSubfields);
    };

    const handleInputChangeModified: TypeOnChange = (event) => {
        // @ts-ignore
        const { value, checked } = event.target;
        const newValue = event.target.type === 'checkbox' ? checked : value;
        if (hasSubfields) {
            setShowSubfields(!!newValue);
        }
        handleInputChange([...path])(event);
    };

    if (showSubfields) {
        triggerClasses.push(styles['form__section-field__subfields-trigger--active']);
    }

    return (
        <div className={styles['form__section-field']}>
            <div className={styles['form__section-field__content']}>
                <label className={styles.form__label} htmlFor={data.name}>
                    {data.label}
                </label>

                {data.fields && data.fields.length > 0 && (
                    <div className={styles['form__section-field__additional']}>
                        {data.fields.map((additionalField, additionalFieldIndex) => {
                            const AdditionalField = fieldsMap[additionalField.type];
                            const valuePathAdditional = [...path, 'fields', additionalFieldIndex];
                            return (
                                <AdditionalField
                                    data={additionalField}
                                    onChange={handleInputChange(valuePathAdditional)}
                                    key={`form_section_additional_${additionalFieldIndex}`}
                                />
                            );
                        })}
                    </div>
                )}

                <FieldComponent data={data} onChange={handleInputChangeModified} />

                {hasSubfields && (
                    <button className={triggerClasses.join(' ')} onClick={handleShowSubfields} type="button" />
                )}
            </div>

            {data.subfields && data.subfields.length > 0 && showSubfields && (
                <div className={styles['form__section-field__subfields']}>
                    {data.subfields.map((subfield, subfieldIndex) => (
                        <FieldWrapper
                            data={subfield}
                            path={[...path, 'subfields', subfieldIndex]}
                            handleInputChange={handleInputChange}
                            key={`form_section_subfield_${subfieldIndex}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
