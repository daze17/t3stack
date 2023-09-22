import { z } from 'zod';

const commonSchema = z.object({
  APP_ENV: z.enum(['development', 'production', 'staging']),
  PORT: z.string(),
});
export const Schemas = {
  common: commonSchema,
};
export const ENV = commonSchema;
export type ENV = z.infer<typeof ENV>;
