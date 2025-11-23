const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

function toPascalCase(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str) {
   return str.charAt(0).toLowerCase() + str.slice(1);
}

async function generateEntity(entityName) {
   const pascalName = toPascalCase(entityName);
   const camelName = toCamelCase(entityName);
   const basePath = path.join('src', 'entities', pascalName);

   const directories = [
      path.join(basePath, 'model', 'selectors'),
      path.join(basePath, 'model', 'slice'),
      path.join(basePath, 'model', 'types'),
      path.join(basePath, 'ui'),
   ];

   try {
      // Create directories
      for (const dir of directories) {
         await mkdir(dir, { recursive: true });
      }

      // Selectors
      await writeFile(
         path.join(basePath, 'model', 'selectors', `get${pascalName}.ts`),
         `import { StateSchema } from 'app/providers/StoreProvider';

export const get${pascalName} = (state: StateSchema) => state.${camelName};`
      );

      await writeFile(
         path.join(basePath, 'model', 'selectors', `get${pascalName}.test.ts`),
         `describe('get${pascalName}', () => {
   
});`
      );

      // Slice
      await writeFile(
         path.join(basePath, 'model', 'slice', `${camelName}Slice.ts`),
         `import { createSlice } from '@reduxjs/toolkit';
import { ${pascalName}Schema } from '../types/${camelName}Schema';

const initialState: ${pascalName}Schema = {
  
};

export const ${camelName}Slice = createSlice({
   name: '${camelName}',
   initialState,
   reducers: {

   },
});

export const { actions: ${camelName}Actions, reducer: ${camelName}Reducer } = ${camelName}Slice;`
      );

      await writeFile(
         path.join(basePath, 'model', 'slice', `${camelName}Slice.test.ts`),
         `describe('${camelName}Slice', () => {

});`
      );

      // Types
      await writeFile(
         path.join(basePath, 'model', 'types', `${camelName}Schema.ts`),
         `export interface ${pascalName}Schema {
  
}`
      );

      // UI
      await writeFile(
         path.join(basePath, 'ui', `${pascalName}.tsx`),
         `const ${pascalName} = () => {

   return (
      <div>

      </div>
   );
};

export default ${pascalName};`
      );

      await writeFile(
         path.join(basePath, 'ui', `${pascalName}.test.tsx`),
         `describe('${pascalName}', () => {

});`
      );

      // Index
      await writeFile(
         path.join(basePath, 'index.ts'),
         `export { ${pascalName}Schema } from './model/types/${camelName}Schema';
export { ${camelName}Actions, ${camelName}Reducer, ${camelName}Slice } from './model/slice/${camelName}Slice';
export * from './model/selectors/get${pascalName}';
export { default as ${pascalName} } from './ui/${pascalName}';`
      );

      console.log(`✅ Entity "${pascalName}" created successfully!`);
      console.log(`📁 Path: ${basePath}`);
   } catch (error) {
      console.error('❌ Error creating entity:', error);
   }
}

const entityName = process.argv[2];
if (!entityName) {
   console.error('Please provide entity name: npm run generate:entity user');
   process.exit(1);
}

generateEntity(entityName);
