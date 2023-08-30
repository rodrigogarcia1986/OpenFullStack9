import { Entry, Gender, NewPatientEntry, PatientNoSSN } from "../types";
import patients from "../data/patients";


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};
  
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
  
const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect or missing date: ' + dateOfBirth);
    }
    return dateOfBirth;
};
  
const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
      throw new Error('Incorrect or missing name');
    }
  
    return name;
};
  
const parseSSN = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)) {
      throw new Error('Incorrect or missing ssn');
    }
  
    return ssn;
};
  
const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(param);
};


const isValidEntry = (entry: any): entry is Entry => {
  return entry.type === 'Hospital' || entry.type === 'OccupationalHealthcare' || entry === 'HealthCheck'
};
  
const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
      throw new Error('Incorrect or missing data gender')
    }
  
    return gender  
}
  
const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
      throw new Error ('Incorrect or missing data occupation')
    }
  
    return occupation
}

const parseEntries = (entries: unknown): Entry[] => {

  if (!(Array.isArray(entries) && entries.map(e => isValidEntry(e)))) {
    throw new Error ('Incorrect or missing entry')
  }

  return entries
}
  
export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  
    if ( !object || typeof object !== 'object' ) {
      throw new Error('Incorrect or missing data');
    }
  
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object)  {
      const newEntry: NewPatientEntry = {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
        entries: parseEntries(object.entries)
      };
    
      return newEntry;
    }
  
    throw new Error('Incorrect data: some fields are missing');  
}
  
export const getPatientsNoSSN = (): PatientNoSSN[] => {
      return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
      }));
};