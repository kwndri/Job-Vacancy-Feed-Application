# JobFeed

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3, **TypeScript** and **Tailwind CSS 3.4.17**

The API requires authentication via a signed JWT token. Visit https://navikt.github.io/pam-stilling-feed/ to apply for a token.

Review the Terms of Use: Familiarize yourself with the terms of use associated with the API.

For detailed information on the API endpoints, response structures, and usage guidelines, refer to the API documentation:
[text](https://navikt.github.io/pam-stilling-feed/)

Note: In my design, the service is degisned to retrieve all the job feeds for the last 1 month by default. If you want to change this a date picker has been implemented.

## UI Design & Tailwind Customization

This project uses Tailwind CSS 3.4.17 for styling, with a combination of standard utility classes and custom templates I created myself.

Some parts of the interface may look unique or slightly unconventional because they are custom-tailored components and layouts. The goal was to showcase my UI/UX design abilities and how I can creatively use Tailwind to build responsive and visually appealing interfaces, while also maintaining functionality.

Key points:

Responsive design using Tailwind's utility classes.

Focus on accessibility and user experience.

Some visual tweaks are intentionally crafted to demonstrate design skill, even if the content of them seem to not fit on this web application (e.g. footer component).

Images used for the members of the team in the job description are just a copy of a tailwind plus template example. The API doesn't return such kind of info, so as referred before i created this custom template driven by Tailwind Plus examples.

The frontend is designed to display only the active job feeds based on the info returned from the API. Unfortunately, some feeds which seems to be active in first place, when requesting their details we can see that they are inactive.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
