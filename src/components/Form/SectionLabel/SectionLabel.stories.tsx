import { Meta, Story } from '@storybook/react/types-6-0';

import SectionLabel from './SectionLabel';
export default {
    title: 'SectionLabel',
    component: SectionLabel,
} as Meta;

export const Base: Story = () => <SectionLabel>Section Label</SectionLabel>;
