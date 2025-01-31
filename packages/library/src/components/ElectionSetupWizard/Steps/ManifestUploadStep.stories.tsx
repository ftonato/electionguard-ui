import { Meta, Story } from '@storybook/react';
import React from 'react';

import delay from '../../../utils/delay';
import ManifestUploadStep, { ManifestUploadStepProps } from './ManifestUploadStep';

export default {
    title: 'Wizards/Election Setup/Steps/ManifestUploadStep',
    component: ManifestUploadStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ManifestUploadStepProps> = (props) => <ManifestUploadStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    uploadManifest: async () => {
        await delay(5000);
        return true;
    },
};

export const Error = Template.bind({});
Error.storyName = 'Error on Upload';
Error.args = {
    uploadManifest: async () => {
        await delay(5000);
        return false;
    },
};
