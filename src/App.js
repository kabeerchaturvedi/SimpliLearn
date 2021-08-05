import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./pages/Header";
import CoursesList from "./components/coursesList";
import ConfirmCourseDetails from "./components/confirmCourse";
import BoughtCourses from "./components/boughtCourses";
import MyCourses from "./components/MyCourses";

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div>
      {userInfo ? (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/courses" component={CoursesList} />
            <Route exact path="/" />
            <Route exact path="/logout" component={Logout} />
            <Route
              exact
              path="/booking-confirmations/:courseId/:price/:name"
              component={ConfirmCourseDetails}
            />
            <Route exact path="/validate/:courseId" component={BoughtCourses} />
            <Route exact path="/my-courses/:courseId" component={MyCourses} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/courses" component={CoursesList} />
            <Route exact path="/" />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
