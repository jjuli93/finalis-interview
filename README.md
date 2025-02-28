## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables
You can check needed environment variables in [.example.env](.example.env)

## Comments

### Auth
1. Authentication was not set up. 
2. I included a middleware to check for a session but the matcher is commented out for testing purposes
3. If there are more user roles I would consider another authtorization strategy

### Testing
1. I didn't have time to make tests
2. I would suggest making some end to end tests on an integration environment

### API requests
1. Right now all the data is mocked
2. I left some code commented out that handles api calls and caching
3. I left some code on the API communication functions to wait some time and simulate a loading state

### Other
1. I left some TODOs comments on components with some improvements suggestions

### Assumptions
1. I assumed that the backend was in charge of blacklisting people
2. I assumend that the backend was in charge of counting the number of times a user did the onboarding by merging onboarding proceses of the same person, updating the information and adding a count to the  `onboardingAttempts` prospect property

### Missing
1. I couldn't complete the invoice management feature. I was running out of time and I didn't want to hand over the excercise after the deadline

