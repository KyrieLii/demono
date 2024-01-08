const execa = require("execa");

const execaWithStreamLog = (command, args, options) => {
  const promise = execa(command, args, {
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    env: {
      FORCE_COLOR: "true",
    },
    ...options,
  });
  return promise;
};

const runE = async () => {
  await execaWithStreamLog("node", ["./e.js"]);
};

runE();
