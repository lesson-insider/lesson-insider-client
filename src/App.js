import "./App.css";

import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";
import Feature from "./pages/Feature/Feature";
import Mentorship from "./pages/Mentorship/Mentorship";
import Notes from "./pages/Notes/Notes";
import Tutorials from "./pages/Tutorials/Tutorials";
import UserProfile from "./pages/User/UserProfile/UserProfile";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import MainNavbar from "./components/Common/MainNavbar/MainNavbar";
import Footer from "./components/Common/Footer/Footer";
import UsersHome from "./pages/UsersHome/UsersHome";
import UserAbout from "./pages/User/UserAbout/UserAbout";
import UserFeatures from "./pages/User/UserFeatures/UserFeatures";
import UserMentorship from "./pages/User/UserMentorships/UserMentorship";
import UserNotes from "./pages/User/UserNotes/UserNotes";
import UserTutorials from "./pages/User/UserTutorials/UserTutorials";
import UserSendMoney from "./pages/User/UserSendMoney/UserSendMoney";
import UserBalance from "./pages/User/UserBalance/UserBalance";
import Discussion from "./pages/Discussion/Discussion";
import AboutUs from "./pages/FooterComponents/AboutUs/AboutUs";
import ContactUs from "./pages/FooterComponents/ContactUs/ContactUs";
import FrequentlyAskingQuestions from "./pages/FooterComponents/FrequentlyAskingQuestions/FrequentlyAskingQuestions";
import NextGoal from "./pages/FooterComponents/NextGoal/NextGoal";
import PrivacyPolicy from "./pages/FooterComponents/PrivacyPolicy/PrivacyPolicy";
import Recruitment from "./pages/FooterComponents/Recruitment/Recruitment";
import TermsAndCondition from "./pages/FooterComponents/TermsAndCondition/TermsAndCondition";
import ShareIdea from "./pages/FooterComponents/ShareIdea/ShareIdea";
import ReportProblem from "./pages/FooterComponents/ReportProblem/ReportProblem";

function App() {
    const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <Router>
            <MainNavbar />
            <Routes>
                <Route path="/" exact element={<Home replace to="/home" />} />
                {/* -------Main Navbar Start-------------------------------------- */}
                <Route path="/home" exact element={<Home />} />
                <Route path="/home/search" exact element={<Home />} />

                <Route path="/user/home" exact element={<UsersHome />} />

                <Route path="/mentorship" exact element={<Mentorship />} />
                <Route path="/feature" exact element={<Feature />} />
                <Route path="/tutorials" exact element={<Tutorials />} />
                <Route path="/discussion" exact element={<Discussion />} />
                <Route path="/notes" exact element={<Notes />} />

                <Route
                    path="/auth"
                    exact
                    element={
                        !user ? (
                            <Authentication />
                        ) : (
                            <Navigate replace to="/home" />
                        )
                    }
                />

                {/* -------Main Navbar Ends-------------------------------------- */}
                {/* -------User Navbar Start-------------------------------------- */}
                <Route path="/user/:id" exact element={<UserProfile />} />
                <Route path="/user/:id/about" exact element={<UserAbout />} />
                <Route
                    path="/user/:id/features"
                    exact
                    element={<UserFeatures />}
                />
                <Route
                    path="/user/:id/mentorship"
                    exact
                    element={<UserMentorship />}
                />
                <Route path="/user/:id/notes" exact element={<UserNotes />} />
                <Route
                    path="/user/:id/tutorials"
                    exact
                    element={<UserTutorials />}
                />
                <Route
                    path="/user/:id/sendMoney"
                    exact
                    element={<UserSendMoney />}
                />
                <Route
                    path="/user/:id/balance"
                    exact
                    element={<UserBalance />}
                />

                {/* -------User Navbar Ends-------------------------------------- */}
                {/* -------Footer Navbar Start-------------------------------------- */}
                <Route path="/contact-us" exact element={<ContactUs />} />
                <Route
                    path="/privacy-policy"
                    exact
                    element={<PrivacyPolicy />}
                />
                <Route path="/toc" exact element={<TermsAndCondition />} />
                <Route
                    path="/faq"
                    exact
                    element={<FrequentlyAskingQuestions />}
                />
                <Route path="/about-us" exact element={<AboutUs />} />
                <Route path="/next-goal" exact element={<NextGoal />} />
                <Route path="/recruitment" exact element={<Recruitment />} />
                <Route path="/share-idea" exact element={<ShareIdea />} />
                <Route
                    path="/report-problem"
                    exact
                    element={<ReportProblem />}
                />
                {/* -------Footer Navbar Ends-------------------------------------- */}
            </Routes>
        </Router>
    );
}

export default App;
