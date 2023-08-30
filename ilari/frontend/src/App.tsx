import { useEffect, useState } from "react";
import { NonSensitiveDiaryEntry, Visibility, Weather } from "./types";
import { getAll,addEntry } from "./services/diaryService";
import useField from "./utils/utils";
import { setNotification } from "./reducers/notificationReducer";
import Notification from "./utils/Notification";

function App() {
  
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([])
  useEffect(() => {
     getAll()
      .then(data => {
        setDiaries(data)
        setNotification("OIIII")
      })
  })

  const { reset: resetDate, ...date } = useField("date");
  const { reset: resetWeather, ...weather } = useField("text");
  const { reset: resetVisibility, ...visibility } = useField("text");
  const { reset: resetComment, ...comment } = useField("text");

  const addNewEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addEntry({ date: date.value, weather: weather.value as Weather, 
                visibility: visibility.value as Visibility, comment: comment.value }).then(data => {
      setDiaries(diaries.concat(data as NonSensitiveDiaryEntry))});    

    resetDate();
    resetVisibility();
    resetWeather();
    resetComment();
  };

  return (
    <div>
      <h2>Add new entry</h2><br/>
      <button type="button" onClick={() => setNotification("Porra")}>NOTIFICATE</button>
      <Notification />     
      <form onSubmit={addNewEntry}>
        <label>Date</label><input { ...date }/><br/>
        <label>Weather</label><input {...weather }/><br/>
        <label>Visibility</label><input { ...visibility }/><br/>
        <label>Comment</label><input { ...comment }/><br/>
        <button type="submit">add</button>
      </form>
     <h2>Diary entries</h2>
      <ul>
        {diaries.map(diary => <li key={diary.id}>
          <p>Date: {diary.date}</p>
          <p>Weather: {diary.weather}</p>
          <p>Visibility: {diary.visibility}</p>
          <br/>
        </li>)}
      </ul>

    </div>
  );
}

export default App;
