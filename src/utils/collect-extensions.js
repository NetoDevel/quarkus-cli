module.exports = (extension, collectedExtensions = []) => {
  return extension ? [...split(extension), ...collectedExtensions] : collectedExtensions;
};

function split(extensionList) {
  return extensionList
    .split(',')
    .map(extension => extension.trim())
    .filter(Boolean);
}
