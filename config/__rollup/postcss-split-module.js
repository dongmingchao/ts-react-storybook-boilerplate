import postcss from 'postcss';
import path from 'path';
import fs from 'fs';

const PLUGIN_NAME = 'postcss-split-module';

export default postcss.plugin(PLUGIN_NAME, (opts = {}) => {
  let isInit = true;
  const outputType = opts.outputType || 'ts';
  return async (css) => {
    const inputFile = css.source.input.file;
    if (!isInit) {
      const result = await postcss([]).process(css, {
        from: inputFile,
      });
      const paths = inputFile.split(path.sep);
      let fileName = paths.slice(-1)[0];
      const dirName = paths.slice(-2)[0];
      if (fileName.endsWith('.styl')) {
        fileName = fileName.replace(/\.styl$/g, '.css');
      }
      const jsonFileName = path.resolve(`./build/components/${dirName}/${fileName}`);
      const fullDirName = path.dirname(jsonFileName);
      if (!fs.existsSync(fullDirName)) {
        fs.mkdirSync(fullDirName, { recursive: true });
      }
      fs.writeFileSync(jsonFileName, result.css);
      const exps = {};
      css.walkRules((rule) => {
        if (rule.selector === ':export') {
          rule.walkDecls((decls) => {
            exps[decls.prop] = decls.value;
          });
        }
      });
      switch (outputType) {
        case 'json': {
          fs.writeFileSync(
            path.resolve(`./build/components/${dirName}/${fileName}.json`),
            JSON.stringify(exps)
          );
          break;
        }
        case 'ts': {
          fs.writeFileSync(
            path.resolve(`./build/components/${dirName}/${fileName}.d.ts`),
            `export = ${JSON.stringify(exps)}`
          );
          break;
        }
        default:
          break;
      }
    }
    isInit = false;
  };
});
