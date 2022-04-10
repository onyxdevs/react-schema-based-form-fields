import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Button from './Button';
export default {
    title: 'Button',
    component: Button,
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
} as Meta;

export const Base: Story = () => <Button type="button">Button</Button>;
