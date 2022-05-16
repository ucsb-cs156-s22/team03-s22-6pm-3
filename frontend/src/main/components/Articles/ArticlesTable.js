import OurTable from "main/components/OurTable";
// import { useBackendMutation } from "main/utils/useBackend";
// import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
//import { hasRole } from "main/utils/currentUser";

export default function ArticlesTable({ articles, _currentUser }) {

    //const navigate = useNavigate();

    //const editCallback = (cell) => {
    //    navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    //}

    // Stryker disable all : hard to test for query caching
    //const deleteMutation = useBackendMutation(
    //    cellToAxiosParamsDelete,
    //    { onSuccess: onDeleteSuccess },
    //    ["/api/ucsbdates/all"]
    //);
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    // const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }
    
    //String title
    //String url
    //String explanation
    //String email (of person that submitted it)
    //LocalDateTime dateAdded
    const columns = [
        {
            Header: 'Title',
            accessor: 'title', 
        },
        {
            Header: 'Url',
            accessor: 'url',
        },
        {
            Header: 'Explanation',
            accessor: 'explanation',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'DateAdded',
            accessor: 'dateAdded',
        }
    ];
    /*
    const columnsIfAdmin = [
        ...columns,
        ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
        ButtonColumn("Delete", "danger", deleteCallback, "UCSBDatesTable")
    ];
    */
    //const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    const columnsToDisplay = columns;
    return <OurTable
        data={articles}
        columns={columnsToDisplay}
        testid={"ArticlesTable"}
    />;
};