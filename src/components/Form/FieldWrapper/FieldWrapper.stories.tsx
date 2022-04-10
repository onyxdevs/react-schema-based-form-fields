import { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import FieldWrapper from './FieldWrapper';
import formStyles from 'components/Form/Form.module.scss';
export default {
    title: 'FieldWrapper',
    component: FieldWrapper,
} as Meta;

export const Base: Story = () => {
    const [value, setValue] = useState(true);

    const handleInputChange = () => () => {
        setValue(!value);
    };

    return (
        <div className={formStyles['form__fields-group']}>
            <FieldWrapper
                data={{
                    label: 'Case Management',
                    name: 'case_management',
                    type: 'switch',
                    value,
                }}
                path={[2, 'fields', 1]}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};
