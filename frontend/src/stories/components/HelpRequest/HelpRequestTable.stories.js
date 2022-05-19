import React from 'react';

import HelpRequestTable from 'main/components/HelpRequest/HelpRequestTable';
import { helpRequestFixtures } from 'fixtures/helpRequestFixtures';

export default {
    title: 'components/HelpRequest/HelpRequestTable',
    component: HelpRequestTable
};

const Template = (args) => {
    return (
        <HelpRequestTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    request: []
};

export const ThreeHelpRequests = Template.bind({});

ThreeHelpRequests.args = {
    request: helpRequestFixtures.threeHelpRequests
}; 