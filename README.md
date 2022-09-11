## Frontend Test

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [GIT](https://git-scm.com/downloads)
- Install [Yarn](https://yarnpkg.com) (optional / recommended)

---

### Instructions

Open your terminal and clone the repository:

```shell
git clone https://github.com/luchoweb/front-test.git
```

Move to the project folder ```cd front-test```  and install the modules ```yarn install``` or ``` npm install ```

So, the project needs at least one enviroment file, please name it **.env.development.local** and add development variables from your Firebase app config:

```txt
REACT_APP_FIREBASE_APIKEY = ABcdeF1234567gHIjkL90m
REACT_APP_FIREBASE_AUTH_DOMAIN = my-app-firebase.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID = my-app-firebase
REACT_APP_FIREBASE_STORAGE_BUCKET = my-app-firebase.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 1234567890
REACT_APP_FIREBASE_APP_ID = 1:1234567890:web:abcd1234567def
```

For the production file (**.env.production.local**), you can use the same variables, but with the data of the production app configured in Firebase.

**IMPORTANT**: these environment files have been sent to the recruiter's email.

If you aren't the recruiter, please create a collection with the following schema for the documents:

```json
  "id": "AUTOMATIC_ID_IS_RECOMMEND",
  "name": "Lucho Web",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula gravida magna.",
  "category": "politics",
  "picture": "cristina.png",
  "lastUpdated": 1234567890,
  "votes": {
    "positive": 45,
    "negative": 97
  }
```

Schema firestore field type:
1. name, description, category and picture: ```<string>```
2. lastUpdate (milliseconds): ```<number>```
3. votes: ```map```
4. votes.positive and votes.negative: ```<number>```

**NOTE**: you can create as many documents as you like, but a pager was not developed, so we recommend not exceeding 5 documents.

### Ready?

Finally, to start the project, please run ``` yarn start ``` or ``` npm start ```

---

### Tests

I added some tests, if you want to run them, please run ``` yarn test ``` or ``` npm test ```

---

That's all. Thanks for your time!
