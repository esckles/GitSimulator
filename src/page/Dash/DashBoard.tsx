/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
// const DashBoard = () => {
//   return (
//     <>
//       <div className="w-full h-[40px] bg-blue-100  flex items-center justify-center rounded-md text-[12px] font-semibold">
//         <div>Select a level</div>
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import { CgMoon, CgSun } from "react-icons/cg";

// export default DashBoard;

const GitCommandDescription = [
  {
    Git: "git init",
    GitTitle: " new Git repository in the current .",
    GitTitle2:
      "directory version control, even though it doesn't add any files to version control just yet.",
  },
  {
    Git: "git clone <repo_url>",
    GitTitle: "Clones an existing",
    GitTitle2:
      "remote repository to your local machine.This creates a full local copy of the repository, including its history.",
  },
  {
    Git: "git status",
    GitTitle: "the state of the working directory",
    GitTitle2:
      " and staging area. It shows which changes have been staged, which haven’t, and which files aren’t being tracked by Git.",
  },
  {
    Git: "git add",
    GitTitle: "Stages changes to be committed.",
    GitTitle2:
      " You can add specific files, folders, or use git add . to stage all modified and new files.",
  },
  {
    Git: 'git commit -m "messaage" ',
    GitTitle: "the staged ",
    GitTitle2:
      "snapshot to the project history. The -m flag lets you include a commit message describing the changes.",
  },
  {
    Git: "git push",
    GitTitle: "local repository content to a remote",
    GitTitle2:
      "repository. It's used to publish your commits so others can see them.",
  },
  {
    Git: "git pull",
    GitTitle: "changes from the remote repository ",
    GitTitle2:
      " and merges them into your current branch. Combines git fetch and git merge.",
  },
  {
    Git: "git fetch",
    GitTitle: "Downloads object ",
    GitTitle2:
      "commits, files, and references from a remote repository without modifying your working directory.",
  },
  {
    Git: "git merge",
    GitTitle: "Merges changes",
    GitTitle2:
      "Integrates changes from another branch into the current branch.",
  },
  {
    Git: "git log",
    GitTitle: "a detailed list of all commits ",
    GitTitle2:
      "  in the current branch's history, including author, date, and commit message.",
  },
  {
    Git: "git diff",
    GitTitle: "Shows the diffrences between files,",
    GitTitle2: "showing what has changed before committing.",
  },
  {
    Git: "git branch",
    GitTitle: "Creates a new branch without",
    GitTitle2: "switching to it.",
  },
  {
    Git: "git checkout",
    GitTitle: "Switches to another branch.",
    GitTitle2: "",
  },
  {
    Git: "git reverts",
    GitTitle: "Undoes the changes of a specific ",
    GitTitle2: "commit by creating a new commit.",
  },
  {
    Git: "git reset ",
    GitTitle: " is a powerful Git command used to",
    GitTitle2:
      "undo changes by moving the current HEAD (the pointer to your current branch’s latest commit) to a different commit. Depending on how you use it.",
  },
];

const DashBoard = () => {
  // const { userID }: any = useContext(GlobalContext);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [commits, setCommits] = useState<{ id: number; message: string }[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [branches, setBranches] = useState<
    { name: string; commits: { id: number; message: string }[] }[]
  >([{ name: "main", commits: [] }]);
  const [currentBranch, setCurrentBranch] = useState("main");
  const [commitCount, setCommitCount] = useState(0);
  const [darkMode, setdarkMode] = useState<boolean>(false);
  // const [user, setUser] = useState<any>({});
  // const [SW, setSW] = useState<boolean>(false);

  // useEffect(() => {
  //   ReadOneUSerAccount(userID).then((res) => {
  //     if (res.status === 200) {
  //       setUser(res.data);
  //     }
  //   });
  // }, []);

  const SwitchMode: React.CSSProperties = {
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "black" : "white",
    transition: "background-color 1s ease-in",
  };
  const handleSwitchMode = () => {
    setdarkMode(!darkMode);
  };

  const handleCommand = () => {
    let cmd = input.trim();
    let newLogs = [...logs, `$ ${cmd}`];

    if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    }
    if (cmd === "reset") {
      setLogs([]);
      setCommits([]);
      setInitialized(false);
      setBranches([{ name: "main", commits: [] }]);
      setCurrentBranch("main");
      setCommitCount(0);
      setInput("");
      return;
    }

    // STAGE 1: git init
    if (cmd === "git init") {
      setInitialized(true);
      newLogs.push("Initialized empty Git repository");
    }

    // STAGE 2: git status
    else if (cmd === "git status") {
      newLogs.push(
        initialized
          ? commits.length === 0
            ? "No commits yet. Everything is untracked."
            : `On branch ${currentBranch}\n${commits.length} commit(s) made.`
          : "Repository not initialized. Run git init first."
      );
    }

    // STAGE 3: git add .
    else if (cmd === "git add .") {
      newLogs.push(
        initialized
          ? "Staged all files for commit."
          : "Repository not initialized. Run git init first."
      );
    }

    // STAGE 4: git commit
    else if (cmd.startsWith("git commit")) {
      if (!initialized) {
        newLogs.push("Repository not initialized. Run git init first.");
      } else {
        const messageMatch = cmd.match(/-m\s+['"](.+)['"]/);
        const message = messageMatch
          ? messageMatch[1]
          : `commit-${commitCount + 1}`;
        const newCommit = { id: commitCount + 1, message };
        setCommitCount(commitCount + 1);
        setCommits([...commits, newCommit]);

        const updatedBranches = branches.map((branch) =>
          branch.name === currentBranch
            ? { ...branch, commits: [...branch.commits, newCommit] }
            : branch
        );
        setBranches(updatedBranches);

        newLogs.push(`Committed with message: '${message}'`);
      }
    }

    // STAGE 5: git branch <name>
    else if (cmd.startsWith("git branch")) {
      const parts = cmd.split(" ");
      const newBranchName = parts[2];

      if (!newBranchName) {
        newLogs.push("Please provide a branch name, e.g., git branch dev");
      } else {
        const exists = branches.find((b) => b.name === newBranchName);
        if (exists) {
          newLogs.push(`Branch '${newBranchName}' already exists.`);
        } else {
          setBranches([...branches, { name: newBranchName, commits: [] }]);
          newLogs.push(`Branch '${newBranchName}' created.`);
        }
      }
    }

    // STAGE 6: git checkout <branch>
    else if (cmd.startsWith("git checkout")) {
      const parts = cmd.split(" ");
      const branchName = parts[2];
      const exists = branches.find((b) => b.name === branchName);
      if (exists) {
        setCurrentBranch(branchName);
        newLogs.push(`Switched to branch '${branchName}'`);
      } else {
        newLogs.push(`Branch '${branchName}' does not exist.`);
      }
    }

    // STAGE 7: git log
    else if (cmd === "git log") {
      if (!initialized) {
        newLogs.push("Repository not initialized. Run git init first.");
      } else {
        const branch = branches.find((b) => b.name === currentBranch);
        if (branch && branch.commits.length > 0) {
          branch.commits
            .slice()
            .reverse()
            .forEach((c: any) => newLogs.push(`commit-${c.id}: ${c.message}`));
        } else {
          newLogs.push("No commits yet.");
        }
      }
    }

    // STAGE 8: git merge <branch>
    else if (cmd.startsWith("git merge")) {
      const parts = cmd.split(" ");
      const mergeBranchName = parts[2];
      const mergeBranch = branches.find((b) => b.name === mergeBranchName);
      const current = branches.find((b) => b.name === currentBranch);

      if (mergeBranch && current && mergeBranchName !== currentBranch) {
        const mergedCommits = [...current.commits, ...mergeBranch.commits];
        const uniqueCommits = Array.from(
          new Set(mergedCommits.map((c: any) => c.message))
        ).map((msg, i) => ({ id: i + 1, message: msg }));
        current.commits = uniqueCommits;
        newLogs.push(
          `Merged branch '${mergeBranchName}' into '${currentBranch}'`
        );
      } else {
        newLogs.push(
          "Invalid merge. Ensure both branches exist and are different."
        );
      }
    }

    // STAGE 9: git remote add origin <url>
    else if (cmd.startsWith("git remote add origin")) {
      const url = cmd.split(" ")[4];
      if (url) {
        newLogs.push(`Remote 'origin' set to ${url}`);
      } else {
        newLogs.push("Please provide a remote URL.");
      }
    }

    // STAGE 10: git push origin <branch>
    else if (cmd.startsWith("git push origin")) {
      const branchName = cmd.split(" ")[3];
      const exists = branches.find((b) => b.name === branchName);
      if (exists) {
        newLogs.push(`Pushed branch '${branchName}' to origin.`);
      } else {
        newLogs.push(`Branch '${branchName}' does not exist.`);
      }
    }

    // STAGE 11: git pull origin <branch>
    else if (cmd.startsWith("git pull origin")) {
      const branchName = cmd.split(" ")[3];
      const exists = branches.find((b) => b.name === branchName);
      if (exists) {
        newLogs.push(`Pulled latest changes from origin/${branchName}`);
      } else {
        newLogs.push(`Branch '${branchName}' does not exist.`);
      }
    }

    // STAGE 12: git clone <url>
    else if (cmd.startsWith("git clone")) {
      const url = cmd.split(" ")[2];
      if (url) {
        newLogs.push(`Cloned repository from ${url}`);
      } else {
        newLogs.push("Please provide a repository URL.");
      }
    }

    // STAGE 13: git fetch
    else if (cmd === "git fetch") {
      newLogs.push("Fetched changes from the remote.");
    }

    // STAGE 14: git diff
    else if (cmd === "git diff") {
      newLogs.push(
        "Displayed differences between working directory and last commit."
      );
    }

    // STAGE 15: git revert/reset/checkout -- file
    else if (cmd.startsWith("git revert")) {
      newLogs.push("Reverted specified commit.");
    } else if (cmd.startsWith("git reset")) {
      newLogs.push("Reset current branch to a previous state.");
    } else if (cmd.startsWith("git checkout --")) {
      newLogs.push("Restored file from the last committed version.");
    }

    // UNKNOWN
    else {
      newLogs.push(
        "Unknown command. Try: git init, git status, git add ., git commit -m 'msg', git branch, git checkout, git log, git merge, git push, git pull, git clone, git fetch, git diff, git revert, git reset, git checkout -- file"
      );
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <div
      className="w-full h-screen flex flex-row overflow-auto lg:items-center lg:justify-center bg-green-400"
      style={SwitchMode}
    >
      <div className="w-[99vw] md:w-[60%] lg:w-[30%] p-2 overflow-x-auto h-screen">
        <div>
          <button
            className="font-semibold text-[8px] bg-blue-500 rounded-[15px] px-2 py-1 hover:bg-blue-200 text-white  sm:text-[7px] md:text-[10px] lg:text-[12px] mb-10"
            onClick={() => {
              localStorage.removeItem("authy");
              window.location.reload();
            }}
          >
            Log out
          </button>
          {/* <div className="ml-10">Hi {user?.name}</div> */}
          <h1 className="text-[12px] font-bold mb-4 text-center">
            Git Command Simulator
          </h1>
        </div>
        <div className="bg-slate-950 text-green-400 font-mono p-2 rounded-md mb-4 text-[10px] sm:text-[11px] md:text-[12px] flex flex-col items-start justify-between min-h-[40%] lg:min-h-[300px] ">
          <div>
            {logs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))}
          </div>
          <input
            className="bg-slate-950 border-0 outline-none text-green-300 w-full mt-2 sm:text-[11px] text-[10px] md:text-[12px] "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            placeholder="$ type a git command..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="p-2 bg-white rounded-md shadow text-[8px] sm:text-[9px]  "
            >
              <h2 className="font-bold text-blue-500 mb-2 text-[7px] md:text-[12px]">
                🌿 Branch: {branch.name}
              </h2>
              <ul className="text-[9px] text-gray-600 sm:text-[11px] md:text-[13px]">
                {branch.commits.map((c: any, i) => (
                  <li key={i}>🔹 {c.message}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[40%]  h-full p-2 gap-3 flex flex-col overflow-x-auto text-[10px] sm:text-[12px] md:text-[13px]">
        <div className="w-full flex justify-end items-center">
          <button onClick={handleSwitchMode}>
            {darkMode ? <CgMoon /> : <CgSun />}
          </button>
        </div>
        {GitCommandDescription.map((gitt, idx) => (
          <div className="flex flex-col lg:flex-col lg:gap-1 lg:items-start">
            <div key={idx} className="flex gap-1 items-center ">
              <div className="flex items-center gap-1 ">
                <div className="text-[5px] mt-1 text-black">⚫</div>
                <div className="font-semibold text-blue-600 text-[9px] sm:text-[11px] md:text-[13px] flex">
                  {gitt.Git} :
                </div>
              </div>
              <div>
                <div className="text-[8px] sm:text-[10px] md:text-[11px] flex ">
                  {gitt.GitTitle}
                </div>
              </div>
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-[11px]  ml-3">
              {gitt.GitTitle2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
