# Design

## Visual Theme
A "warm minimalist" aesthetic. High-quality typography, intentional whitespace, and a soft, human feel. Avoids "AI slop" through custom textures and precise grid systems.

## Color Palette
Using OKLCH for precision and brand tinting.

- **Background**: `oklch(98% 0.01 45)` (Premium Off-White, warm paper feel)
- **Surface**: `oklch(96% 0.01 45)` (Subtle depth)
- **Foreground**: `oklch(20% 0.02 45)` (Deep charcoal for precision)
- **Accent**: `oklch(65% 0.22 45)` (Premium Vibrant Orange)
- **Subtle**: `oklch(92% 0.01 45)` (Warm dividers)

## Typography
- **Heading**: `Outfit` or `Inter` (Precise, geometric but friendly)
- **Body**: `Inter` (Highly readable)
- **Mono**: `JetBrains Mono` (For technical precision hints)

## Layout
- **Grid**: 12-column grid with generous margins.
- **Rhythm**: Varied spacing to create a dynamic flow (not just same padding everywhere).

## Components
- **Buttons**: Minimal, solid or outlined with subtle hover state (no heavy shadows).
- **Cards**: Low-elevation, border-driven (no side-stripe accents).

## Motion
- **Energy**: Calm and intentional.
- **Curves**: `cubic-bezier(0.2, 0, 0, 1)` (smooth ease-out-expo).
- **Micro-interactions**: Subtle hover scaling and opacity shifts.
