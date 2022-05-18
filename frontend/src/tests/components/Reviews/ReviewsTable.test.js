import {  render } from "@testing-library/react";
//import { diningCommonsFixtures } from "fixtures/diningCommonsFixtures";
import ReviewsTable from "main/components/Reviews/ReviewsTable";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { currentUserFixtures } from "fixtures/currentUserFixtures";


const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("ReviewsTable tests", () => {
  const queryClient = new QueryClient();


  test("renders without crashing for empty table with user not logged in", () => {
    const currentUser = null;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ReviewsTable reviews={[]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );
  });
  test("renders without crashing for empty table for ordinary user", () => {
    const currentUser = currentUserFixtures.userOnly;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ReviewsTable reviews={[]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );
  });

  test("renders without crashing for empty table for admin", () => {
    const currentUser = currentUserFixtures.adminUser;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ReviewsTable reviews={[]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );
  });

  test("w/o using fixtures: Has the expected column headers and content for adminUser", () => {

    const currentUser = currentUserFixtures.adminUser;

    const { getByText, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ReviewsTable reviews={[{
                "id": 0,
                "itemId": 1,
                "reviewerEmail": "y@ucsb.edu",
                "stars": 3,
                "dateReviewed": "2022-05-18T07:06:00",
                "comments": "This is a test w/o using fixtures"
            }]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );


    const expectedHeaders = ['Id',  'Item Id', 'Reviewer\'s Email','Stars','Date Reviewed','Comments'];
    const expectedFields = ['id', 'itemId','reviewerEmail', 'stars','dateReviewed','comments'];
    const testId = "ReviewsTable";

    expectedHeaders.forEach((headerText) => {
      const header = getByText(headerText);
      expect(header).toBeInTheDocument();
    });

    expectedFields.forEach((field) => {
      const header = getByTestId(`${testId}-cell-row-0-col-${field}`);
      expect(header).toBeInTheDocument();
    });

    expect(getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent("0");
    expect(getByTestId(`${testId}-cell-row-0-col-reviewerEmail`)).toHaveTextContent("y@ucsb.edu");

    // const editButton = getByTestId(`${testId}-cell-row-0-col-Edit-button`);
    // expect(editButton).toBeInTheDocument();
    // expect(editButton).toHaveClass("btn-primary");

    const deleteButton = getByTestId(`${testId}-cell-row-0-col-Delete-button`);
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass("btn-danger");

  });

//   test("Has the expected column headers and content for adminUser", () => {

//     const currentUser = currentUserFixtures.adminUser;

//     const { getByText, getByTestId } = render(
//       <QueryClientProvider client={queryClient}>
//         <MemoryRouter>
//           <ReviewsTable diningCommons={diningCommonsFixtures.threeCommons} currentUser={currentUser} />
//         </MemoryRouter>
//       </QueryClientProvider>

//     );


//     const expectedHeaders = ['Code',  'Name', 'Sack Meal?','Takeout Meal?','Dining Cam?','Latitude','Longitude'];
//     const expectedFields = ['code', 'name','hasSackMeal', 'hasTakeOutMeal','hasDiningCam','latitude','longitude'];
//     const testId = "ReviewsTable";

//     expectedHeaders.forEach((headerText) => {
//       const header = getByText(headerText);
//       expect(header).toBeInTheDocument();
//     });

//     expectedFields.forEach((field) => {
//       const header = getByTestId(`${testId}-cell-row-0-col-${field}`);
//       expect(header).toBeInTheDocument();
//     });

//     expect(getByTestId(`${testId}-cell-row-0-col-code`)).toHaveTextContent("de-la-guerra");
//     expect(getByTestId(`${testId}-cell-row-1-col-code`)).toHaveTextContent("ortega");
//     expect(getByTestId(`${testId}-cell-row-0-col-name`)).toHaveTextContent("De La Guerra");
//     expect(getByTestId(`${testId}-cell-row-1-col-name`)).toHaveTextContent("Ortega");

//     // const editButton = getByTestId(`${testId}-cell-row-0-col-Edit-button`);
//     // expect(editButton).toBeInTheDocument();
//     // expect(editButton).toHaveClass("btn-primary");

//     const deleteButton = getByTestId(`${testId}-cell-row-0-col-Delete-button`);
//     expect(deleteButton).toBeInTheDocument();
//     expect(deleteButton).toHaveClass("btn-danger");

//   });

  // test("Edit button navigates to the edit page for admin user", async () => {

  //   const currentUser = currentUserFixtures.adminUser;

  //   const { getByTestId } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <MemoryRouter>
  //         <UCSBDatesTable diningCommons={ucsbDatesFixtures.threeDates} currentUser={currentUser} />
  //       </MemoryRouter>
  //     </QueryClientProvider>

  //   );

  //   await waitFor(() => { expect(getByTestId(`UCSBDatesTable-cell-row-0-col-id`)).toHaveTextContent("1"); });

  //   const editButton = getByTestId(`UCSBDatesTable-cell-row-0-col-Edit-button`);
  //   expect(editButton).toBeInTheDocument();
    
  //   fireEvent.click(editButton);

  //   await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('/ucsbdates/edit/1'));

  // });

});

