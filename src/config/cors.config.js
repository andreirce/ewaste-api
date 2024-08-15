import cors from 'cors';

const corsOptions = {
    origin: '',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

export default cors(corsOptions);
