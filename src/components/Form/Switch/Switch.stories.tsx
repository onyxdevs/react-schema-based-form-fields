import { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Switch from './Switch';
export default {
    title: 'Switch',
    component: Switch,
} as Meta;

export const Base: Story = () => {
    const [value, setValue] = useState(true);

    const handleInputChange = () => () => {
        setValue(!value);
    };

    return (
        <Switch
            data={{
                label: 'Case Management',
                name: 'case_management',
                type: 'switch',
                value,
            }}
            onChange={handleInputChange()}
        />
    );
};
