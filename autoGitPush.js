const { execSync } = require("child_process");

function run(command) {
  execSync(command, { stdio: "inherit" });
}

try {
  // 1️⃣ Get commit message (dynamic or default)
  const message =
    process.argv.slice(2).join(" ") ||
    `Auto commit on ${new Date().toLocaleString()}`;

  console.log("Adding changes...");
  run("git add .");

  // 2️⃣ Check if there are staged changes
  try {
    execSync("git diff --cached --quiet");
    console.log("No changes to commit.");
    process.exit(0);
  } catch {
    // changes exist (this is expected)
  }

  console.log(`Committing with message: "${message}"`);
  run(`git commit -m "${message}"`);

  // 3️⃣ Detect current branch automatically
  const branch = execSync(
    "git rev-parse --abbrev-ref HEAD"
  )
    .toString()
    .trim();

  console.log(`Current branch: ${branch}`);

  console.log("Pulling latest...");
  run(`git pull origin ${branch}`);

  console.log("Pushing...");
  run(`git push origin ${branch}`);

  console.log("Done ✅");
} catch (err) {
  console.error("Error:", err.message);
}