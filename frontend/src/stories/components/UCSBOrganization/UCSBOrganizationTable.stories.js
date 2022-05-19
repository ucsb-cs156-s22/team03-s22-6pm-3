import React from 'react';

import UCSBOrganizationTable from "main/components/UCSBOrganization/UCSBOrganizationTable";
import { ucsbOrganizationFixtures } from 'fixtures/ucsbOrganizationFixtures';

export default {
    title: 'components/UCSBOrganization/UCSBOrganizationTable',
    component: UCSBOrganizationTable
};

const Template = (args) => {
    return (
        <UCSBOrganizationTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    UCSBOrganization: []
};

export const ThreeOrgs = Template.bind({});

ThreeOrgs.args = {
    UCSBOrganization: ucsbOrganizationFixtures.threeOrgs
};

