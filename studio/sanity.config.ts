import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
	basePath: '/studio',
	projectId: '4elu8cpw',
	dataset: 'production',
	plugins: [structureTool(), visionTool({ defaultApiVersion: '2025-02-09' })],
	schema: {
		types: schemaTypes,
	},
});
