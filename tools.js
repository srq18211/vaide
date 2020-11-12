const importAll = ctx => {
  const map = {}
  for (const key of ctx.keys()) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    map[keyArr.join('/').replace(/\.vue$/g, '')] = ctx(key).default
  }
  return map
}
export const contextWithTabs = ctx => {
  return Object.keys(ctx).map(key => ({
    label: ctx[key].cname,
    name: ctx[key].name,
    key: ctx[key].name
  }))
}

export const contextWithMenus = ctx => {
  return Object.keys(ctx).map(key => ({
    title: ctx[key].cname,
    name: ctx[key].name,
    key: ctx[key].name
  }))
}
export default importAll