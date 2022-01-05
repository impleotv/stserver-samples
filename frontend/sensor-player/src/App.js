import './App.css';
import { SensorPlayer } from 'stserver-frontend-comp';



function App() {
  return (
    <div className="App" style={{ width: '1280px', height: '720px', border: "solid 1px #ddd" ,  margin: 'auto' }}>     
      <SensorPlayer serverUrl='https://stserver.impleotv.com'
        useReverseProxy={true}
        mode={'highQuality'}
        missionIdOrName='Truck' sensorIdOrName='EO-IR' videoDir='videos'
        username='guest' password='guest'
        clientId='Demo'
        />
    </div>
  );
}


export default App;
