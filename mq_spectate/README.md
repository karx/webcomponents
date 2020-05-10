## <mq-spectate>
Mqtt Enabled Web component

## Breif
This webcomponent would allow us to spectate an MQTT thread chain.

* Orignally developing to host a Distributed Housie Game and kartaDevice Simulator ;)
* Topic(s) and host to be passed as arguments


## How to run

* Directly by refering to the js file in this github repo. This repo is also hosted via github pages,
[https://karx.github.io/webcomponents/mq-spectate/script.js](https://karx.github.io/webcomponents/mq-spectate/script.js)

```
<script type="module" src="https://karx.github.io/webcomponents/mq-spectate/script.js"></script>   
```


* By hosting this file yourself. After cloning, I personally use http-server from the root of the repository and enable cors
```
http-server mq-spectate/. --cors=*
```

Then can use 
```
<script type="module" src="http://localhost:8080/script.js"></script>   
```

## How to customize

* In `script.js` we have all the main functions of MQTT.   
In the connectcallback lifesycle event of the webc we Initiate our MQTT connection (this `setup` for Arduino thinkers)

Here we connect to the host, defaults to my selfhosted MQTT borker (EMQ), assign a randomized Client name.

And on successful connection, subscribe to basic MQTT channels. Refer [My MQTT Conventions](http://kaaro.akriya.co.in/mqtt/convention/) to know more about how we name my channels.

* we have 2 attributes for this webc, `host` and `topic`, add more alongside them as and when needed.
 
* We have enabled a custom event : `mqttmessage` that propergates to the DOM of your main page, to enable usecases.   

To know more about custom events in Shadow DOMS, refer: https://javascript.info/shadow-dom-events


## Contributions 
Contributions are welcome

## Gotta build'em all
* Helps IoT application Simulators for demo and testing.