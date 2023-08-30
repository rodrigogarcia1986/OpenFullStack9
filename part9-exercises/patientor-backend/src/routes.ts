import express from 'express';
import { testBackend } from './controllers/test';
import { fetchDiagnoses, fetchPatients, addPatient, fetchById } from './controllers/api';

const routes = express.Router();

routes.use(express.json());

routes.get('/api/ping', testBackend);
routes.get('/api/diagnoses', fetchDiagnoses);
routes.get('/api/patients', fetchPatients);
routes.post('/api/patients', addPatient)
routes.get('/api/patients/:id', fetchById);


export default routes;