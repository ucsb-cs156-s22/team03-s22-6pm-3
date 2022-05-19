import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import ProfilePage from "main/pages/ProfilePage";
import AdminUsersPage from "main/pages/AdminUsersPage";

import TodosIndexPage from "main/pages/Todos/TodosIndexPage";
import TodosCreatePage from "main/pages/Todos/TodosCreatePage";
import TodosEditPage from "main/pages/Todos/TodosEditPage";

import DiningCommonsIndexPage from "main/pages/DiningCommons/DiningCommonsIndexPage";
import UCSBOrganizationIndexPage from "main/pages/UCSBOrganization/UCSBOrganizationIndexPage";//changed org
import ReviewsIndexPage from "main/pages/Reviews/ReviewsIndexPage";

import UCSBDatesIndexPage from "main/pages/UCSBDates/UCSBDatesIndexPage";
import UCSBDatesCreatePage from "main/pages/UCSBDates/UCSBDatesCreatePage";
import UCSBDatesEditPage from "main/pages/UCSBDates/UCSBDatesEditPage";
import UCSBDiningCommonsMenuItemIndexPage from "main/pages/UCBSDiningCommonsMenuItem/UCSBDiningCommonsMenuItemIndexPage";



import ArticleIndexPage from "main/pages/Article/ArticleIndexPage";

import { hasRole, useCurrentUser } from "main/utils/currentUser";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  const { data: currentUser } = useCurrentUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        {
          hasRole(currentUser, "ROLE_ADMIN") && <Route exact path="/admin/users" element={<AdminUsersPage />} />
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/todos/list" element={<TodosIndexPage />} />
              <Route exact path="/todos/create" element={<TodosCreatePage />} />
              <Route exact path="/todos/edit/:todoId" element={<TodosEditPage />} />
            </>
          )
        }
        {//Org
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/DiningCommons/list" element={<DiningCommonsIndexPage />} />
            </>
          )
        }

        {/* Organizaton */}
        {//Org
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/UCSBOrganization/list" element={<UCSBOrganizationIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/reviews/list" element={<ReviewsIndexPage />} />
            </>
          )
        }

        {/*
          hasRole(currentUser, "ROLE_USER") && (
            <>

              <Route exact path="/reviews/list" element={<ReviewsIndexPage />} />
            </>
          )
          */
        } 


         {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/UCSBDiningCommonsMenuItem/list" element={<UCSBDiningCommonsMenuItemIndexPage />} />
            </>
          )
        }
        {/*
         hasRole(currentUser, "ROLE_USER") && (
           <>
             <Route exact path="/UCSBDiningCommonsMenuItem/list" element={<UCSBDiningCommonsMenuItemIndexPage />} />
           </>
         )
         */
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/article/list" element={<ArticleIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsbdates/list" element={<UCSBDatesIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_ADMIN") && (
            <>
              <Route exact path="/ucsbdates/edit/:id" element={<UCSBDatesEditPage />} />
              <Route exact path="/ucsbdates/create" element={<UCSBDatesCreatePage />} />
            </>
          )
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
