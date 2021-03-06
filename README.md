# New empty TypeScript project
You need to start a new TypeScript project... just clone that repository or use it as template.

But you can also do it by yourself:

### Initial setup

```
mkdir myNewProject
cd myNewProject
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir build
mkdir src
```

It's now possible to write, build and run the famous "Hello world!":

```
touch src/index.ts
echo "console.log('Hello world!');" >> src/index.ts
tsc
node build/index.js
```

Modify the `package.json` file by adding build and start scripts:

```
"scripts": {
    "build": "tsc",
    "start": "npm run build && node build/index.js"
  }
```

It's now possible to launch the build with `npm run build` and build then start the program with `npm run start`.

### Add test framework (Jest)

Following commands will install and configure the Javascript test framework `Jest`, and the TypeScript preprocessor `ts-jest`

```
npm i --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

Modify the `package.json`file in order to add the `test`command:

```
"scripts": {
    "build": "tsc",
    "start": "npm run build && node build/index.js",
    "test": "jest"
  }
```