/*import React from 'react' //changed this page
import { useBackend } from 'main/utils/useBackend'; // use prefix indicates a React Hook

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import UCSBOrganizationTable from 'main/components/UCSBOrganization/UCSBOrganizationTable';
import { useCurrentUser } from 'main/utils/currentUser' // use prefix indicates a React Hook

export default function UCSBOrganizationIndexPage() {

  const currentUser = useCurrentUser();

  const { data: UCSBOrganization, error: _error, status: _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      ["/api/ucsborganization/all"],
            // Stryker disable next-line StringLiteral,ObjectLiteral : since "GET" is default, "" is an equivalent mutation
            { method: "GET", url: "/api/ucsborganization/all" },
      []
    );

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>UCSB Organizations</h1>
        <UCSBOrganizationTable UCSBOrganization={UCSBOrganization} currentUser={currentUser} />
      </div>
    </BasicLayout>
  )
}*/

import React from 'react'
import { useBackend } from 'main/utils/useBackend'; // use prefix indicates a React Hook

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import UCSBOrganizationTable from 'main/components/UCSBOrganization/UCSBOrganizationTable';
import { useCurrentUser } from 'main/utils/currentUser' // use prefix indicates a React Hook

export default function UCSBOrganizationIndexPage() {

  const currentUser = useCurrentUser();

  const { data: UCSBOrganization, error: _error, status: _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      ["/api/ucsborganization/all"],
            // Stryker disable next-line StringLiteral,ObjectLiteral : since "GET" is default, "" is an equivalent mutation
            { method: "GET", url: "/api/ucsborganization/all" },
      []
      //mutation test failing here. stryker says that this can be ignored due to static mutation
      //https://stryker-mutator.io/docs/mutation-testing-elements/static-mutants/
    );

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>UCSB Organization</h1>
        <UCSBOrganizationTable UCSBOrganization={UCSBOrganization} currentUser={currentUser} />
      </div>
    </BasicLayout>
  )
}
