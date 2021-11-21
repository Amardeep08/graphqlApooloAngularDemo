import sofa, { OpenAPI } from 'sofa-api';

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

app.use(
  sofa({
    schema,
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '',
      });
    },
  })
);

openApi.save('./swagger.json');