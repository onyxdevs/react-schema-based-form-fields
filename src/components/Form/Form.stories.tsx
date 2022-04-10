import { useState } from 'react';
import get from 'lodash/get';
import { Meta, Story } from '@storybook/react/types-6-0';

import { TypeFormSection, TypeHandleInputChange, TypeFormField, TypeFormFieldGroup } from 'components/Form/Types';
import { updateObjectValueByPath } from 'lib/helpers';
import Form from './Form';
import formStyles from 'components/Form/Form.module.scss';
import formSchema from 'schemas/formSchema.json';
export default {
    title: 'Form',
    component: Form,
} as Meta;

export const Base: Story = () => {
    const [form, setForm] = useState<TypeFormSection[]>(formSchema);

    const handleInputChange: TypeHandleInputChange = (path) => (event) => {
        // @ts-ignore
        const { value, checked } = event.target;
        const newValue = event.target.type === 'checkbox' ? checked : value;
        const formUpdated = updateObjectValueByPath([...path, 'value'], form, newValue);
        const field: any = get(formUpdated, path);
        const hasSubfields = typeof field.subfields !== 'undefined';

        // Trigger all subfields
        if (hasSubfields) {
            field.subfields.forEach((subfield: TypeFormField) => {
                subfield.value = newValue;
            });
        }

        setForm(formUpdated);
    };

    return (
        <Form onSubmit={() => {}}>
            {form.map((section, sectionIndex) => (
                <div key={`form_section_${sectionIndex}`} className={`col-${section.cols || '12'}`}>
                    <Form.SectionLabel>{section.label}</Form.SectionLabel>

                    <div className="row">
                        {section.fieldsGroups.map((fieldsGroup: TypeFormFieldGroup, fieldsGroupIndex: number) => (
                            <div
                                key={`form_section_${sectionIndex}_group_${fieldsGroupIndex}`}
                                className={`col-${fieldsGroup.cols || '12'}`}
                            >
                                <div className={formStyles['form__fields-group']}>
                                    {fieldsGroup.fields.map((field: TypeFormField, fieldIndex: number) => (
                                        <Form.FieldWrapper
                                            key={`form_section_${sectionIndex}_field_${fieldIndex}`}
                                            data={field}
                                            path={[
                                                sectionIndex,
                                                'fieldsGroups',
                                                fieldsGroupIndex,
                                                'fields',
                                                fieldIndex,
                                            ]}
                                            handleInputChange={handleInputChange}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Form>
    );
};
