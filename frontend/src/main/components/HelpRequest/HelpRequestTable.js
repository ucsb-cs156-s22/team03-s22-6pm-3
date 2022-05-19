import OurTable from "main/components/OurTable";
//import { useBackendMutation } from "main/utils/useBackend";
//import { onDeleteSuccess } from "main/utils/UCSBDateUtils"
//import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";


export default function HelpRequestTable({ helpRequest, currentUser }) {
    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Requester Email',
            accessor: 'requesterEmail',
        },
        {
            Header: 'Team Id',
            accessor: 'teamId',
        },
        {
            Header: 'Table or Breakout Room',
            accessor: 'tableOrBreakoutRoom',
        },
        {
            Header: 'Request Time',
            accessor: 'requestTime',
        },
        {
            Header: 'Explanation',
            accessor: 'explanation',
        },
        {
            Header: 'Solved',
            accessor: (row, _rowIndex) => String(row.solved),
            id: 'solved',
        }
    ];

    //const testid = "HelpRequestTable";

    const columnsIfAdmin = [
        ...columns,

    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={helpRequest}
        columns={columnsToDisplay}
        testid={"HelpRequestTable"}
    />;
};