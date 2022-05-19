const reviewsFixtures = {
    oneReview: {
        "id": 1,
        "itemId": 13,
        "reviewerEmail": "y@ucsb.edu",
        "stars": 4,
        "dateReviewed": "2022-05-18T09:33:00",
        "comments": "this is my first review",
    },
    threeReviews: [
        {
            "id": 1,
            "itemId": 13,
            "reviewerEmail": "y@ucsb.edu",
            "stars": 4,
            "dateReviewed": "2022-05-18T09:33:00",
            "comments": "this is my first review",
        },
        {
            "id": 2,
            "itemId": 42,
            "reviewerEmail": "e@ucsb.edu",
            "stars":2,
            "dateReviewed": "2021-05-18T09:33:00",
            "comments": "this is my second review",
        },
        {
            "id": 3,
            "itemId": 19,
            "reviewerEmail": "s@ucsb.edu",
            "stars": 5,
            "dateReviewed": "2020-05-18T09:33:00",
            "comments": "this is my third review",
        } 
    ]
};


export { reviewsFixtures };