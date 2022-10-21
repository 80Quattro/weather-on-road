# Weather On The Road

![App main-page](/weather_on_road-main.png)

## Description

This app, created thanks to open source API's, shows, what is the weather on your road. Type start point and your destination to see, if on your road are any dangers like strong wind, black ice or precipitation. You can also see the weather in a few locations, which you will drive through. 

#### How it works?

Thanks to **[Nominatim API](https://nominatim.org/)**, the app finds location based on users typed text. Two locations, (start point and destination point) are send to **[openrouteservice API](https://openrouteservice.org/)**, which track the route and answers with coordinates you should drive. App chooses a few coordinates and check the weather in them, using **[Open-Meteo API](https://open-meteo.com)**. 

## Installation
1. Type your openrouteservice auth key to `.env.example` file and change it's name to `.env`
2. Download all required dependencies
```bash
npm install
```
3. Start app
```bash
npm start
```

## Tech-stack
`ReactJS` `ES6` `Axios` `Material UI` `React Hooks` `JSX`