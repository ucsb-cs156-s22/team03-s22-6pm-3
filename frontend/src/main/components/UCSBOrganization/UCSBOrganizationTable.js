import OurTable/*, { ButtonColumn }*/ from "main/components/OurTable";
//import { useBackendMutation } from "main/utils/useBackend";
//import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBOrganizationUtils"
//import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function UCSBOrganizationTable({ UCSBOrganization, currentUser }) {

    //const navigate = useNavigate();//

    // const editCallback = (cell) => {//
    //     navigate(`/UCSBOrganization/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(//
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/UCSBOrganization/all"]
    // );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    //const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }//

    /*
    "orgCode": "A",
    "orgTranslationShort": "ABC",
    "orgTranslation": "AB",
    "inactive": false
    */

    const columns = [
        {
            Header: 'orgCode',
            accessor: 'orgCode', // accessor is the "key" in the data
        },
        {
            Header: 'orgTranslationShort',
            accessor: 'orgTranslationShort',
        },
        {
            Header: 'orgTranslation',
            accessor: 'orgTranslation',
        },
        {
            Header: 'inactive',
            //accessor: 'inactive',
            accessor: (row, _rowIndex) => String(row.inactive) // hack needed for boolean values to show up

        }
    ];

    const columnsIfAdmin = [//
        ...columns,
        //ButtonColumn("Edit", "primary", editCallback, "UCSBOrganizationTable"),
        //ButtonColumn("Delete", "danger", deleteCallback, "UCSBOrganizationTable")
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={UCSBOrganization}
        columns={columnsToDisplay}
        testid={"UCSBOrganizationTable"}
    />;
};
