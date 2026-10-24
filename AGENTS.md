<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep approved product photography and confirmed dish prices in src/data/menu.ts as the shared source for favorites and menu detail views, so replacements stay synchronized.
- Keep optional menu subgroup labels on the shared menu items and render consecutive group headings within the existing category anchor, so subgroup organization does not duplicate items or navigation tabs.
- Keep location addresses and confirmed food-service hours in src/data/locations.ts and render shared LocationCards on home and locations pages to avoid inconsistent business details.
- Stage-one ordering is presentation-only navigation; no order actions or commerce services are implemented.
- The full workbook-driven menu remains pending until the supplied workbook is available; publish only the six dishes explicitly confirmed in the brief rather than importing outdated website data.
