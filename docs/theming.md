# Theming and Coloring

This document explains how theming (specifically dark mode) and coloring are handled in this project.

## Overview

The project uses [Tailwind CSS](https://tailwindcss.com/) for styling and relies on CSS variables for theming, following conventions similar to [shadcn/ui](https://ui.shadcn.com/).

## CSS Variables

-   Theme variables (colors, radius, etc.) are defined in `app/globals.css`.
-   Variables for the default (light) theme are defined under the `:root` selector.
-   Variables for the dark theme are defined under the `.dark` selector.
-   These variables follow the `hsl()` format for colors (e.g., `--background: 222 47% 11%;`).

## Dark Mode Implementation

-   **Current State:** Dark mode is currently **hardcoded** by adding `className="dark"` directly to the `<html>` tag in `app/layout.tsx`.
-   **ThemeProvider Issue:** We previously attempted to use `next-themes` via the `components/theme-provider.tsx` component. However, enabling `ThemeProvider` caused the dark background styles to stop applying correctly. As a temporary workaround, `ThemeProvider` has been removed, and the `dark` class is applied manually. This forces the application into dark mode.
-   **Future Work:** Ideally, the issue with `ThemeProvider` should be investigated further to allow for dynamic theme switching (light/dark/system) if needed.

## Applying Colors

1.  **Tailwind Utilities:** Use standard Tailwind utility classes that leverage the defined CSS variables:
    *   `bg-background`, `text-foreground`
    *   `bg-card`, `text-card-foreground`
    *   `bg-primary`, `text-primary-foreground`
    *   `bg-secondary`, `text-secondary-foreground`
    *   `bg-muted`, `text-muted-foreground`
    *   `bg-accent`, `text-accent-foreground`
    *   `border-border`, `ring-ring`, `bg-input`
    *   etc.
    These utilities automatically adapt based on whether the `.dark` class is present on the `<html>` element.

2.  **Global Body Styles:** Due to the debugging steps taken to resolve the background color issue, the base `background-color` and `color` for the `<body>` element are currently applied directly using CSS variables in `app/globals.css`, *after* the `@tailwind` directives:
    ```css
    /* Apply body styles directly using CSS variables AFTER Tailwind directives */
    body {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
    }
    ```
    This bypasses the standard `@layer base { body { @apply bg-background text-foreground; } }` approach, which seemed to be part of the conflict when `ThemeProvider` was active.

## Custom Colors

-   Custom, non-theme-related colors (like specific shades of violet or teal used in gradients) are defined directly in `tailwind.config.ts` under `theme.extend.colors`.
-   Theme-related colors defined via CSS variables are also mapped in `tailwind.config.ts` (e.g., `background: "hsl(var(--background))"`) to make them easily accessible via Tailwind utilities.
