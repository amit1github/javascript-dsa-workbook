/*
  ========================================================
  AUTO GIT SCRIPT (Developer Notes)

  PURPOSE:
  - Automate repetitive git workflow:
      git add .
      git commit
      git pull
      git push

  WHY THIS EXISTS:
  - Developers repeat same commands daily.
  - Automation reduces manual effort and mistakes.

  IMPORTANT DEV CONCEPTS TO KNOW:
  1️⃣ child_process.execSync → run terminal commands from Node.
  2️⃣ process.argv → read arguments passed to script.
  3️⃣ Synchronous execution → commands run in order.
  4️⃣ git workflow sequence matters.
  ========================================================
*/

const { execSync } = require("child_process");

/*
  Helper function to execute terminal commands.

  stdio: "inherit"
  → Shows command output directly in terminal.
  Without this, output would be hidden.
*/
function run(command) {
    execSync(command, { stdio: "inherit" });
}

try {
    /*
      ========================================================
      STEP 1 — GET COMMIT MESSAGE
  
      process.argv:
      - Node gives CLI arguments as array.
  
      Example:
        node autogit.js "fixed reverse logic"
  
        process.argv = [
          'node',
          'autogit.js',
          'fixed',
          'reverse',
          'logic'
        ]
  
      slice(2) removes:
        node executable
        script filename
  
      join(" ") reconstructs full message.
    ========================================================
    */

    const message =
        process.argv.slice(2).join(" ") ||
        `Auto commit on ${new Date().toLocaleString()}`;

    /*
      If user does NOT provide message:
  
        node autogit.js
  
      default message is used.
    */

    console.log("Adding changes...");

    /*
      STEP 2 — STAGE ALL CHANGES
  
      Equivalent to:
        git add .
  
      WHY?
      Git only commits staged files.
    */
    run("git add .");

    /*
      STEP 3 — CHECK IF THERE ARE CHANGES
  
      git diff --cached --quiet
  
      If NO staged changes:
        exit code = 0
        script exits early.
  
      WHY IMPORTANT?
      Prevents empty commits.
    */

    try {
        execSync("git diff --cached --quiet");

        console.log("No changes to commit.");
        process.exit(0); // stop script safely
    } catch {
        // Error means changes exist → continue
    }

    console.log(`Committing with message: "${message}"`);

    /*
      STEP 4 — COMMIT
  
      Equivalent:
        git commit -m "message"
    */
    run(`git commit -m "${message}"`);

    /*
      STEP 5 — DETECT CURRENT BRANCH
  
      WHY?
      - Avoid hardcoding staging/main.
      - Always push to branch you're working on.
  
      git rev-parse --abbrev-ref HEAD
        → returns current branch name.
    */

    const branch = execSync(
        "git rev-parse --abbrev-ref HEAD"
    )
        .toString()
        .trim();

    console.log(`Current branch: ${branch}`);

    /*
      STEP 6 — PULL LATEST CHANGES
  
      WHY?
      - Avoid conflicts.
      - Sync with remote before pushing.
    */
    console.log("Pulling latest...");
    run(`git pull origin ${branch}`);

    /*
      STEP 7 — PUSH TO REMOTE
  
      origin = remote repo name
      branch = detected branch
    */
    console.log("Pushing...");
    run(`git push origin ${branch}`);

    console.log("Done ✅");

} catch (err) {
    /*
      Global error handling.
  
      Any git failure or command error ends here.
    */
    console.error("Error:", err.message);
}