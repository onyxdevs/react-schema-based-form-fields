import { Meta, Story } from '@storybook/react/types-6-0';

import Select from './Select';
export default {
    title: 'Select',
    component: Select,
} as Meta;

export const Base: Story = () => (
    <Select
        data={{
            label: 'Count',
            name: 'count',
            type: 'select',
            value: '',
            options: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8', value: '8' },
                { label: '9', value: '9' },
                { label: '10', value: '10' },
            ],
        }}
        onChange={() => {}}
    />
);
