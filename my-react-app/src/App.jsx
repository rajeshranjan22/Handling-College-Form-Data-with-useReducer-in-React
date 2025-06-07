
import { useReducer, useState } from 'react';
import { CollegeReducer, initialState } from './CollegeReducer';

function App() {
  const [state, dispatch] = useReducer(CollegeReducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(state);
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
    setSubmittedData(null);
  };

  return (
    <div style={styles.container}>
      <h2>College Form (useReducer)</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input style={styles.input} type="text" placeholder="College Name" value={state.name} onChange={(e) => handleChange(e, 'name')} />
        <input style={styles.input} type="number" placeholder="Establishment Year" value={state.establishment_year} onChange={(e) => handleChange(e, 'establishment_year')} />

        <input style={styles.input} type="text" placeholder="Building" value={state.address.building} onChange={(e) => handleChange(e, 'building')} />
        <input style={styles.input} type="text" placeholder="Street" value={state.address.street} onChange={(e) => handleChange(e, 'street')} />
        <input style={styles.input} type="text" placeholder="City Name" value={state.address.city.name} onChange={(e) => handleChange(e, 'city_name')} />
        <input style={styles.input} type="text" placeholder="Pin Code" value={state.address.city.locality.pinCode} onChange={(e) => handleChange(e, 'pinCode')} />
        <input style={styles.input} type="text" placeholder="Landmark" value={state.address.city.locality.landmark} onChange={(e) => handleChange(e, 'landmark')} />
        <input style={styles.input} type="text" placeholder="State" value={state.address.state} onChange={(e) => handleChange(e, 'state')} />
        <input style={styles.input} type="text" placeholder="Latitude" value={state.address.coordinates.latitude} onChange={(e) => handleChange(e, 'latitude')} />
        <input style={styles.input} type="text" placeholder="Courses (comma-separated)" value={state.courses_offered.join(', ')} onChange={(e) => handleChange(e, 'courses_offered')} />
        <input style={styles.input} type="text" placeholder="Longitude" value={state.address.coordinates.longitude} onChange={(e) => handleChange(e, 'longitude')} />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>

        {state.error && <p style={styles.error}>{state.error}</p>}
      </form>

      {submittedData && (
        <div style={styles.result}>
          <h3>Submitted College Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '30px',
    width: '99vw',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  result: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
  }
};



export default App;
