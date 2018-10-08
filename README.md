# Dialogflow's fulfillment: playing with entities

A simple DialogFlow [Express](http://expressjs.com/) fulfillment app that messes around with entities


## The dialogflow agent

It's testable here: [https://dialogflow-fulfillment-entities-playground.glitch.me/](https://dialogflow-fulfillment-entities-playground.glitch.me/)

The agent's export file is downloadable here: [http://bit.ly/2ILgTuv](http://bit.ly/2ILgTuv)

The fulfillment url is already configured to hit this webhook :)

Try typing something like *I want to eat a banana with my dog*.

In the agent, I've only made a simple `Fruits` entity that is captured in the intent and sent to the fulfillment app.