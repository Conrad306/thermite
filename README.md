# Thermite

An open-source, blazing fast code editor for Windows, Mac, and Linux. 
<br />

## About
Thermite is a Blazing Fast, Open-Source, Cross-Platform Code Editor for Windows, Mac, and Linux. It is written in Next.js + Typescript and [Tauri](https://tauri.studio/), which is a Cross-Platform Desktop Application Framework using rust.

## Running
This shall guide you through the process of building the app, or running it in dev mode:

First, follow the required installed guides from [Tauri](https://tauri.studio/v1/guides/getting-started/prerequisites)


Then, using your either ``yarn`` or ``npm``, or ``pnpm``, install the dependencies.
<br />
<br />

### Dev Mode
To run the app in dev mode, simply run ``yarn dev`` or ``npm run dev``, or ``pnpm run dev``.

### Building
To build the app, run ``yarn tauri:build``, or the equivalent in your package manager. The build might take a while to complete.


Then, run the respective build file in `src-tauri/target/release/`
