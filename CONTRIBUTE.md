# HOW TO CONTRIBUTE

How to contribute to this repo.

---

## 🏆 DEVELOPER GOOD PRACTICES

Code is communication. We need to write code that is easy to read and
understand. For that reason, we need to follow some good practices:

1. Small commits: Keep It So Simple (KISS).
   Read [“The Power of Small Commits.”](https://levelup.gitconnected.com/the-power-of-working-in-small-commits-8bae57ecfbda)
2. Use [GitMoji](https://gitmoji.dev/)  to add emojis to our commit messages and
   make it easier to identify the purpose or intention of a commit.
3. Submit a PR with one solution at a time. If you need to refactor, do it in
   another PR.
4. Unit tests are part of the Definition of Done in Agile practices. It doesn't
   matter if
   you write
   them first (as in Test-Driven Development, or TDD) or prior to the final
   commit.
5. Run the linters.
6. Run a SonarQube analysis and fix its recommendations before posting a PR.
7. Use TDD for bugs: write a unit test to reproduce the actual behavior (red),
   modify that unit test to reflect the expected behavior (green), then refactor
   the code to solve the bug and meet the unit test (blue).

---

## 📝 Git workflow

### Branches

⚠️ You never push directly to the `main` and `develop` branches. You must create
a new branch and ask for a PR.

Follow this naming convention for branches:

* `main`: the main branch. It contains the latest release.
* `develop`: the development branch. It contains the latest development version.
* `feature/xxx`: a feature branch. It contains a new feature.
* `bugfix/xxx`: a bugfix branch. It contains a bugfix.
* `hotfix/xxx`: a hotfix branch. It contains a hotfix.
* `docs/xxx`: a documentation branch. It contains a documentation change.
* `refactor/xxx`: a refactoring branch. It contains a refactoring change.
* `test/xxx`: a test branch. It contains a test change.
* `ci/xxx`: a CI branch. It contains a CI change.

#### Commit messages

* Use [GitMoji](https://gitmoji.dev/)  to add emojis to our commit messages and
  make it easier to identify the purpose or intention of a commit.
* Use the imperative, present tense: "change" not "changed" nor "changes".
* Use the imperative, present tense: "fix" not "fixed" nor "fixes".
* Use the imperative, present tense: "add" not "added" nor "adds".
* Use the imperative, present tense: "remove" not "removed" nor "removes".

#### Pull requests

* Use the imperative, present tense: "change" not "changed" nor "changes".
* Use the imperative, present tense: "fix" not "fixed" nor "fixes".
* Use the imperative, present tense: "add" not "added" nor "adds".
* Use the imperative, present tense: "remove" not "removed" nor "removes".

---

## 👩‍💻 DEVELOPMENT

### Run code style linters

Linting the code is important to keep the code clean and readable. It is
important to keep in mind that:

> The ratio of time spent reading versus writing is well over 10 to 1. We are
> constantly reading old code as part of the effort to write new code. …making
> it
> easy to read makes it easier to write.

_Robert C. Martin (a.k.a. Uncle Bob)_

To run the linter for Java, execute the following command:

````bash
npm run lintAll
````

### Run static code analysis

It is a good practice to run static code analysis tools to detect possible bugs
or code smells prior to ask for a merge permission (post a PR). You can run the
following command to run the analysis:

```bash
npm run sonar-unix
```
Or
```bash
npm run sonar-win
```

Report will be located at http://localhost:9000

You need to have SonarQube server running locally or in your Docker.
To run SonarQube in Docker, execute the following command:

```bash
docker compose -f scripts/docker-compose-sonar.yml up -d
```

SonarQube initial
setup [instructions here](https://blankfactor.atlassian.net/wiki/spaces/Marqueta/pages/614793231/Developer+s+best+practices#%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-STATIC-CODE-ANALYSIS-WITH-SONARQUBE).
