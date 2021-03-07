const fakeInstall = require("fake-build");

const owners = [
  "tensorflow",
  "pytorch",
  "NVIDIA",
  "scikit-learn"
];

module.exports = async function() {
  for (const owner of owners) {
    await fakeInstall(owner);
  }
}
