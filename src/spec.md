# Specification

## Summary
**Goal:** Ensure every marble art item card displays a unique, category-appropriate placeholder image that matches its title/collection.

**Planned changes:**
- Update `frontend/src/data/placeholders.ts` so each MarbleItem in each collection (Krishna, Ganesha, Shiva, Parvati, Handmade Human Portraits, Marble Structures, Other Gods) points to its own dedicated local image path under `/assets/generated`.
- Verify no placeholder image paths are reused within the same collection and that all referenced filenames exist under `frontend/public/assets/generated` to prevent broken images.

**User-visible outcome:** Each collection shows 4 distinct item images that clearly match the collection/category, with all images loading from local static assets (no repeated or broken placeholder images).
