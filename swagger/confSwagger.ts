const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Productos y Categorias',
        version: '1.0.0',
        description: 'Un simple CRUD que maneja categorias y productos',
      },
    },
    apis: ['./routes/*.js'], // Rutas de tu aplicación que deseas documentar
  };