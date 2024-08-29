# Launchpad Spring 2023 Semester Project
## lofi bytes

By: Alicia Wang [PL], Alena Chao, Eric Liu, Zane Mogannam, Chloe Wong, Iris Zhou

## So, what is lofi bytes?
Picture this: it is midterm season, you have a ton of work to finish, and you need a long library grind session. You reach for your headphones, but instead of turning on Spotify, you open lofi bytes: an aesthetic web app that takes song samples and outputs chill lofi, complete with customizable background sounds and beats.

Over the Spring 2023 semester, our team has been creating an integrated, user-friendly web application that allows users to generate lofi tracks from input MIDI samples and customize further with sounds of rain, fire, and cafe ambiance. This article will outline our process from education to the final product, discuss everything we did, from training an ML model to building a full-stack application, and reflect on limitations, extensions, and further learning opportunities.

Check out our website at https://callaunchpad.github.io/lofi-bytes-app/! This is a semester project by Launchpad, a creative ML organization founded on the UC Berkeley campus.

## About our repo

This is the repo for our web app.

- Home Screen component contains the website skeleton: header, footer, margins, and background.
- Midi Generator component contains the API connection: the user’s uploaded midi file is sent to the back-end API. The transformer-generated output is sent back.
- Synth component contains ambient sound interaction: Users can adjust sliding bars to increase and decrease the loudness of drum beats, rain, cafe sounds, and fire.

Our API code for our web app is located at ~https://github.com/callaunchpad/lofi-bytes-api.~

**Edit (8/28/2024)**: we have deployed our model on [Hugging Face Spaces](https://huggingface.co/spaces/Launchpad/lofi-bytes) to reduce model serving costs!

Built with TypeScript + React + Redux + MUI + RRD + ESLint + Prettier (from vite-mui-ts boilerplate)

#### Clone the repo

```
git@github.com:callaunchpad/lofi-bytes-app.git
cd lofi-bytes-app
```

#### Install Dependencies

```
npm install
```

#### Run

```
npm run dev
```
