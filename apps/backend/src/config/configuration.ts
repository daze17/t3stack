import { ENV, Schemas } from './schema';

export const configuration = () => {
  const env: ENV = ENV.parse(process.env);

  return {
    app: {
      env: env.APP_ENV,
      // frontendBaseUrl: env.FRONT_END_BASE_URL,
      port: env.PORT,
    },
  };
};

export const validate = (env: Record<string, any>) => {
  const schema = Schemas['common'];

  const result = schema.safeParse(env);

  if (result.success === false) {
    for (const error of result.error.errors) {
      console.error(JSON.stringify(error));
    }
    throw Error('INVALID_CONFIG');
  }

  return result.data;
};
