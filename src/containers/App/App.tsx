import { useState } from 'react';
import get from 'lodash/get';

import { TypeFormSection, TypeHandleInputChange, TypeFormField, TypeFormFieldGroup } from 'components/Form/Types';
import { Form, Button } from 'components';
import { updateObjectValueByPath, getFormValues } from 'lib/helpers';

import formStyles from 'components/Form/Form.module.scss';

import formSchema from 'schemas/formSchema.json';

export default function App() {
    const [form, setForm] = useState<TypeFormSection[]>(formSchema);

    const handleFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        alert('🎉 Hooray! check the console to see the values.');
        const formFlattened = form
            .map((formSection) => formSection.fieldsGroups)
            .flat()
            .map((fieldsGroups) => fieldsGroups.fields)
            .flat();
        console.log('🎉 Hooray!', getFormValues(formFlattened));
    };

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
        <div className="container main">
            <Form onSubmit={handleFormSubmit}>
                {form.map((section, sectionIndex) => (
                    <div key={`form_section_${sectionIndex}`} className={`col-${section.cols || '12'}`}>
                        <Form.SectionLabel>{section.label}</Form.SectionLabel>

                        <div className="row">
                            {section.fieldsGroups.map((fieldsGroup: TypeFormFieldGroup, fieldsGroupIndex: number) => (
                                <div
                                    key={`form_${sectionIndex}_group_${fieldsGroupIndex}`}
                                    className={`col-${fieldsGroup.cols || '12'}`}
                                >
                                    <div className={formStyles['form__fields-group']}>
                                        {fieldsGroup.fields.map((field: TypeFormField, fieldIndex: number) => (
                                            <Form.FieldWrapper
                                                key={`form_${sectionIndex}_field_${fieldIndex}`}
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

                <div className="col-12 text-center">
                    <Button type="submit">View Results</Button>
                </div>
            </Form>
        </div>
    );
}
