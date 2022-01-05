# Getting Started with Sensor player


## Clone the repository

```bash
git clone https://github.com/impleotv/stserver-samples
cd /stserver-samples/frontend/sensor-player
```

## Install packages

```bash
npm install
```


## Sample code

```js
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
```

In this sample we'll use an online Impleo server - 'https://stserver.impleotv.com'
As it sits behind reverse proxy, we should set **useReverseProxy={true}**.  
For your local tests, you may need to change it to something like this:

```js
serverUrl='http://localhost:8080'
useReverseProxy={false}
```


## Run the demo

```bash
npm start
```