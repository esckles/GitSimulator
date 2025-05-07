import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
import RegisterNotification from "../page/auth/RegisterNotification";
import ForgetPas from "../page/auth/ForgetPas";
import ForgetPasNT from "../page/auth/ForgetPasNT";
import ChangePas from "../page/auth/ChangePas";
// import Otp from "../page/auth/Otp";
import LandinpageLayout from "../layout/LandinpageLayout";
import DashLayout from "../layout/DashLayout";
import DashBoard from "../page/Dash/DashBoard";
// import BackLogin from "../page/auth/BackLogin";
import PrivateRoute from "./PrivateRoute";
import Otp from "../page/auth/Otp";

// import Basic from "../page/Dash/Basic";
// import Devops from "../page/Dash/Devops";

// import BasicLayout from "../layout/BasicLayout";

// import ThreeRemotesCommands from "../page/Dash/BasicCommand/ThreeRemotesCommands";
// import FourStagingandCommitting from "../page/Dash/BasicCommand/FourStagingandCommitting";
// import FiveViewingandComparingChanges from "../page/Dash/BasicCommand/FiveViewingandComparingChanges";
// import SixRevertingandResetting from "../page/Dash/BasicCommand/SixRevertingandResetting";
// import SevenStashing from "../page/Dash/BasicCommand/SevenStashing";
// import EightTags from "../page/Dash/BasicCommand/EightTags";
// import NineGitConfigandinfo from "../page/Dash/BasicCommand/NineGitConfigandinfo";
// import TenGitAliases from "../page/Dash/BasicCommand/TenGitAliases";
// import ElevenGitHooks from "../page/Dash/BasicCommand/ElevenGitHooks";
// import TwelveGitSubmodules from "../page/Dash/BasicCommand/TwelveGitSubmodules";
// import ThirteenGitWorkFlowCommands from "../page/Dash/BasicCommand/ThirteenGitWorkFlowCommands";
// import FourteenGitMergeStragies from "../page/Dash/BasicCommand/FourteenGitMergeStragies";
// import FifteenGitBisect from "../page/Dash/BasicCommand/FifteenGitBisect";
// import SixTeenGitHooksForAutomation from "../page/Dash/BasicCommand/SixTeenGitHooksForAutomation";
// import SeventeenGitCLeanandPrune from "../page/Dash/BasicCommand/SeventeenGitCLeanandPrune";
// import EightTeenGitArchieve from "../page/Dash/BasicCommand/EightTeenGitArchieve";
// import NineTeenGitBlameandAnnonate from "../page/Dash/BasicCommand/NineTeenGitBlameandAnnonate";
// import TwentyGitReflog from "../page/Dash/BasicCommand/TwentyGitReflog";
// import OneGitForContinousintegration from "../page/Dash/Devops/OneGitForContinousintegration";
// import TwoGitForManaginginfastructureasCode from "../page/Dash/Devops/TwoGitForManaginginfastructureasCode";
// import ThreeGitHooksForDevopsAutomation from "../page/Dash/Devops/ThreeGitHooksForDevopsAutomation";
// import FourGitForFeaturesFlagManagement from "../page/Dash/Devops/FourGitForFeaturesFlagManagement";
// import FiveGitForMultiEnvironmentDeployments from "../page/Dash/Devops/FiveGitForMultiEnvironmentDeployments";
// import SixGitandDeploymentAutomation from "../page/Dash/Devops/SixGitandDeploymentAutomation";
// import SevenGitOpsWorkFlow from "../page/Dash/Devops/SevenGitOpsWorkFlow";
// import EightAdvanceGitForManagingCI from "../page/Dash/Devops/EightAdvanceGitForManagingCI";
// import NineGitDockerintegration from "../page/Dash/Devops/NineGitDockerintegration";
// import TenGitandSecretsManagement from "../page/Dash/Devops/TenGitandSecretsManagement";
// import ElevenGitRebaseandInteraticeRebase from "../page/Dash/Devops/ElevenGitRebaseandInteraticeRebase";
// import TwelveGitMergeConflictResolution from "../page/Dash/Devops/TwelveGitMergeConflictResolution";
// import ThirteenGitCommitSigning from "../page/Dash/Devops/ThirteenGitCommitSigning";
// import FourteenGitForContinouseDelivery from "../page/Dash/Devops/FourteenGitForContinouseDelivery";
// import FifteenGitGitRollBacks from "../page/Dash/Devops/FifteenGitGitRollBacks";
// import SixTeenGitSubmodulesandSubtrees from "../page/Dash/Devops/SixTeenGitSubmodulesandSubtrees";
// import SeventeenGitForTeamCollaborationandCodeReview from "../page/Dash/Devops/SeventeenGitForTeamCollaborationandCodeReview";
// import EightTeenGitandContainerizedEnvironments from "../page/Dash/Devops/EightTeenGitandContainerizedEnvironments";
// import NineTeenGitForManagingBuildandDeploymentPipliness from "../page/Dash/Devops/NineTeenGitForManagingBuildandDeploymentPipliness";
// import TwentyGitForDocumentationandVerision from "../page/Dash/Devops/TwentyGitForDocumentationandVerision";
// import TwoBranchingCommands from "../page/Dash/BasicCommand/TwoBranchingcommands";
// import OneBasicGitCommands from "../page/Dash/BasicCommand/OneBasicGitCommands";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandinpageLayout />,

    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        index: true,
        path: "register-nt",
        element: <RegisterNotification />,
      },
      {
        path: "otp/:id",
        element: <Otp />,
      },
      // {
      //   index: true,
      //   path: "backlogin",
      //   element: <BackLogin />,
      // },
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "forget-ps",
        element: <ForgetPas />,
      },
      {
        index: true,
        path: "forget-ps-nt",
        element: <ForgetPasNT />,
      },
      {
        index: true,
        path: "change-ps",
        element: <ChangePas />,
      },
      {
        index: true,
        path: "change-ps/:id",
        element: <ChangePas />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
      // {
      //   index: true,
      //   path: "basic",
      //   element: <Basic />,
      // },
      // {
      //   path: "dev",
      //   index: true,
      //   element: <Devops />,
      // },
    ],
  },
  // {
  //   path: "basics",
  //   element: <BasicLayout />,
  //   children: [
  // {
  //   index: true,
  //   path: "one",
  //   element: <OneBasicGitCommands />,
  // },
  // {
  //   index: true,
  //   path: "two",
  //   element: <TwoBranchingCommands />,
  // },
  //     {
  //       index: true,
  //       path: "three",
  //       element: <ThreeRemotesCommands />,
  //     },
  //     {
  //       index: true,
  //       path: "four",
  //       element: <FourStagingandCommitting />,
  //     },
  //     {
  //       index: true,
  //       path: "five",
  //       element: <FiveViewingandComparingChanges />,
  //     },
  //     {
  //       index: true,
  //       path: "six",
  //       element: <SixRevertingandResetting />,
  //     },
  //     {
  //       index: true,
  //       path: "seven",
  //       element: <SevenStashing />,
  //     },
  //     {
  //       index: true,
  //       path: "eight",
  //       element: <EightTags />,
  //     },
  //     {
  //       index: true,
  //       path: "nine",
  //       element: <NineGitConfigandinfo />,
  //     },
  //     {
  //       index: true,
  //       path: "ten",
  //       element: <TenGitAliases />,
  //     },
  //     {
  //       index: true,
  //       path: "eleven",
  //       element: <ElevenGitHooks />,
  //     },
  //     {
  //       index: true,
  //       path: "twelve",
  //       element: <TwelveGitSubmodules />,
  //     },
  //     {
  //       index: true,
  //       path: "thirteen",
  //       element: <ThirteenGitWorkFlowCommands />,
  //     },
  //     {
  //       index: true,
  //       path: "fourteen",
  //       element: <FourteenGitMergeStragies />,
  //     },
  //     {
  //       index: true,
  //       path: "fifteen",
  //       element: <FifteenGitBisect />,
  //     },
  //     {
  //       index: true,
  //       path: "sixteen",
  //       element: <SixTeenGitHooksForAutomation />,
  //     },
  //     {
  //       index: true,
  //       path: "seventeen",
  //       element: <SeventeenGitCLeanandPrune />,
  //     },
  //     {
  //       index: true,
  //       path: "eighteen",
  //       element: <EightTeenGitArchieve />,
  //     },
  //     {
  //       index: true,
  //       path: "nineteen",
  //       element: <NineTeenGitBlameandAnnonate />,
  //     },
  //     {
  //       index: true,
  //       path: "twenty",
  //       element: <TwentyGitReflog />,
  //     },
  //   ],
  // },
  // {
  //   path: "devops",
  //   element: <BasicLayout />,
  //   children: [
  //     {
  //       index: true,
  //       path: "one",
  //       element: <OneGitForContinousintegration />,
  //     },
  //     {
  //       index: true,
  //       path: "two",
  //       element: <TwoGitForManaginginfastructureasCode />,
  //     },
  //     {
  //       index: true,
  //       path: "three",
  //       element: <ThreeGitHooksForDevopsAutomation />,
  //     },
  //     {
  //       index: true,
  //       path: "four",
  //       element: <FourGitForFeaturesFlagManagement />,
  //     },
  //     {
  //       index: true,
  //       path: "five",
  //       element: <FiveGitForMultiEnvironmentDeployments />,
  //     },
  //     {
  //       index: true,
  //       path: "six",
  //       element: <SixGitandDeploymentAutomation />,
  //     },
  //     {
  //       index: true,
  //       path: "seven",
  //       element: <SevenGitOpsWorkFlow />,
  //     },
  //     {
  //       index: true,
  //       path: "eight",
  //       element: <EightAdvanceGitForManagingCI />,
  //     },
  //     {
  //       index: true,
  //       path: "nine",
  //       element: <NineGitDockerintegration />,
  //     },
  //     {
  //       index: true,
  //       path: "ten",
  //       element: <TenGitandSecretsManagement />,
  //     },
  //     {
  //       index: true,
  //       path: "eleven",
  //       element: <ElevenGitRebaseandInteraticeRebase />,
  //     },
  //     {
  //       index: true,
  //       path: "twelve",
  //       element: <TwelveGitMergeConflictResolution />,
  //     },
  //     {
  //       index: true,
  //       path: "thirteen",
  //       element: <ThirteenGitCommitSigning />,
  //     },
  //     {
  //       index: true,
  //       path: "fourteen",
  //       element: <FourteenGitForContinouseDelivery />,
  //     },
  //     {
  //       index: true,
  //       path: "fifteen",
  //       element: <FifteenGitGitRollBacks />,
  //     },
  //     {
  //       index: true,
  //       path: "sixteen",
  //       element: <SixTeenGitSubmodulesandSubtrees />,
  //     },
  //     {
  //       index: true,
  //       path: "seventeen",
  //       element: <SeventeenGitForTeamCollaborationandCodeReview />,
  //     },
  //     {
  //       index: true,
  //       path: "eighteen",
  //       element: <EightTeenGitandContainerizedEnvironments />,
  //     },
  //     {
  //       index: true,
  //       path: "nineteen",
  //       element: <NineTeenGitForManagingBuildandDeploymentPipliness />,
  //     },
  //     {
  //       index: true,
  //       path: "twenty",
  //       element: <TwentyGitForDocumentationandVerision />,
  //     },
  //   ],
  // },
]);
