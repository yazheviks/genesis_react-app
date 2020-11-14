export function cutNumber(url) {
  const split = url.split('/');
  const { length } = split;
  const res = split[length - 2];

  return res;
}
