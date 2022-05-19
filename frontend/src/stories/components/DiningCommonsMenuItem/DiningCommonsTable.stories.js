import React from 'react';

import DiningCommonsMenuItemTable from 'main/components/DiningCommonsMenuItem/DiningCommonsMenuItemTable';
import { UCSBDiningCommonsMenuItemFixtures } from 'fixtures/UCSBDiningCommonsMenuItemFixtures';
// import { ucsbDatesFixtures } from 'fixtures/ucsbDatesFixtures';
// import { UCSBDiningCommonsMenuItemFixtures } from 'fixtures/UCSBDiningCommonsMenuItemFixtures';

export default {
    title: 'components/DiningCommonsMenuItem/DiningCommonsMenuItemTable',
    component: DiningCommonsMenuItemTable
};

const Template = (args) => {
    return (
        <DiningCommonsMenuItemTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    UCSBDiningCommonsMenuItem: []
};

export const threeItems = Template.bind({});

threeItems.args = {
    UCSBDiningCommonsMenuItem: UCSBDiningCommonsMenuItemFixtures.threeItems
};


