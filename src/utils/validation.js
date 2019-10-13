const ARTIFACT_PATTERN = /^[a-z][a-z0-9-._]*$/;
const GROUP_ID_CLASS_NAME_PATTERN = /^(\w+\.)*(\w+)$/;
const PATH_PATTERN = /^\/([a-z0-9\-._~%!$&'()*+,;=:@]+\/?)*$/;

module.exports = {
  validatePath: path => PATH_PATTERN.test(path),
  validateArtifactId: artifactId => ARTIFACT_PATTERN.test(artifactId),
  validateGroupId: groupId => GROUP_ID_CLASS_NAME_PATTERN.test(groupId),
  validateFileName: filename => GROUP_ID_CLASS_NAME_PATTERN.test(filename),
  validateClassName: className => GROUP_ID_CLASS_NAME_PATTERN.test(className)
};
