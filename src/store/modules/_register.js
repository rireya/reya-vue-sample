// module 폴더(.)에 있는 모든 js 파일 로드, 하위폴더는 없으므로 false.
const requireModule = require.context('.', false, /\.js$/);
const modules = {};

requireModule.keys().forEach((dir) => {
  // module 폴더에 '_' 접두사를 가진 파일은 로드 파일에서 제외
  const isStore = (dir.indexOf('./_') !== 0);

  if (isStore) {
    modules[dir.replace(/(\.\/|\.js)/g, '')] = requireModule(dir).default;
  }
});

export default modules;
