# Code Base FE CSR

Codebase FE using React+Vite. Using a routing based on file/folder names.

## Installation

-   Clone repository
-   Run `npm config set @legion-ui:registry https://gitlab.playcourt.id/api/v4/projects/21411/packages/npm/`
-   Run `npm config set _auth ${YOUR_LEGION_AUTH_TOKEN}`
-   Run `npm config set always-auth true`
-   Run `npm install`
-   Run `npm run dev`
-   Open `localhost:3000` in browser

## Development

-   Run `npm run dev`
-   Open `localhost:3000` in browser

## Testing

-   Run `npm run test`
-   Run `npm run test:cover`
-   See other command in package.jsom
-   Open file from directory `./coverage/lcov-report/index.html` in browser

## Production Build

-   Run `npm run build`
-   Run `npm run preview`
-   Open `localhost:3000` in browser

## Rule & Folder Structure

-   Structure for components/\*\*
    -   ComponentName/\*
        -   ComponentName.tsx
        -   index.{ts,tsx}
        -   style.module.css (optional)
        -   constant.ts (for local constant, optional)
        -   type.d.ts (optional)
-   Structure for unit test
    -   `__tests__/`
        -   index.test.{ts, tsx}
-   Use PascalCase:
    -   name of file component,
    -   name of function component
-   use camelCase
    -   name of variable, function, file in folder services & utils
-   use upper SNAKE_CASE
    -   name of constanta
-   use useHookName
    -   name of custom hook or file custom hook
-   Use english for name of variable, function, route, file, folder, constanta, etc.

## Commit

-   Use conventional commit for commit message. See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
-   use english for commit message
