import diagnoses from "../../data/diagnoses";
import { v4 as uuidv4 } from 'uuid';
import patients from "../../data/patients";
import { Diagnose, PatientNoSSN } from "../../types";
import { getPatientsNoSSN, toNewPatientEntry } from "../utils"


const fetchDiagnoses = (_req: any, res: any): Diagnose[] => {

    return res.json(diagnoses);
};

const fetchPatients = (_req: any, res: any): PatientNoSSN[] => {

    return res.json(getPatientsNoSSN());
};

const addPatient = (req: any, res: any) => {

  try {

  const newPatientEntry = toNewPatientEntry(req.body)

  const addedPatient = {
    id: uuidv4(),
    ...newPatientEntry
  }

  patients.push(addedPatient)

  return res.json(addedPatient)
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    return res.status(400).send(errorMessage);
  }
};

const fetchById = (req: any, res: any): PatientNoSSN => {

  const { id } = req.params;

  const answer : PatientNoSSN | undefined = patients.find(p => p.id === id);

  if (answer !== undefined) {
    return res.json(answer);
  }

  return res.status(403).json({error: "Patient not found!"});
};

export {
    fetchDiagnoses,
    fetchPatients,
    addPatient,
    fetchById
};

  

