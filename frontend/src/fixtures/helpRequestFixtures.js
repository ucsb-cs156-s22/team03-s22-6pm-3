const helpRequestFixtures = {
    oneHelpRequest: {
        "id": 1,
        "requesterEmail": "requesterEmail",
        "teamId": "teamId",
        "tableOrBreakoutRoom": "tableOrBreakoutRoom" ,
        "requestTime": "2002-04-03T10:00:00",
        "explanation": "explanation",
        "solved": true
    },
    threeHelpRequests: [ {
        "id": 1,
        "requesterEmail": "requesterEmail",
        "teamId": "teamId",
        "tableOrBreakoutRoom": "tableOrBreakoutRoom" ,
        "requestTime": "2002-04-03T10:00:00",
        "explanation": "explanation",
        "solved": true
    },
    {
        "id": 2,
        "requesterEmail": "requesterEmail2",
        "teamId": "teamId2",
        "tableOrBreakoutRoom": "tableOrBreakoutRoom2" ,
        "requestTime": "2012-04-03T10:00:00",
        "explanation": "explanation2",
        "solved": false
    },
    {
        "id": 3,
        "requesterEmail": "requesterEmail3",
        "teamId": "teamId3",
        "tableOrBreakoutRoom": "tableOrBreakoutRoom3" ,
        "requestTime": "2022-04-03T10:00:00",
        "explanation": "explanation3",
        "solved": true
    }]
};

export { helpRequestFixtures };