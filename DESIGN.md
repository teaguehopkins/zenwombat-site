---
name: Zen Wombat
description: Small games. Free. In your browser.
colors:
  ground: "#07090c"
  ink: "#dcefff"
  ink-soft: "#9db2c2"
  ink-faint: "#5d7080"
  rule: "rgb(150 215 255 / 0.2)"
  bloom: "rgb(150 215 255 / 0.35)"
  loot-field: "#24170c"
  loot-gold: "#f0c35a"
  loot-cream: "#f3dfb4"
  loot-red: "#d92b26"
  vec-field: "#0a131a"
  vec-cyan: "#81d4fa"
typography:
  display:
    fontFamily: "Tektur, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 2.6vw + 1.25rem, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 85"
  headline:
    fontFamily: "Tektur, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.75rem, 1.6vw + 1rem, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 90"
  wordmark:
    fontFamily: "Tektur, 'Arial Narrow', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 100"
  control:
    fontFamily: "Tektur, 'Arial Narrow', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.2em"
    fontVariation: "'wdth' 87.5"
  body:
    fontFamily: "Tektur, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  data:
    fontFamily: "'Martian Mono', ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 350
    lineHeight: 1.6
    fontVariation: "'wdth' 87.5"
  label:
    fontFamily: "'Martian Mono', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 450
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
  focus: "2px"
  key: "3px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 5vw, 72px)"
  strip-h: "64px"
  bar-h: "52px"
  cursor-indent: "36px"
components:
  button-play-loot:
    backgroundColor: "transparent"
    textColor: "{colors.loot-gold}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 22px 0 26px"
    height: "48px"
  button-play-loot-selected:
    backgroundColor: "{colors.loot-gold}"
    textColor: "{colors.loot-field}"
    rounded: "{rounded.none}"
    height: "48px"
  button-play-vector:
    backgroundColor: "transparent"
    textColor: "{colors.vec-cyan}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 22px 0 26px"
    height: "48px"
  button-play-vector-selected:
    backgroundColor: "{colors.vec-cyan}"
    textColor: "{colors.vec-field}"
    rounded: "{rounded.none}"
    height: "48px"
  badge-unread:
    backgroundColor: "{colors.loot-red}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.55em"
  keycap:
    backgroundColor: "transparent"
    textColor: "{colors.vec-cyan}"
    rounded: "{rounded.key}"
    padding: "0.2em 0.45em"
---

# Design System: Zen Wombat

## Overview

**Creative North Star: "The Vector Game-Select Screen"**

The studio presents itself as the menu of an old vector-display arcade cabinet. A near-black, blue-tinted tube carries pale phosphor line ink: hairline rules, the wordmark, and a single-stroke wombat glyph that blooms slightly as real phosphor would. At rest a row shows its colour only on its Play outline and its own badge. Each game is a full-width menu row, and the selected row wakes up in that game's own palette: Legends of Loot in brown, gold and a red notification dot, Vector in cyan on a deep teal-black.

Density is low and deliberate. Two rows fill the first viewport, and each holds one big title, one hook, one line of facts and one Play control, with art on the right. Type does the arcade work: Tektur's squared, condensed display cuts for names and controls, and Martian Mono for everything that reads like data, hints or system text. The chrome stays flat and square. Colour, bloom and motion are reserved for the selection.

**Key Characteristics:**
- Phosphor-on-black ground. Game colour fills a row only when it is selected, and Phosphor Cyan is the single house accent.
- Full-width bands separated by 1px phosphor hairlines, with no cards.
- Squared, uppercase Tektur display; Martian Mono for data, labels and keys.
- Bloom only on line ink (wordmark, wombat glyph, cursor ship).
- Selection is the signature interaction: arrow keys or pointer move a ship cursor, and the row's field, title and Play light up.

## Colors

The palette is a cold phosphor monochrome that hands over to each game's own colours on selection, so game colour reads as a reward rather than decoration.

### Primary
- **Loot Gold** (loot-gold): Legends of Loot's accent. Used for the selected title, the Play outline and fill, and the cursor ship on that row.
- **Phosphor Cyan** (vec-cyan): Vector's accent, and the house default accent when no game owns the surface (404, focus fallback, selection highlight, keycap glyphs, caret, footer link hover).

### Secondary
- **Notification Red** (loot-red): Legends of Loot's unread badge only. It is the game's own device, not a general alert colour.
- **Parchment Cream** (loot-cream): hook text on the selected Legends of Loot row, replacing phosphor ink so prose sits warm on the brown field.

### Neutral
- **Tube Black** (ground): the page ground and every unselected row.
- **Phosphor Ink** (ink): wordmark, wombat glyph, headings, and the final About paragraph.
- **Dim Phosphor** (ink-soft): unselected titles, hooks at rest, facts, tagline, notes, footer, controls bar.
- **Faint Phosphor** (ink-faint): non-text only (about 3.9:1 on ground). Used for fact separators, keycap borders, footer link underlines and the scrollbar thumb.
- **Phosphor Rule** (rule): every hairline: the strip, row and art dividers, the controls bar and the footer.
- **Phosphor Bloom** (bloom): the drop-shadow colour for line-ink bloom.
- **Loot Field** (loot-field) and **Vector Field** (vec-field): each row's lit background, shown only when the row is selected (and always on narrow screens).

### Named Rules
**The Lights-On Rule.** A game's colours stay on its own row. At rest the row carries its accent only on the Play outline and its own badge. Selection lights the field, title, hook and cursor (on narrow screens every row is lit). Shared chrome stays phosphor monochrome, with Phosphor Cyan as its only accent.

**The Own-Palette Rule.** Every game row declares its own accent and field. A new game brings its own colours from its own identity. It never borrows another game's colours or invents a studio accent.

**The Art-Scope Rule.** Colours inside game art (the Legends of Loot raster, and the Vector canvas's ship colours, amber gravity well and white tracers) belong to the art. They are not UI tokens.

## Typography

**Display Font:** Tektur (fallback 'Arial Narrow', sans-serif)
**Body Font:** Tektur at 100% width (fallback system-ui)
**Label/Mono Font:** Martian Mono (fallback ui-monospace, monospace)

**Character:** Tektur's chamfered, squared letterforms read as arcade cabinet lettering, and condensing them gives titles a marquee weight. Martian Mono is the system voice: terminal-flat data, hints and footer text, set slightly narrow (87.5%) across the body.

Both faces are self-hosted variable fonts under the SIL OFL. Tektur spans weights 400 to 900 and widths 75% to 100%; Martian Mono spans weights 300 to 600 and widths 75% to 112.5%.

### Hierarchy
- **Display** (Tektur 800, 85% width, clamp 2.25rem to 4.25rem, line-height 0.95, uppercase): game titles in the menu, and the 404 headline at a larger clamp (2.5rem to 5rem).
- **Headline** (Tektur 700, 90% width, clamp 1.75rem to 2.5rem, line-height 1.05, uppercase, +0.02em): section heads such as the About title.
- **Wordmark** (Tektur 700, 100% width, 1.125rem, uppercase, +0.14em): the studio name in the strip.
- **Control** (Tektur 700, 87.5% width as inherited from body, 1.125rem, uppercase, +0.2em): the Play label.
- **Body** (Tektur 400, 100% width, 1.125rem, line-height 1.5 to 1.6): hooks and About prose, capped at 40ch in rows and 62ch in About.
- **Data** (Martian Mono 350, 87.5% width, 0.9375rem, line-height 1.6): the base text register, used for the tagline, notes and footer at 0.75 to 0.8125rem.
- **Label** (Martian Mono 450, 0.6875rem, +0.08 to +0.1em, uppercase): fact lists and the controls bar.
- **Subtitle** (Martian Mono 400, 100% width, 0.8125rem, +0.12em): a game's real subtitle under its title, such as Vector's "Realistic Space Flight".

### Named Rules
**The Two Voices Rule.** Tektur speaks for names, controls and prose. Martian Mono speaks for data, hints, keys and system text. Never swap them.

**The Full-Width Prose Rule.** Running prose in Tektur is always weight 400 at 100% width. Only display sizes are condensed.

**The Real Subtitle Rule.** A tracked mono line under a title is used only when it is the game's actual subtitle. It is never a decorative label added above or below headings.

## Layout

The page is a vertical stack of full-width bands, with no centred container for the menu.

- **Top strip** (64px tall): wordmark and glyph on the left, tagline on the right, with a hairline below.
- **Menu rows:** each row is a two-column grid, with text at 0.95fr and art at 1.05fr. A row is at least 340px tall, or half of the viewport left after the strip and the 52px controls bar, so two rows fill the first screen. Text sits vertically centred with an 18px gap. Its left padding is the gutter plus a 36px indent, which reserves room for the cursor ship.
- **Controls bar** (52px): centred hints, echoing the in-game hint bar. It is hidden on touch and coarse-pointer devices.
- **About:** a two-column grid of the glyph plus up to 62ch of text, with generous vertical padding (clamp 80px to 160px top).
- **Footer:** copyright and game links, wrapped and spaced between.

The horizontal gutter is clamp(16px, 5vw, 72px) everywhere.

Below 820px:
- Rows become a single column, with art first at a 5:2 aspect ratio and a hairline beneath it.
- The cursor and the controls bar are hidden.
- Every row is lit in its own field and accent, with Play filled and stretched full width.
- The strip stacks the wordmark over the tagline, at a minimum height of 56px.
- About drops to one column.

## Elevation & Depth

The system is flat. Depth comes from light, not from layered surfaces: hairline rules divide space, and the selected row brightens its field rather than lifting. Only line ink glows.

On pointer devices, unselected art is dimmed (opacity 0.72, saturate 0.7) so the selected row reads as the lit screen.

### Shadow Vocabulary
- **Phosphor bloom** (`filter: drop-shadow(0 0 6px var(--bloom))`, or 10px on the large About glyph): the wordmark and wombat glyph.
- **Cursor bloom** (`filter: drop-shadow(0 0 6px color-mix(in srgb, var(--accent) 60%, transparent))`): the selected cursor ship, in its row's accent.
- **Selected lift** (`box-shadow: 0 8px 18px -8px rgb(0 0 0 / 0.7)`): a neutral black shadow under the selected, filled Play. This is a lift, not a glow.
- **Badge lift** (`box-shadow: 0 3px 6px rgb(0 0 0 / 0.5)`): the Legends of Loot unread badge, matching the game's own badge.

### Named Rules
**The Phosphor-Only Glow Rule.** Coloured glow belongs only to stroked line ink: the wordmark, the wombat glyph and the cursor ship. Titles, prose and buttons never get coloured glow or text-shadow. Glow inside game art (the canvas's ships and gravity well) belongs to the art and is not a UI precedent.

## Shapes

Shapes are square by default. Rows, buttons, art panels and bars have no corner radius, and edges are 1px hairlines (1.5px for the Play outline).

Rounding is limited to four named cases:
- the 2px focus outline;
- 3px keycaps;
- the fully pill-shaped unread badge, which is the game's own device;
- the favicon tile (12px on a 64px tile).

The line-art language is single-weight strokes with round joins for the wombat, and square caps on the arrow glyphs inside Play and the keycaps. The cursor is a flat dart-shaped ship.

## Components

### Buttons
The Play control is the only button: a squared arcade button that reads as an outline at rest and a lit slab when selected.
- **Shape:** square corners (0), at least 48px tall, padded 0 22px 0 26px. It has a 1.5px border in the row's accent.
- **Rest:** transparent with the accent as text and border. Tektur 700, 1.125rem, uppercase, +0.2em tracking. A 20px stroked arrow follows the label.
- **Selected:** the row's accent fills it, the label turns to the row's field colour, and the selected lift shadow applies. Transitions take 250ms on the house ease-out.
- **Hover / Focus / Active:** the arrow nudges 4px right on hover and focus. Active presses down 1px. The focus ring is a 2px outline in the accent, offset 4px.
- **Narrow screens:** always filled, stretched full width, with a centred label.

### Chips
- **Unread badge:** Notification Red pill with white Martian Mono 600 at 0.75rem. It sits raised beside the Legends of Loot title. This is game identity only.
- **Keycaps:** transparent, 1px faint-phosphor border, 3px radius, Martian Mono with cyan glyphs. Used for keyboard hints (stroked arrow SVGs, and "Enter").

### Navigation
- **Game-select menu:** an ordered list of rows. Pointer hover (mouse only), focus, and the up and down arrow keys move the selection. Enter plays the selected game when focus is on the page.
- **Footer nav:** Martian Mono at 0.75rem in dim phosphor, underlined in faint phosphor with a 4px offset. On hover the text turns to ink and the underline to cyan.

### Game Row (signature)
Each row is a full-width band that sets its own accent and field.
- **At rest:** tube-black ground, dim title, dim hook, and art dimmed on pointer devices.
- **Selected:** the field fades in over 600ms, the title takes the accent over 400ms, and the hook brightens to ink (cream on Legends of Loot). The cursor ship slides in from 10px left with an accent bloom.
- **Contents, in order:** title (with an optional real subtitle or badge), hook, a facts line split by faint "/" separators, Play, and an optional mono note.
- **Art panel:** sits on a hairline divider. Legends of Loot uses key art masked to fade at its edges. Vector uses a live canvas of its four ships orbiting a gravity well.
- **Motion:** all motion uses ease-out cubic-bezier(0.16, 1, 0.3, 1). Under reduced motion, transitions collapse to near zero.

## Do's and Don'ts

### Do:
- **Do** give every game row its own accent and field taken from that game's identity. At rest show the accent only on Play and the game's own badge, and light the field, title and hook on selection (always lit below 820px).
- **Do** separate regions with 1px phosphor hairlines (rule) rather than cards, panels or background changes.
- **Do** set titles in uppercase Tektur 800 at 85% width, and prose in Tektur 400 at 100% width.
- **Do** use Martian Mono for facts, hints, keys, notes, the tagline and the footer.
- **Do** keep chrome square, and round only the focus ring (2px), keycaps (3px) and the game's own badge (pill).
- **Do** set each row's facts as one uppercase mono line, with items split by faint "/" separators.

### Don't:
- **Don't** put coloured glow or text-shadow on titles, prose or buttons. Bloom is for line ink only (wordmark, glyph, cursor).
- **Don't** add any studio accent beyond Phosphor Cyan. Other colour belongs to the games, on their own rows.
- **Don't** use ink-faint for text. It is for separators, borders and underlines only.
- **Don't** lift Vector canvas colours (ship colours, amber well, white tracers) or Legends of Loot raster colours into UI chrome.
- **Don't** add tracked mono labels above headings. A mono subtitle appears only when it is a game's real subtitle.
- **Don't** use rounded cards or equal-card grids for games. Games are full-width menu rows.
