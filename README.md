# BookManagementSystem

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Summary of Learnings

### Understanding Components
- Created an --**Angular component**--- to manage books (`BookComponent`).
- Used --**two-way data binding**-- with `ngModel` to handle user input.
- Implemented --**event binding**-- to add and remove books dynamically.

### Local Storage Implementation
- Stored book data persistently using `localStorage`.
- Loaded saved books from `localStorage` on initialization --(`ngOnInit`)--.
- Updated `localStorage` every time a book is added or removed.

### Book Component Structure
#### `book.component.ts`
- **Manages book state**: Stores books as an array and handles user input.
- **Implements CRUD operations**: Users can add and delete books.
- **Persists data**: Saves and retrieves books from `localStorage`.

#### `book.component.html`
- **Input fields for book title and author**.
- **Button to add books to the list**.
- **List that displays books with a delete button**.

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

To build the project, run:

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
