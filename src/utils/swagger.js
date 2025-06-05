import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import __dirname from '../path.js';

const options = {
    definition:{
        openapi:"3.0.1",
        info: {
            title:"adopt.me",
            version: "1.0.0",
            description:"Documentacion de la api oficial de Backend 3"
        },
        server:[
            {
                url:"http://localhost:8080"
            }
        ]
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJSDoc(options)

export default (app) => {
    app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(specs))
}
