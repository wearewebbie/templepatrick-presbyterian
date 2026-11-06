# Conventions

- **Spacing uses arbitrary pixel values in Tailwind**, never the default scale. Write `pt-[40px]`, `gap-[24px]`, `p-[16px]`, `top-[80px]`, not `pt-10`, `gap-6`, `p-4`, `top-20`. This applies to padding, margin, gap, space, inset/position offsets and similar spacing utilities.
- **Events data (`src/_data/events.json`):** `title`, `tag` and `image` are required. `tag` is the category used for the filter tabs at the top of the What's On page, so spell the same tag identically across events. `what`, `when`, `where` and `contact` are optional, so templates must check each one before rendering it and its label.
