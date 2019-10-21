module.exports = (args = []) => {
  const props = {};
  for (let i = 0; i < args.length; i++) {
    const split = args[i].replace(/^-D/, '').split(/=/);
    props[split[0]] = split[1] || true;
  }

  return props;
};
