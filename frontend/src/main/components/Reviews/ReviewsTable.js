//import OurTable, { ButtonColumn} from "main/components/OurTable";
import OurTable from "main/components/OurTable";
//import { useBackendMutation } from "main/utils/useBackend";
//import {  onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";


// export function cellToAxiosParamsDelete(cell) {
//     return {
//         url: "/api/MenuItemReview",
//         method: "DELETE",
//         params: {
//             code: cell.row.values.code
//         }
//     }
// }

export default function ReviewsTable({ reviews, currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/ucsbdiningcommons/all"]
    // );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
  //  const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'Id',
            accessor: 'id', 
        },
        {
            Header: 'Item Id',
            accessor: 'itemId',
        },
        {
            Header: 'Reviewer\'s Email',
            accessor: 'reviewerEmail', 
        },
        {
            Header: 'Stars',
            accessor: 'stars', 
        },
        {
            Header: 'Date Reviewed',
            accessor: 'dateReviewed', 
        },
        {
            Header: 'Comments',
            accessor: 'comments',
        }
    ];

    const testid = "ReviewsTable";

    const columnsIfAdmin = [
        ...columns,
        // ButtonColumn("Edit", "primary", editCallback, testid),
        // ButtonColumn("Delete", "danger", deleteCallback, testid)
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={reviews}
        columns={columnsToDisplay}
        testid={testid}
    />;
};