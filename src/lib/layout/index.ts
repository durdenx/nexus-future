export {
  create,
  createFromData,
  Data,
  DEFAULT_BUILD_FOLDER_NAME,
  findAppModule,
  Layout,
  loadDataFromParentProcess,
  relativeTranspiledImportPath,
  saveDataForChildProcess,
  scanProjectType,
} from './layout'

// todo refactor with TS 3.8 namespace re-export
// once https://github.com/prettier/prettier/issues/7263

import {
  CONVENTIONAL_SCHEMA_FILE_NAME,
  DIR_NAME,
  emptyExceptionMessage,
  importModules,
  MODULE_NAME,
  printStaticImports,
} from './schema-modules'

export const schema = {
  emptyExceptionMessage,
  importModules,
  printStaticImports,
  DIR_NAME,
  MODULE_NAME,
  CONVENTIONAL_SCHEMA_FILE_NAME,
}
