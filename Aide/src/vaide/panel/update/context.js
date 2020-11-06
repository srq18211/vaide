import importAll from '@/tools/importAll.js'
export default importAll(require.context('./', false, /\.vue$/))