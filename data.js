// MSM Companion — Game Data
// ─────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW MONSTER
// 1. Copy an existing entry from the monsters array below.
// 2. Update: n (name), r (rarity), c (class), e (elements).
// 3. Add one entry per island inside "islands": [...].
//
// Island appearance fields:
//   island   : island name (must match islandOrder)
//   combo    : array of monster names needed to breed it, or null if not breedable
//              e.g. ["Potbelly", "Noggin"]  or  ["Any Earth Triple", "Any Earth Triple"]
//              Single-element monsters: ["Noggin", "Entbrat"]  (itself + quad of that island)
//   obtain   : how to get it when combo is null — use one of the standard values below
//   time     : full incubation/breed time e.g. "8h", "1d 6h", "2d 12h 30m"
//   enhanced : enhanced incubation time (optional)
//   failed_attempt: true if this island entry only appears as a breed failure (optional)
//
// STANDARD OBTAIN VALUES (used in the Database "Obtain" column):
//   "Buy from Market"        — purchased with coins/diamonds
//   "Buy with Relics"        — purchased with Relics currency
//   "Buy with Stardust"      — purchased with Stardust currency
//   "Teleport"               — teleported from another island (Gold Island, Colossingum, etc.)
//   "Zapping"                — zapped to life (Wublin Island, Amber Island, Celestial Island)
//   "Fuging"                 — Paironormal fuging mechanic
//   "Synthesis"              — Ethereal Workshop synthesis
//   "Buy from Market or Teleport" — available both ways
//   any other string         — shown as-is in the Obtain column
//
// HOW TO ADD A NEW ZAPPING TARGET (Wublin / Amber / Celestial)
// Add an entry to zapTargets with: n, island, limit, requirements[].
// Each requirement: { monster: "Name", eggs: N }
//
// RARITIES:  "Common" | "Rare" | "Epic" | "Legendary" | "Young" | "Adult"
// CLASSES:   "Natural" | "Fire" | "Magical" | "Ethereal" | "Paironormal"
//            "Primordial" | "Supernatural" | "Legendary" | "Seasonal"
//            "Mythical" | "Celestial" | "Dipster" | "Titansoul"
//

window.DB = {

  // ── Island order ────────────────────────────────────────────────────────────
  "islandOrder": [
    "Plant Island",
    "Cold Island",
    "Air Island",
    "Water Island",
    "Earth Island",
    "Fire Haven",
    "Fire Oasis",
    "Light Island",
    "Psychic Island",
    "Faerie Island",
    "Bone Island",
    "Shugabush Island",
    "Ethereal Island",
    "Mythical Island",
    "Magical Sanctum",
    "Seasonal Shanty",
    "Amber Island",
    "Wublin Island",
    "Celestial Island",
    "Colossingum",
    "Gold Island",
    "Ethereal Workshop",
    "Magical Nexus",
    "Major Paironormal Carnival",
    "Mirror Plant Island",
    "Mirror Cold Island",
    "Mirror Air Island",
    "Mirror Water Island",
    "Mirror Earth Island",
    "Mirror Light Island",
    "Mirror Psychic Island",
    "Mirror Faerie Island",
    "Mirror Bone Island",
    "Minor Paironormal Carnival",
    "Plasma Islet",
    "Mech Islet",
    "Shadow Islet",
    "Crystal Islet"
  ],

  // ── Monsters ────────────────────────────────────────────────────────────────
  "monsters": [
  {
    "n": "Tweedle",
    "r": "Common",
    "c": "Natural",
    "e": ["Air"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Deedge"], "time": "4h", "enhanced": "3h" },
      { "island": "Air Island", "combo": ["Tweedle", "Riff"], "time": "4h", "enhanced": "3h" },
      { "island": "Water Island", "combo": ["Tweedle", "Shellbeat"], "time": "4h", "enhanced": "3h" },
      { "island": "Earth Island", "combo": ["Tweedle", "Quarrister"], "time": "4h", "enhanced": "3h" },
      { "island": "Fire Haven", "combo": ["Tweedle", "Tring"], "time": "4h", "enhanced": "3h" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Sneyser"], "time": "4h", "enhanced": "3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Deedge"], "time": "4h", "enhanced": "3h" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Riff"], "time": "4h", "enhanced": "3h" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Shellbeat"], "time": "4h", "enhanced": "3h" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Quarrister"], "time": "4h", "enhanced": "3h" }
    ]
  },
  {
    "n": "Potbelly",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Entbrat"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Cold Island", "combo": ["Potbelly", "Deedge"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Water Island", "combo": ["Potbelly", "Shellbeat"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Earth Island", "combo": ["Potbelly", "Quarrister"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Fire Haven", "combo": ["Potbelly", "Tring"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Light Island", "combo": ["Potbelly", "Blow't"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Psychic Island", "combo": ["Potbelly", "Gloptic"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Shugabush Island", "combo": ["Potbelly", "Shugabush"], "obtain": "Teleport", "time": "2h", "enhanced": "1h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Entbrat"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Mirror Cold Island", "combo": ["Potbelly", "Deedge"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Mirror Water Island", "combo": ["Potbelly", "Shellbeat"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Mirror Earth Island", "combo": ["Potbelly", "Quarrister"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Blow't"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Gloptic"], "time": "2h", "enhanced": "1h 30m" }
    ]
  },
  {
    "n": "Noggin",
    "r": "Common",
    "c": "Natural",
    "e": ["Earth"],
    "islands": [
      { "island": "Plant Island", "combo": ["Noggin", "Entbrat"], "time": "5s", "enhanced": "3s" },
      { "island": "Air Island", "combo": ["Noggin", "Riff"], "time": "5s", "enhanced": "3s" },
      { "island": "Water Island", "combo": ["Noggin", "Shellbeat"], "time": "5s", "enhanced": "3s" },
      { "island": "Earth Island", "combo": ["Noggin", "Quarrister"], "time": "5s", "enhanced": "3s" },
      { "island": "Fire Haven", "combo": ["Noggin", "Tring"], "time": "5s", "enhanced": "3s" },
      { "island": "Faerie Island", "combo": ["Noggin", "Pladdie"], "time": "5s", "enhanced": "3s" },
      { "island": "Bone Island", "combo": ["Noggin", "Plinkajou"], "time": "5s", "enhanced": "3s" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Noggin", "Entbrat"], "time": "5s", "enhanced": "3s" },
      { "island": "Mirror Air Island", "combo": ["Noggin", "Riff"], "time": "5s", "enhanced": "3s" },
      { "island": "Mirror Water Island", "combo": ["Noggin", "Shellbeat"], "time": "5s", "enhanced": "3s" },
      { "island": "Mirror Earth Island", "combo": ["Noggin", "Quarrister"], "time": "5s", "enhanced": "3s" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Pladdie"], "time": "5s", "enhanced": "3s" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Plinkajou"], "time": "5s", "enhanced": "3s" }
    ]
  },
  {
    "n": "Toe Jammer",
    "r": "Common",
    "c": "Natural",
    "e": ["Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Toe Jammer", "Entbrat"], "time": "1m", "enhanced": "45s" },
      { "island": "Cold Island", "combo": ["Toe Jammer", "Deedge"], "time": "1m", "enhanced": "45s" },
      { "island": "Air Island", "combo": ["Toe Jammer", "Riff"], "time": "1m", "enhanced": "45s" },
      { "island": "Water Island", "combo": ["Toe Jammer", "Shellbeat"], "time": "1m", "enhanced": "45s" },
      { "island": "Fire Oasis", "combo": ["Toe Jammer", "Sneyser"], "time": "1m", "enhanced": "45s" },
      { "island": "Psychic Island", "combo": ["Toe Jammer", "Gloptic"], "time": "1m", "enhanced": "45s" },
      { "island": "Bone Island", "combo": ["Toe Jammer", "Plinkajou"], "time": "1m", "enhanced": "45s" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Toe Jammer", "Entbrat"], "time": "1m", "enhanced": "45s" },
      { "island": "Mirror Cold Island", "combo": ["Toe Jammer", "Deedge"], "time": "1m", "enhanced": "45s" },
      { "island": "Mirror Air Island", "combo": ["Toe Jammer", "Riff"], "time": "1m", "enhanced": "45s" },
      { "island": "Mirror Water Island", "combo": ["Toe Jammer", "Shellbeat"], "time": "1m", "enhanced": "45s" },
      { "island": "Mirror Psychic Island", "combo": ["Toe Jammer", "Gloptic"], "time": "1m", "enhanced": "45s" },
      { "island": "Mirror Bone Island", "combo": ["Toe Jammer", "Plinkajou"], "time": "1m", "enhanced": "45s" }
    ]
  },
  {
    "n": "Mammott",
    "r": "Common",
    "c": "Natural",
    "e": ["Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Mammott", "Entbrat"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Cold Island", "combo": ["Mammott", "Deedge"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Air Island", "combo": ["Mammott", "Riff"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Earth Island", "combo": ["Mammott", "Quarrister"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Fire Oasis", "combo": ["Mammott", "Sneyser"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Light Island", "combo": ["Mammott", "Blow't"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Faerie Island", "combo": ["Mammott", "Pladdie"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Shugabush Island", "combo": ["Mammott", "Shugabush"], "obtain": "Teleport", "time": "2m", "enhanced": "1m 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Mammott", "Entbrat"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Mirror Cold Island", "combo": ["Mammott", "Deedge"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Mirror Air Island", "combo": ["Mammott", "Riff"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Mirror Earth Island", "combo": ["Mammott", "Quarrister"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Mirror Light Island", "combo": ["Mammott", "Blow't"], "time": "2m", "enhanced": "1m 30m" },
      { "island": "Mirror Faerie Island", "combo": ["Mammott", "Pladdie"], "time": "2m", "enhanced": "1m 30m" }
    ]
  },
  {
    "n": "Rare Tweedle",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air"],
    "islands": [
      { "island": "Cold Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Air Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Water Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Earth Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Fire Haven", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Fire Oasis", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Air Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Water Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Earth Island", "combo": ["Any Air Triple", "Any Air Triple"], "time": "6h", "enhanced": "4h 30m" }
    ]
  },
  {
    "n": "Rare Potbelly",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant"],
    "islands": [
      { "island": "Plant Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Cold Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Water Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Earth Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Fire Haven", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Light Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Psychic Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Potbelly"], "time": "2h", "enhanced": "1h 30m", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Cold Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Water Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Earth Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Light Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Psychic Island", "combo": ["Any Plant Triple", "Any Plant Triple"], "time": "6h", "enhanced": "4h 30m" }
    ]
  },
  {
    "n": "Rare Noggin",
    "r": "Rare",
    "c": "Natural",
    "e": ["Earth"],
    "islands": [
      { "island": "Plant Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Air Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Water Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Earth Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Fire Haven", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Faerie Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Bone Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Air Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Water Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Earth Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Faerie Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Bone Island", "combo": ["Any Earth Triple", "Any Earth Triple"], "time": "6h", "enhanced": "4h 30m" }
    ]
  },
  {
    "n": "Rare Toe Jammer",
    "r": "Rare",
    "c": "Natural",
    "e": ["Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Cold Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Air Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Water Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Fire Oasis", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Psychic Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Bone Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Cold Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Air Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Water Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Psychic Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Bone Island", "combo": ["Any Water Triple", "Any Water Triple"], "time": "6h", "enhanced": "4h 30m" }
    ]
  },
  {
    "n": "Rare Mammott",
    "r": "Rare",
    "c": "Natural",
    "e": ["Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Cold Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Air Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Earth Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Fire Oasis", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Light Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Faerie Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Mammott"], "time": "2m", "enhanced": "1m 30m", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Cold Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Air Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Earth Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Light Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" },
      { "island": "Mirror Faerie Island", "combo": ["Any Cold Triple", "Any Cold Triple"], "time": "6h", "enhanced": "4h 30m" }
    ]
  },
  {
    "n": "Epic Tweedle",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air"],
    "islands": [
      { "island": "Cold Island", "combo": ["Deedge", "Dandidoo"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Air Island", "combo": ["Riff", "Cybop"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Water Island", "combo": ["Shellbeat", "Quibble"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Earth Island", "combo": ["Quarrister", "Pango"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Fire Haven", "combo": ["Tring", "Shrubb"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Fire Oasis", "combo": ["Sneyser", "Maw"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Dandidoo"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Cybop"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Quibble"], "time": "11h", "enhanced": "8h 15m" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Pango"], "time": "11h", "enhanced": "8h 15m" }
    ]
  },
  {
    "n": "Epic Potbelly",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Shrubb"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Cold Island", "combo": ["Deedge", "Oaktopus"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Water Island", "combo": ["Shellbeat", "Dandidoo"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Earth Island", "combo": ["Quarrister", "Furcorn"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Fire Haven", "combo": ["Tring", "Cybop"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Light Island", "combo": ["Blow't", "Boskus"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Psychic Island", "combo": ["Gloptic", "Phangler"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Furcorn"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Shrubb"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Oaktopus"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Dandidoo"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Furcorn"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Boskus"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Phangler"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Epic Noggin",
    "r": "Epic",
    "c": "Natural",
    "e": ["Earth"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Fwog"], "time": "1h", "enhanced": "45m" },
      { "island": "Air Island", "combo": ["Riff", "Drumpler"], "time": "1h", "enhanced": "45m" },
      { "island": "Water Island", "combo": ["Shellbeat", "Shrubb"], "time": "1h", "enhanced": "45m" },
      { "island": "Earth Island", "combo": ["Quarrister", "Cybop"], "time": "1h", "enhanced": "45m" },
      { "island": "Fire Haven", "combo": ["Tring", "Dandidoo"], "time": "1h", "enhanced": "45m" },
      { "island": "Faerie Island", "combo": ["Pladdie", "Boskus"], "time": "1h", "enhanced": "45m" },
      { "island": "Bone Island", "combo": ["Plinkajou", "Phangler"], "time": "1h", "enhanced": "45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Fwog"], "time": "1h", "enhanced": "45m" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Drumpler"], "time": "1h", "enhanced": "45m" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Shrubb"], "time": "1h", "enhanced": "45m" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Cybop"], "time": "1h", "enhanced": "45m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Boskus"], "time": "1h", "enhanced": "45m" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Phangler"], "time": "1h", "enhanced": "45m" }
    ]
  },
  {
    "n": "Epic Toe Jammer",
    "r": "Epic",
    "c": "Natural",
    "e": ["Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Oaktopus"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Cold Island", "combo": ["Deedge", "Quibble"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Air Island", "combo": ["Riff", "Maw"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Water Island", "combo": ["Shellbeat", "Fwog"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Fire Oasis", "combo": ["Sneyser", "Pango"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Psychic Island", "combo": ["Gloptic", "Flowah"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Bone Island", "combo": ["Plinkajou", "Stogg"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Oaktopus"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Quibble"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Maw"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Fwog"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Flowah"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Stogg"], "time": "3h", "enhanced": "2h 15m" }
    ]
  },
  {
    "n": "Epic Mammott",
    "r": "Epic",
    "c": "Natural",
    "e": ["Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Furcorn"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Cold Island", "combo": ["Deedge", "Maw"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Air Island", "combo": ["Riff", "Pango"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Earth Island", "combo": ["Quarrister", "Drumpler"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Fire Oasis", "combo": ["Sneyser", "Quibble"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Light Island", "combo": ["Blow't", "Flowah"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Faerie Island", "combo": ["Pladdie", "Stogg"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Oaktopus"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Furcorn"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Maw"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Pango"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Drumpler"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Flowah"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Stogg"], "time": "5h", "enhanced": "3h 45m" }
    ]
  },
  {
    "n": "Dandidoo",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" },
      { "island": "Fire Haven", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Potbelly"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Cybop",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Earth"],
    "islands": [
      { "island": "Air Island", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Fire Haven", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Noggin"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Quibble",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Water"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Air Island", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Shugabush Island", "combo": ["Quibble", "Shugabush"], "obtain": "Teleport", "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Toe Jammer"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Pango",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Air Island", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Mammott"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Shrubb",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Earth"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Fire Haven", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": ["Potbelly", "Noggin"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Oaktopus",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Cold Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Psychic Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Shugabush Island", "combo": ["Oaktopus", "Shugabush"], "obtain": "Teleport", "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Cold Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Toe Jammer"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Furcorn",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Cold Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Light Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Shugabush Island", "combo": ["Furcorn", "Shugabush"], "obtain": "Teleport", "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Cold Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Mammott"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Fwog",
    "r": "Common",
    "c": "Natural",
    "e": ["Earth", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Air Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Water Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Bone Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Air Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Water Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Toe Jammer"], "time": "30m", "enhanced": "22m 30s" }
    ]
  },
  {
    "n": "Drumpler",
    "r": "Common",
    "c": "Natural",
    "e": ["Earth", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Air Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Earth Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Faerie Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Air Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Mammott"], "time": "30m", "enhanced": "22m 30s" }
    ]
  },
  {
    "n": "Maw",
    "r": "Common",
    "c": "Natural",
    "e": ["Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Cold Island", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Air Island", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Fire Oasis", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Cold Island", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" },
      { "island": "Mirror Air Island", "combo": ["Toe Jammer", "Mammott"], "time": "30m", "enhanced": "22m 30s" }
    ]
  },
  {
    "n": "Rare Dandidoo",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Water Island", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Earth Island", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Fire Haven", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Potbelly"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Cybop",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Earth"],
    "islands": [
      { "island": "Air Island", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Water Island", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Earth Island", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Fire Haven", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Quibble",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Water"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Air Island", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Water Island", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Quibble"], "time": "8h", "enhanced": "6h", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Water Island", "combo": ["Tweedle", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Pango",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Air Island", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Earth Island", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Air Island", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Tweedle", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Shrubb",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Earth"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Water Island", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Earth Island", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Fire Haven", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Water Island", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Potbelly", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Oaktopus",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Cold Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Water Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Psychic Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Oaktopus"], "time": "8h", "enhanced": "6h", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Cold Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Water Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Toe Jammer"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Furcorn",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Cold Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Earth Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Light Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Furcorn"], "time": "8h", "enhanced": "6h", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Cold Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Mammott"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Fwog",
    "r": "Rare",
    "c": "Natural",
    "e": ["Earth", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Air Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Water Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Bone Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Mirror Air Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Mirror Water Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Toe Jammer"], "time": "1h 15m", "enhanced": "56m 15s" }
    ]
  },
  {
    "n": "Rare Drumpler",
    "r": "Rare",
    "c": "Natural",
    "e": ["Earth", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Air Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Earth Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Faerie Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Mirror Air Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Mirror Earth Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" }
    ]
  },
  {
    "n": "Rare Maw",
    "r": "Rare",
    "c": "Natural",
    "e": ["Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Cold Island", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Air Island", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Fire Oasis", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Mirror Cold Island", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" },
      { "island": "Mirror Air Island", "combo": ["Toe Jammer", "Mammott"], "time": "1h 7m 30s", "enhanced": "50m 37s" }
    ]
  },
  {
    "n": "Epic Dandidoo",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant"],
    "islands": [
      { "island": "Cold Island", "combo": ["Bowgart", "Quibble"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Water Island", "combo": ["Pummel", "Cybop"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Earth Island", "combo": ["Clamble", "Pango"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Fire Haven", "combo": ["Reedling", "Flowah"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Bowgart", "Quibble"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Mirror Water Island", "combo": ["Pummel", "Cybop"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Mirror Earth Island", "combo": ["Clamble", "Pango"], "time": "1d 5h", "enhanced": "21h 45m" }
    ]
  },
  {
    "n": "Epic Cybop",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Earth"],
    "islands": [
      { "island": "Air Island", "combo": ["Congle", "Drumpler"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Water Island", "combo": ["Scups", "Dandidoo"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Earth Island", "combo": ["PomPom", "Shrubb"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Fire Haven", "combo": ["Reedling", "Stogg"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Congle", "Drumpler"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mirror Water Island", "combo": ["Scups", "Dandidoo"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mirror Earth Island", "combo": ["PomPom", "Shrubb"], "time": "23h", "enhanced": "17h 15m" }
    ]
  },
  {
    "n": "Epic Quibble",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Water"],
    "islands": [
      { "island": "Cold Island", "combo": ["Congle", "Dandidoo"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Air Island", "combo": ["Scups", "Maw"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Water Island", "combo": ["Spunge", "Shrubb"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Fire Oasis", "combo": ["Wynq", "Pango"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "PomPom"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Congle", "Dandidoo"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Mirror Air Island", "combo": ["Scups", "Maw"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Shrubb"], "time": "21h", "enhanced": "15h 45m" }
    ]
  },
  {
    "n": "Epic Pango",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Oaktopus"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Air Island", "combo": ["Congle", "Cybop"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Earth Island", "combo": ["Reedling", "Furcorn"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Fire Oasis", "combo": ["Whaddle", "Maw"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Oaktopus"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Mirror Air Island", "combo": ["Congle", "Cybop"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Mirror Earth Island", "combo": ["Reedling", "Furcorn"], "time": "1d 3h", "enhanced": "20h 15m" }
    ]
  },
  {
    "n": "Epic Shrubb",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Earth"],
    "islands": [
      { "island": "Plant Island", "combo": ["T-Rox", "Oaktopus"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Water Island", "combo": ["Reedling", "Quibble"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Earth Island", "combo": ["PomPom", "Dandidoo"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Fire Haven", "combo": ["Barrb", "Cybop"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["T-Rox", "Oaktopus"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Mirror Water Island", "combo": ["Reedling", "Quibble"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Mirror Earth Island", "combo": ["PomPom", "Dandidoo"], "time": "19h", "enhanced": "14h 15m" }
    ]
  },
  {
    "n": "Epic Oaktopus",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "Shrubb"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Cold Island", "combo": ["Spunge", "Pango"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Water Island", "combo": ["Reedling", "Fwog"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Psychic Island", "combo": ["Rootitoot", "Bonkers"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Quibble"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "Shrubb"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Mirror Cold Island", "combo": ["Spunge", "Pango"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Mirror Water Island", "combo": ["Reedling", "Fwog"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Rootitoot", "Bonkers"], "time": "1d 7h", "enhanced": "23h 15m" }
    ]
  },
  {
    "n": "Epic Furcorn",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Clamble", "Fwog"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Cold Island", "combo": ["Spunge", "Maw"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Earth Island", "combo": ["Thumpies", "Drumpler"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Light Island", "combo": ["Sooza", "Pluckbill"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Deedge"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Clamble", "Fwog"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Mirror Cold Island", "combo": ["Spunge", "Maw"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "Drumpler"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Mirror Light Island", "combo": ["Sooza", "Pluckbill"], "time": "17h", "enhanced": "12h 45m" }
    ]
  },
  {
    "n": "Epic Fwog",
    "r": "Epic",
    "c": "Natural",
    "e": ["Earth", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Pummel", "Furcorn"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Air Island", "combo": ["Scups", "Pango"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Water Island", "combo": ["Reedling", "Oaktopus"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Bone Island", "combo": ["Thrumble", "Denchuhs"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Pummel", "Furcorn"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Air Island", "combo": ["Scups", "Pango"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Water Island", "combo": ["Reedling", "Oaktopus"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Thrumble", "Denchuhs"], "time": "7h", "enhanced": "5h 15m" }
    ]
  },
  {
    "n": "Epic Drumpler",
    "r": "Epic",
    "c": "Natural",
    "e": ["Earth", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Clamble", "Maw"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Air Island", "combo": ["PomPom", "Fwog"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Earth Island", "combo": ["Thumpies", "Cybop"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Faerie Island", "combo": ["Ziggurab", "HippityHop"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Clamble", "Maw"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Mirror Air Island", "combo": ["PomPom", "Fwog"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "Cybop"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Ziggurab", "HippityHop"], "time": "15h", "enhanced": "11h 15m" }
    ]
  },
  {
    "n": "Epic Maw",
    "r": "Epic",
    "c": "Natural",
    "e": ["Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "Drumpler"], "time": "13h", "enhanced": "9h 45m" },
      { "island": "Cold Island", "combo": ["Spunge", "Furcorn"], "time": "13h", "enhanced": "9h 45m" },
      { "island": "Air Island", "combo": ["T-Rox", "Quibble"], "time": "13h", "enhanced": "9h 45m" },
      { "island": "Fire Oasis", "combo": ["Whaddle", "Pango"], "time": "13h", "enhanced": "9h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "Drumpler"], "time": "13h", "enhanced": "9h 45m" },
      { "island": "Mirror Cold Island", "combo": ["Spunge", "Furcorn"], "time": "13h", "enhanced": "9h 45m" },
      { "island": "Mirror Air Island", "combo": ["T-Rox", "Quibble"], "time": "13h", "enhanced": "9h 45m" }
    ]
  },
  {
    "n": "Reedling",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth"],
    "islands": [
      { "island": "Water Island", "combo": ["Dandidoo", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Earth Island", "combo": ["Dandidoo", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Fire Haven", "combo": ["Dandidoo", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Dandidoo", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Earth Island", "combo": ["Dandidoo", "Noggin"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Spunge",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Water"],
    "islands": [
      { "island": "Cold Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Water Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Water Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Thumpies",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Dandidoo", "Mammott"], "time": "12h", "enhanced": "9h" },
      { "island": "Earth Island", "combo": ["Dandidoo", "Mammott"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Dandidoo", "Mammott"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Earth Island", "combo": ["Dandidoo", "Mammott"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Scups",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Earth", "Water"],
    "islands": [
      { "island": "Air Island", "combo": ["Quibble", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Water Island", "combo": ["Quibble", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Quibble", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Water Island", "combo": ["Quibble", "Noggin"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "PomPom",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Earth", "Cold"],
    "islands": [
      { "island": "Air Island", "combo": ["Pango", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Earth Island", "combo": ["Pango", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Shugabush Island", "combo": ["PomPom", "Shugabush"], "obtain": "Teleport", "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Pango", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Earth Island", "combo": ["Pango", "Noggin"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Congle",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Water", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Pango", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Air Island", "combo": ["Pango", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Fire Oasis", "combo": ["Pango", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Pango", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Air Island", "combo": ["Pango", "Toe Jammer"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Pummel",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Earth", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Oaktopus", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Water Island", "combo": ["Oaktopus", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Oaktopus", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Water Island", "combo": ["Oaktopus", "Noggin"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Clamble",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Earth", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Furcorn", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Earth Island", "combo": ["Furcorn", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Furcorn", "Noggin"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Earth Island", "combo": ["Furcorn", "Noggin"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Bowgart",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Furcorn", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Cold Island", "combo": ["Furcorn", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Furcorn", "Toe Jammer"], "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Cold Island", "combo": ["Furcorn", "Toe Jammer"], "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "T-Rox",
    "r": "Common",
    "c": "Natural",
    "e": ["Earth", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Maw", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Air Island", "combo": ["Maw", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Maw", "Noggin"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Air Island", "combo": ["Maw", "Noggin"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Rare Reedling",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth"],
    "islands": [
      { "island": "Water Island", "combo": ["Dandidoo", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Earth Island", "combo": ["Dandidoo", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Fire Haven", "combo": ["Dandidoo", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Dandidoo", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Dandidoo", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Spunge",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Water"],
    "islands": [
      { "island": "Cold Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Water Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Water Island", "combo": ["Dandidoo", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Thumpies",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Dandidoo", "Mammott"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Earth Island", "combo": ["Dandidoo", "Mammott"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Dandidoo", "Mammott"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Dandidoo", "Mammott"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Scups",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Earth", "Water"],
    "islands": [
      { "island": "Air Island", "combo": ["Quibble", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Water Island", "combo": ["Quibble", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Quibble", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Water Island", "combo": ["Quibble", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare PomPom",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Earth", "Cold"],
    "islands": [
      { "island": "Air Island", "combo": ["Pango", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Earth Island", "combo": ["Pango", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "PomPom"], "time": "12h", "enhanced": "9h", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Pango", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Pango", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Congle",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Water", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Pango", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Air Island", "combo": ["Pango", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Fire Oasis", "combo": ["Pango", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Pango", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Air Island", "combo": ["Pango", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Pummel",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Earth", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Oaktopus", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Water Island", "combo": ["Oaktopus", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Oaktopus", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Water Island", "combo": ["Oaktopus", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Clamble",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Earth", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Furcorn", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Earth Island", "combo": ["Furcorn", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Furcorn", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Earth Island", "combo": ["Furcorn", "Noggin"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare Bowgart",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Furcorn", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Cold Island", "combo": ["Furcorn", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Furcorn", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" },
      { "island": "Mirror Cold Island", "combo": ["Furcorn", "Toe Jammer"], "time": "15h 30m", "enhanced": "11h 37m 30s" }
    ]
  },
  {
    "n": "Rare T-Rox",
    "r": "Rare",
    "c": "Natural",
    "e": ["Earth", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Maw", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Air Island", "combo": ["Maw", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Maw", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" },
      { "island": "Mirror Air Island", "combo": ["Maw", "Noggin"], "time": "10h 30m", "enhanced": "7h 52m 30s" }
    ]
  },
  {
    "n": "Epic Reedling",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth"],
    "islands": [
      { "island": "Water Island", "combo": ["Spunge", "Fwog"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Earth Island", "combo": ["Thumpies", "Shrubb"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Fire Haven", "combo": ["Repatillo", "Cybop"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Fwog"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "Shrubb"], "time": "17h", "enhanced": "12h 45m" }
    ]
  },
  {
    "n": "Epic Spunge",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Water"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Quibble"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Water Island", "combo": ["Scups", "Oaktopus"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Quibble"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Mirror Water Island", "combo": ["Scups", "Oaktopus"], "time": "1d 1h", "enhanced": "18h 45m" }
    ]
  },
  {
    "n": "Epic Thumpies",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Congle", "Oaktopus"], "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Earth Island", "combo": ["Reedling", "Pango"], "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Congle", "Oaktopus"], "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Mirror Earth Island", "combo": ["Reedling", "Pango"], "time": "1d 9h", "enhanced": "1d 45m" }
    ]
  },
  {
    "n": "Epic Scups",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Earth", "Water"],
    "islands": [
      { "island": "Air Island", "combo": ["PomPom", "Maw"], "time": "1d 13h", "enhanced": "1d 3h 45m" },
      { "island": "Water Island", "combo": ["Pummel", "Dandidoo"], "time": "1d 13h", "enhanced": "1d 3h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["PomPom", "Maw"], "time": "1d 13h", "enhanced": "1d 3h 45m" },
      { "island": "Mirror Water Island", "combo": ["Pummel", "Dandidoo"], "time": "1d 13h", "enhanced": "1d 3h 45m" }
    ]
  },
  {
    "n": "Epic PomPom",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Earth", "Cold"],
    "islands": [
      { "island": "Air Island", "combo": ["T-Rox", "Cybop"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Earth Island", "combo": ["Reedling", "Drumpler"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Mammott"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["T-Rox", "Cybop"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Mirror Earth Island", "combo": ["Reedling", "Drumpler"], "time": "1d 3h", "enhanced": "20h 15m" }
    ]
  },
  {
    "n": "Epic Congle",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Water", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Maw"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Air Island", "combo": ["Scups", "Drumpler"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Fire Oasis", "combo": ["Woolabee", "Quibble"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Maw"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mirror Air Island", "combo": ["Scups", "Drumpler"], "time": "23h", "enhanced": "17h 15m" }
    ]
  },
  {
    "n": "Epic Pummel",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Earth", "Water"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "Fwog"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Water Island", "combo": ["Scups", "Shrubb"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "Fwog"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Mirror Water Island", "combo": ["Scups", "Shrubb"], "time": "1d 7h", "enhanced": "23h 15m" }
    ]
  },
  {
    "n": "Epic Clamble",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Earth", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Pummel", "Maw"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Earth Island", "combo": ["PomPom", "Furcorn"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Pummel", "Maw"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Mirror Earth Island", "combo": ["PomPom", "Furcorn"], "time": "21h", "enhanced": "15h 45m" }
    ]
  },
  {
    "n": "Epic Bowgart",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Clamble", "Oaktopus"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Cold Island", "combo": ["Congle", "Furcorn"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Clamble", "Oaktopus"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Mirror Cold Island", "combo": ["Congle", "Furcorn"], "time": "1d 5h", "enhanced": "21h 45m" }
    ]
  },
  {
    "n": "Epic T-Rox",
    "r": "Epic",
    "c": "Natural",
    "e": ["Earth", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Pummel", "Drumpler"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Air Island", "combo": ["Congle", "Fwog"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Pummel", "Drumpler"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Mirror Air Island", "combo": ["Congle", "Fwog"], "time": "19h", "enhanced": "14h 15m" }
    ]
  },
  {
    "n": "Shellbeat",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Water"],
    "islands": [
      { "island": "Water Island", "combo": ["Spunge", "Noggin"], "time": "1d", "enhanced": "18h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Noggin"], "time": "1d", "enhanced": "18h" }
    ]
  },
  {
    "n": "Quarrister",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Cold"],
    "islands": [
      { "island": "Earth Island", "combo": ["Thumpies", "Noggin"], "time": "1d", "enhanced": "18h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "Noggin"], "time": "1d", "enhanced": "18h" }
    ]
  },
  {
    "n": "Deedge",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Water", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Toe Jammer"], "time": "1d", "enhanced": "18h" },
      { "island": "Shugabush Island", "combo": ["Deedge", "Shugabush"], "obtain": "Teleport", "time": "1d", "enhanced": "18h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Toe Jammer"], "time": "1d", "enhanced": "18h" }
    ]
  },
  {
    "n": "Riff",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Air Island", "combo": ["Congle", "Noggin"], "time": "1d", "enhanced": "18h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Congle", "Noggin"], "time": "1d", "enhanced": "18h" }
    ]
  },
  {
    "n": "Entbrat",
    "r": "Common",
    "c": "Natural",
    "e": ["Plant", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "Noggin"], "time": "1d", "enhanced": "18h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "Noggin"], "time": "1d", "enhanced": "18h" }
    ]
  },
  {
    "n": "Rare Shellbeat",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Water"],
    "islands": [
      { "island": "Water Island", "combo": ["Spunge", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" }
    ]
  },
  {
    "n": "Rare Quarrister",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Cold"],
    "islands": [
      { "island": "Earth Island", "combo": ["Thumpies", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" }
    ]
  },
  {
    "n": "Rare Deedge",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Water", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Toe Jammer"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Deedge"], "time": "1d", "enhanced": "18h", "failed_attempt": true },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Toe Jammer"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" }
    ]
  },
  {
    "n": "Rare Riff",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Air Island", "combo": ["Congle", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Congle", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" }
    ]
  },
  {
    "n": "Rare Entbrat",
    "r": "Rare",
    "c": "Natural",
    "e": ["Plant", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "Noggin"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" }
    ]
  },
  {
    "n": "Epic Shellbeat",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Water"],
    "islands": [
      { "island": "Water Island", "combo": ["Spunge", "Cybop"], "time": "1d 19h", "enhanced": "1d 8h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Cybop"], "time": "1d 19h", "enhanced": "1d 8h 15m" }
    ]
  },
  {
    "n": "Epic Quarrister",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Cold"],
    "islands": [
      { "island": "Earth Island", "combo": ["Clamble", "Dandidoo"], "time": "1d 11h", "enhanced": "1d 2h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Earth Island", "combo": ["Clamble", "Dandidoo"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Epic Deedge",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Water", "Cold"],
    "islands": [
      { "island": "Cold Island", "combo": ["Bowgart", "Pango"], "time": "1d 17h", "enhanced": "1d 6h 45m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "Potbelly"], "time": "1d 17h", "enhanced": "1d 6h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Bowgart", "Pango"], "time": "1d 17h", "enhanced": "1d 6h 45m" }
    ]
  },
  {
    "n": "Epic Riff",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Air Island", "combo": ["PomPom", "Quibble"], "time": "1d 15h", "enhanced": "1d 5h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["PomPom", "Quibble"], "time": "1d 15h", "enhanced": "1d 5h 15m" }
    ]
  },
  {
    "n": "Epic Entbrat",
    "r": "Epic",
    "c": "Natural",
    "e": ["Plant", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Plant Island", "combo": ["T-Rox", "Shrubb"], "time": "1d 21h", "enhanced": "1d 9h 45m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["T-Rox", "Shrubb"], "time": "1d 21h", "enhanced": "1d 9h 45m" }
    ]
  },
  {
    "n": "Mimic",
    "r": "Common",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" }
    ]
  },
  {
    "n": "Rare Mimic",
    "r": "Rare",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" }
    ]
  },
  {
    "n": "Epic Mimic",
    "r": "Epic",
    "c": "Natural",
    "e": ["Air", "Plant", "Earth", "Water", "Cold"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Wynq", "Glowl"], "time": "1d 15h", "enhanced": "1d 5h 15m" }
    ]
  },
  {
    "n": "Kayna",
    "r": "Common",
    "c": "Fire",
    "e": ["Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Kayna", "Tring"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Fire Oasis", "combo": ["Kayna", "Sneyser"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Light Island", "combo": ["Kayna", "Blow't"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Psychic Island", "combo": ["Kayna", "Gloptic"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Faerie Island", "combo": ["Kayna", "Pladdie"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Bone Island", "combo": ["Kayna", "Plinkajou"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Light Island", "combo": ["Kayna", "Blow't"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Kayna", "Gloptic"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Kayna", "Pladdie"], "time": "7h", "enhanced": "5h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Kayna", "Plinkajou"], "time": "7h", "enhanced": "5h 15m" }
    ]
  },
  {
    "n": "Rare Kayna",
    "r": "Rare",
    "c": "Fire",
    "e": ["Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Fire Oasis", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Light Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Psychic Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Faerie Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Bone Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "8h", "enhanced": "3h 30m" },
      { "island": "Mirror Light Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Psychic Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Faerie Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Bone Island", "combo": ["Any Fire Triple", "Any Fire Triple"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Epic Kayna",
    "r": "Epic",
    "c": "Fire",
    "e": ["Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Tring", "Stogg"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Fire Oasis", "combo": ["Sneyser", "Phangler"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Light Island", "combo": ["Blow't", "Furcorn"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Psychic Island", "combo": ["Gloptic", "Oaktopus"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Faerie Island", "combo": ["Pladdie", "Drumpler"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Bone Island", "combo": ["Plinkajou", "Fwog"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "15h", "enhanced": "3h 30m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Furcorn"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Oaktopus"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Drumpler"], "time": "15h", "enhanced": "11h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Fwog"], "time": "15h", "enhanced": "11h 15m" }
    ]
  },
  {
    "n": "Glowl",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Tweedle", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "10h", "enhanced": "7h 30m" }
    ]
  },
  {
    "n": "Flowah",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Potbelly", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Light Island", "combo": ["Potbelly", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Psychic Island", "combo": ["Potbelly", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Kayna"], "time": "10h", "enhanced": "7h 30m" }
    ]
  },
  {
    "n": "Stogg",
    "r": "Common",
    "c": "Fire",
    "e": ["Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Noggin", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Faerie Island", "combo": ["Noggin", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Bone Island", "combo": ["Noggin", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Kayna"], "time": "10h", "enhanced": "7h 30m" }
    ]
  },
  {
    "n": "Phangler",
    "r": "Common",
    "c": "Fire",
    "e": ["Water", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Toe Jammer", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Psychic Island", "combo": ["Toe Jammer", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Bone Island", "combo": ["Toe Jammer", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Psychic Island", "combo": ["Toe Jammer", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Bone Island", "combo": ["Toe Jammer", "Kayna"], "time": "10h", "enhanced": "7h 30m" }
    ]
  },
  {
    "n": "Boskus",
    "r": "Common",
    "c": "Fire",
    "e": ["Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Mammott", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Light Island", "combo": ["Mammott", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Faerie Island", "combo": ["Mammott", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Light Island", "combo": ["Mammott", "Kayna"], "time": "10h", "enhanced": "7h 30m" },
      { "island": "Mirror Faerie Island", "combo": ["Mammott", "Kayna"], "time": "10h", "enhanced": "7h 30m" }
    ]
  },
  {
    "n": "Rare Glowl",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Tweedle", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Fire Oasis", "combo": ["Tweedle", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "13h 30m", "enhanced": "5h" }
    ]
  },
  {
    "n": "Rare Flowah",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Potbelly", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Light Island", "combo": ["Potbelly", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Psychic Island", "combo": ["Potbelly", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "13h 30m", "enhanced": "5h" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" }
    ]
  },
  {
    "n": "Rare Stogg",
    "r": "Rare",
    "c": "Fire",
    "e": ["Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Noggin", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Faerie Island", "combo": ["Noggin", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Bone Island", "combo": ["Noggin", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "13h 30m", "enhanced": "5h" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" }
    ]
  },
  {
    "n": "Rare Phangler",
    "r": "Rare",
    "c": "Fire",
    "e": ["Water", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Toe Jammer", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Psychic Island", "combo": ["Toe Jammer", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Bone Island", "combo": ["Toe Jammer", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "13h 30m", "enhanced": "5h" },
      { "island": "Mirror Psychic Island", "combo": ["Toe Jammer", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Mirror Bone Island", "combo": ["Toe Jammer", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" }
    ]
  },
  {
    "n": "Rare Boskus",
    "r": "Rare",
    "c": "Fire",
    "e": ["Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Mammott", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Light Island", "combo": ["Mammott", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Faerie Island", "combo": ["Mammott", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "13h 30m", "enhanced": "5h" },
      { "island": "Mirror Light Island", "combo": ["Mammott", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" },
      { "island": "Mirror Faerie Island", "combo": ["Mammott", "Kayna"], "time": "13h 30m", "enhanced": "10h 7m 30s" }
    ]
  },
  {
    "n": "Epic Glowl",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Floogull", "Dandidoo"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Fire Oasis", "combo": ["Wynq", "Quibble"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 1h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Epic Flowah",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Barrb", "Shrubb"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Light Island", "combo": ["Fiddlement", "Gob"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Psychic Island", "combo": ["Rooba", "Poppette"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "17h", "enhanced": "6h 45m" },
      { "island": "Mirror Light Island", "combo": ["Fiddlement", "Gob"], "time": "17h", "enhanced": "12h 45m" },
      { "island": "Mirror Psychic Island", "combo": ["Rooba", "Poppette"], "time": "17h", "enhanced": "12h 45m" }
    ]
  },
  {
    "n": "Epic Stogg",
    "r": "Epic",
    "c": "Fire",
    "e": ["Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Repatillo", "Glowl"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Faerie Island", "combo": ["Bridg-it", "Squot"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Bone Island", "combo": ["Withur", "Phangler"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 5h", "enhanced": "6h 45m" },
      { "island": "Mirror Faerie Island", "combo": ["Bridg-it", "Squot"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Mirror Bone Island", "combo": ["Withur", "Phangler"], "time": "1d 5h", "enhanced": "21h 45m" }
    ]
  },
  {
    "n": "Epic Phangler",
    "r": "Epic",
    "c": "Fire",
    "e": ["Water", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Congle", "Glowl"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Psychic Island", "combo": ["Tapricorn", "Yuggler"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Bone Island", "combo": ["Banjaw", "Peckidna"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "23h", "enhanced": "6h 45m" },
      { "island": "Mirror Psychic Island", "combo": ["Tapricorn", "Yuggler"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Banjaw", "Peckidna"], "time": "23h", "enhanced": "17h 15m" }
    ]
  },
  {
    "n": "Epic Boskus",
    "r": "Epic",
    "c": "Fire",
    "e": ["Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Woolabee", "Maw"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Light Island", "combo": ["TooToo", "Bulbo"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Faerie Island", "combo": ["Cantorell", "Wimmzies"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "19h", "enhanced": "6h 45m" },
      { "island": "Mirror Light Island", "combo": ["TooToo", "Bulbo"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Cantorell", "Wimmzies"], "time": "19h", "enhanced": "14h 15m" }
    ]
  },
  {
    "n": "Barrb",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Glowl", "Potbelly"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Floogull",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Glowl", "Noggin"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Whaddle",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Water", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Glowl", "Toe Jammer"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Woolabee",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Glowl", "Mammott"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Repatillo",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Flowah", "Noggin"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Rootitoot",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Flowah", "Toe Jammer"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" },
      { "island": "Mirror Psychic Island", "combo": ["Flowah", "Toe Jammer"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Sooza",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": ["Flowah", "Mammott"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" },
      { "island": "Mirror Light Island", "combo": ["Flowah", "Mammott"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Thrumble",
    "r": "Common",
    "c": "Fire",
    "e": ["Earth", "Water", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": ["Phangler", "Noggin"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" },
      { "island": "Mirror Bone Island", "combo": ["Phangler", "Noggin"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Ziggurab",
    "r": "Common",
    "c": "Fire",
    "e": ["Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Boskus", "Noggin"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" },
      { "island": "Mirror Faerie Island", "combo": ["Boskus", "Noggin"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Wynq",
    "r": "Common",
    "c": "Fire",
    "e": ["Water", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Boskus", "Toe Jammer"], "time": "20h", "enhanced": "15h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Rare Barrb",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Glowl", "Potbelly"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" }
    ]
  },
  {
    "n": "Rare Floogull",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Glowl", "Noggin"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" }
    ]
  },
  {
    "n": "Rare Whaddle",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Water", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Glowl", "Toe Jammer"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" }
    ]
  },
  {
    "n": "Rare Woolabee",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Glowl", "Mammott"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" }
    ]
  },
  {
    "n": "Rare Repatillo",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Flowah", "Noggin"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" }
    ]
  },
  {
    "n": "Rare Rootitoot",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Flowah", "Toe Jammer"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" },
      { "island": "Mirror Psychic Island", "combo": ["Flowah", "Toe Jammer"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Sooza",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": ["Flowah", "Mammott"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" },
      { "island": "Mirror Light Island", "combo": ["Flowah", "Mammott"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Thrumble",
    "r": "Rare",
    "c": "Fire",
    "e": ["Earth", "Water", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": ["Phangler", "Noggin"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" },
      { "island": "Mirror Bone Island", "combo": ["Phangler", "Noggin"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Ziggurab",
    "r": "Rare",
    "c": "Fire",
    "e": ["Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Boskus", "Noggin"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" },
      { "island": "Mirror Faerie Island", "combo": ["Boskus", "Noggin"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Wynq",
    "r": "Rare",
    "c": "Fire",
    "e": ["Water", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Boskus", "Toe Jammer"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 2h 30m", "enhanced": "10h" }
    ]
  },
  {
    "n": "Epic Barrb",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Floogull", "Shrubb"], "time": "1d 15h", "enhanced": "1d 5h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 15h", "enhanced": "13h 15m" }
    ]
  },
  {
    "n": "Epic Floogull",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Reedling", "Glowl"], "time": "1d 13h", "enhanced": "1d 3h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 13h", "enhanced": "13h 15m" }
    ]
  },
  {
    "n": "Epic Whaddle",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Water", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Congle", "Phangler"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 1h", "enhanced": "13h 15m" }
    ]
  },
  {
    "n": "Epic Woolabee",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Whaddle", "Boskus"], "time": "1d 19h", "enhanced": "1d 8h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 19h", "enhanced": "13h 15m" }
    ]
  },
  {
    "n": "Epic Repatillo",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Floogull", "Flowah"], "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 9h", "enhanced": "13h 15m" }
    ]
  },
  {
    "n": "Epic Rootitoot",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Rooba", "Oaktopus"], "time": "1d 11h", "enhanced": "1d 2h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 11h", "enhanced": "13h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Rooba", "Oaktopus"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Epic Sooza",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": ["TooToo", "Boskus"], "time": "1d 3h", "enhanced": "20h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 3h", "enhanced": "13h 15m" },
      { "island": "Mirror Light Island", "combo": ["TooToo", "Boskus"], "time": "1d 3h", "enhanced": "20h 15m" }
    ]
  },
  {
    "n": "Epic Thrumble",
    "r": "Epic",
    "c": "Fire",
    "e": ["Earth", "Water", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": ["Uuduk", "Denchuhs"], "time": "1d 7h", "enhanced": "23h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 7h", "enhanced": "13h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Uuduk", "Denchuhs"], "time": "1d 7h", "enhanced": "23h 15m" }
    ]
  },
  {
    "n": "Epic Ziggurab",
    "r": "Epic",
    "c": "Fire",
    "e": ["Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Bridg-it", "Drumpler"], "time": "1d 11h", "enhanced": "1d 2h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 11h", "enhanced": "13h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Bridg-it", "Drumpler"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Epic Wynq",
    "r": "Epic",
    "c": "Fire",
    "e": ["Water", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Congle", "Boskus"], "time": "1d 5h", "enhanced": "21h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 5h", "enhanced": "13h 15m" }
    ]
  },
  {
    "n": "Tring",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Barrb", "Noggin"], "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Bisonorus",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Yelmut",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Flum Ox",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Krillby",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Sneyser",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Woolabee", "Toe Jammer"], "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Edamimi",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "PongPing",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Incisaur",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Tiawa",
    "r": "Common",
    "c": "Fire",
    "e": ["Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 16h", "enhanced": "1d 6h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 300 Relics", "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Rare Tring",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Barrb", "Noggin"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" }
    ]
  },
  {
    "n": "Rare Bisonorus",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Yelmut",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Flum Ox",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Krillby",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Sneyser",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Woolabee", "Toe Jammer"], "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" }
    ]
  },
  {
    "n": "Rare Edamimi",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare PongPing",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Incisaur",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Tiawa",
    "r": "Rare",
    "c": "Fire",
    "e": ["Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 4h 30m", "enhanced": "20h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 10,000 Starpower", "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Epic Tring",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Barrb", "Stogg"], "time": "1d 21h", "enhanced": "1d 9h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 21h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Epic Bisonorus",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Gloptic", "Kayna"], "time": "2d 3h", "enhanced": "1d 14h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 3h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Kayna"], "time": "2d 3h", "enhanced": "1d 14h 15m" }
    ]
  },
  {
    "n": "Epic Yelmut",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Kayna"], "time": "1d 15h", "enhanced": "1d 5h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 15h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Kayna"], "time": "1d 15h", "enhanced": "1d 5h 15m" }
    ]
  },
  {
    "n": "Epic Flum Ox",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": ["Plinkajou", "Kayna"], "time": "1d 13h", "enhanced": "1d 3h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 13h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Kayna"], "time": "1d 13h", "enhanced": "1d 3h 45m" }
    ]
  },
  {
    "n": "Epic Krillby",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Kayna"], "time": "1d 19h", "enhanced": "1d 8h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 19h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Kayna"], "time": "1d 19h", "enhanced": "1d 8h 15m" }
    ]
  },
  {
    "n": "Epic Sneyser",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Woolabee", "Phangler"], "time": "1d 17h", "enhanced": "1d 6h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 17h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Epic Edamimi",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Gloptic", "Potbelly"], "time": "1d 21h", "enhanced": "1d 9h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 21h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Potbelly"], "time": "1d 21h", "enhanced": "1d 9h 45m" }
    ]
  },
  {
    "n": "Epic PongPing",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Floot Fly"], "time": "1d 23h", "enhanced": "1d 11h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 23h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Floot Fly"], "time": "1d 23h", "enhanced": "1d 11h 15m" }
    ]
  },
  {
    "n": "Epic Incisaur",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": ["Plinkajou", "Clackula"], "time": "1d 17h", "enhanced": "1d 6h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 17h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Clackula"], "time": "1d 17h", "enhanced": "1d 6h 45m" }
    ]
  },
  {
    "n": "Epic Tiawa",
    "r": "Epic",
    "c": "Fire",
    "e": ["Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Potbelly"], "time": "2d 1h", "enhanced": "1d 12h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 2h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Potbelly"], "time": "2d 1h", "enhanced": "1d 12h 45m" }
    ]
  },
  {
    "n": "Candelavra",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "3d 8h", "enhanced": "2d 12h" }
    ]
  },
  {
    "n": "Drummidary",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" }
    ]
  },
  {
    "n": "Bowhead",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Plant", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" }
    ]
  },
  {
    "n": "Tuskski",
    "r": "Common",
    "c": "Fire",
    "e": ["Air", "Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" }
    ]
  },
  {
    "n": "Gnarls",
    "r": "Common",
    "c": "Fire",
    "e": ["Plant", "Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "3d 8h", "enhanced": "2d 12h" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 500 Relics", "time": "3d 8h", "enhanced": "2d 12h" }
    ]
  },
  {
    "n": "Rare Candelavra",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "3d 23h 30m", "enhanced": "1d 16h" }
    ]
  },
  {
    "n": "Rare Drummidary",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "3d 23h 30m", "enhanced": "1d 16h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" }
    ]
  },
  {
    "n": "Rare Bowhead",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Plant", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "3d 23h 30m", "enhanced": "1d 16h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" }
    ]
  },
  {
    "n": "Rare Tuskski",
    "r": "Rare",
    "c": "Fire",
    "e": ["Air", "Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "3d 23h 30m", "enhanced": "1d 16h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" }
    ]
  },
  {
    "n": "Rare Gnarls",
    "r": "Rare",
    "c": "Fire",
    "e": ["Plant", "Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "3d 23h 30m", "enhanced": "1d 16h" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 15,000 Starpower", "time": "3d 23h 30m", "enhanced": "2d 23h 37m 30s" }
    ]
  },
  {
    "n": "Epic Candelavra",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Water", "Fire"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Repatillo", "Dandidoo"], "time": "2d 5h", "enhanced": "1d 15h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 5h", "enhanced": "1d 23h 45m" }
    ]
  },
  {
    "n": "Epic Drummidary",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Earth", "Cold", "Fire"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Pluckbill"], "time": "2d 1h", "enhanced": "1d 12h 45m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 1h", "enhanced": "1d 23h 45m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Pluckbill"], "time": "2d 1h", "enhanced": "1d 12h 45m" }
    ]
  },
  {
    "n": "Epic Bowhead",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Plant", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Gloptic", "Poppette"], "time": "2d 3h", "enhanced": "1d 14h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 3h", "enhanced": "1d 23h 45m" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Poppette"], "time": "2d 3h", "enhanced": "1d 14h 15m" }
    ]
  },
  {
    "n": "Epic Tuskski",
    "r": "Epic",
    "c": "Fire",
    "e": ["Air", "Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Wimmzies"], "time": "2d 7h", "enhanced": "1d 17h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "2d 7h", "enhanced": "1d 23h 45m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Wimmzies"], "time": "2d 7h", "enhanced": "1d 17h 15m" }
    ]
  },
  {
    "n": "Epic Gnarl",
    "r": "Epic",
    "c": "Fire",
    "e": ["Plant", "Earth", "Water", "Cold", "Fire"],
    "islands": [
      { "island": "Bone Island", "combo": ["Plinkajou", "Peckidna"], "time": "1d 23h", "enhanced": "1d 11h 15m" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 23h", "enhanced": "1d 23h 45m" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Peckidna"], "time": "1d 23h", "enhanced": "1d 11h 15m" }
    ]
  },
  {
    "n": "Theremind",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Theremind", "Gloptic"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Magical Sanctum", "combo": ["Theremind", "Enchantling"], "time": "3h", "enhanced": "2h 15m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Theremind", "Gloptic"], "time": "3h", "enhanced": "2h 15m" }
    ]
  },
  {
    "n": "Clackula",
    "r": "Common",
    "c": "Magical",
    "e": ["Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Clackula", "Plinkajou"], "time": "5h", "enhanced": "3h 45m" },
      { "island": "Magical Sanctum", "combo": ["Clackula", "Enchantling"], "obtain": "Teleport", "time": "5h", "enhanced": "3h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Clackula", "Plinkajou"], "time": "5h", "enhanced": "3h 45m" }
    ]
  },
  {
    "n": "Fluoress",
    "r": "Common",
    "c": "Magical",
    "e": ["Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Fluoress", "Blow't"], "time": "2h", "enhanced": "1h 30m" },
      { "island": "Magical Sanctum", "combo": ["Fluoress", "Enchantling"], "obtain": "Teleport", "time": "2h", "enhanced": "1h 30m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Fluoress", "Blow't"], "time": "2h", "enhanced": "1h 30m" }
    ]
  },
  {
    "n": "Floot Fly",
    "r": "Common",
    "c": "Magical",
    "e": ["Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Floot Fly", "Pladdie"], "time": "4h", "enhanced": "3h" },
      { "island": "Magical Sanctum", "combo": ["Floot Fly", "Enchantling"], "obtain": "Teleport", "time": "4h", "enhanced": "3h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Floot Fly", "Pladdie"], "time": "4h", "enhanced": "3h" }
    ]
  },
  {
    "n": "Rare Theremind",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Any Psychic Triple", "Any Psychic Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Sanctum", "combo": ["Any Psychic Triple", "Any Psychic Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Any Psychic Triple", "Any Psychic Triple"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Rare Clackula",
    "r": "Rare",
    "c": "Magical",
    "e": ["Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Any Bone Triple", "Any Bone Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Sanctum", "combo": ["Any Bone Triple", "Any Bone Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Any Bone Triple", "Any Bone Triple"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Rare Fluoress",
    "r": "Rare",
    "c": "Magical",
    "e": ["Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Any Light Triple", "Any Light Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Sanctum", "combo": ["Any Light Triple", "Any Light Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Any Light Triple", "Any Light Triple"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Rare Floot Fly",
    "r": "Rare",
    "c": "Magical",
    "e": ["Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Any Faerie Triple", "Any Faerie Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Sanctum", "combo": ["Any Faerie Triple", "Any Faerie Triple"], "time": "8h", "enhanced": "6h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Any Faerie Triple", "Any Faerie Triple"], "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Epic Clackula",
    "r": "Epic",
    "c": "Magical",
    "e": ["Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Plinkajou", "Denchuhs"], "time": "20h 6m", "enhanced": "15h 4m 30s" },
      { "island": "Magical Sanctum", "combo": ["Enchantling", "Osstax"], "time": "20h 6m", "enhanced": "15h 4m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Denchuhs"], "time": "20h 6m", "enhanced": "15h 4m 30s" }
    ]
  },
  {
    "n": "Epic Floot Fly",
    "r": "Epic",
    "c": "Magical",
    "e": ["Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Squot"], "time": "19h 56m", "enhanced": "14h 57m" },
      { "island": "Magical Sanctum", "combo": ["Enchantling", "Knucklehead"], "time": "19h 56m", "enhanced": "14h 57m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Squot"], "time": "19h 56m", "enhanced": "14h 57m" }
    ]
  },
  {
    "n": "Bonkers",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Potbelly", "Theremind"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Theremind"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Gob",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Potbelly", "Fluoress"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Fluoress"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Peckidna",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Noggin", "Clackula"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Clackula"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "HippityHop",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Noggin", "Floot Fly"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Floot Fly"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Poppette",
    "r": "Common",
    "c": "Magical",
    "e": ["Water", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Toe Jammer", "Theremind"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Toe Jammer", "Theremind"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Denchuhs",
    "r": "Common",
    "c": "Magical",
    "e": ["Water", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Toe Jammer", "Clackula"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Toe Jammer", "Clackula"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Bulbo",
    "r": "Common",
    "c": "Magical",
    "e": ["Cold", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Mammott", "Fluoress"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Mammott", "Fluoress"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Squot",
    "r": "Common",
    "c": "Magical",
    "e": ["Cold", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Mammott", "Floot Fly"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Mammott", "Floot Fly"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Yuggler",
    "r": "Common",
    "c": "Magical",
    "e": ["Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Kayna", "Theremind"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Kayna", "Theremind"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Hawlo",
    "r": "Common",
    "c": "Magical",
    "e": ["Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Kayna", "Clackula"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Kayna", "Clackula"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Pluckbill",
    "r": "Common",
    "c": "Magical",
    "e": ["Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Kayna", "Fluoress"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Kayna", "Fluoress"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Wimmzies",
    "r": "Common",
    "c": "Magical",
    "e": ["Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Kayna", "Floot Fly"], "time": "9h", "enhanced": "6h 45m" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Kayna", "Floot Fly"], "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "Xyster",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Bone"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Theremind", "Clackula"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Cahoot",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Light"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Theremind", "Fluoress"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Déjà-Jin",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Theremind", "Floot Fly"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Roarick",
    "r": "Common",
    "c": "Magical",
    "e": ["Bone", "Light"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Clackula", "Fluoress"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Osstax",
    "r": "Common",
    "c": "Magical",
    "e": ["Bone", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Clackula", "Floot Fly"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Knucklehead",
    "r": "Common",
    "c": "Magical",
    "e": ["Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Fluoress", "Floot Fly"], "time": "20h", "enhanced": "15h" }
    ]
  },
  {
    "n": "Rare Bonkers",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Potbelly", "Theremind"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Potbelly", "Theremind"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Gob",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Potbelly", "Fluoress"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Potbelly", "Fluoress"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Peckidna",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Noggin", "Clackula"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Noggin", "Clackula"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare HippityHop",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Noggin", "Floot Fly"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Noggin", "Floot Fly"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Poppette",
    "r": "Rare",
    "c": "Magical",
    "e": ["Water", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Toe Jammer", "Theremind"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Toe Jammer", "Theremind"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Denchuhs",
    "r": "Rare",
    "c": "Magical",
    "e": ["Water", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Toe Jammer", "Clackula"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Toe Jammer", "Clackula"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Bulbo",
    "r": "Rare",
    "c": "Magical",
    "e": ["Cold", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Mammott", "Fluoress"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Mammott", "Fluoress"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Squot",
    "r": "Rare",
    "c": "Magical",
    "e": ["Cold", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Mammott", "Floot Fly"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Mammott", "Floot Fly"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Yuggler",
    "r": "Rare",
    "c": "Magical",
    "e": ["Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Kayna", "Theremind"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Kayna", "Theremind"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Hawlo",
    "r": "Rare",
    "c": "Magical",
    "e": ["Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Kayna", "Clackula"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Kayna", "Clackula"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Pluckbill",
    "r": "Rare",
    "c": "Magical",
    "e": ["Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Kayna", "Fluoress"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Kayna", "Fluoress"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Wimmzies",
    "r": "Rare",
    "c": "Magical",
    "e": ["Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Kayna", "Floot Fly"], "time": "12h 30m", "enhanced": "9h 22m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Kayna", "Floot Fly"], "time": "12h 30m", "enhanced": "9h 22m 30s" }
    ]
  },
  {
    "n": "Rare Xyster",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Bone"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Theremind", "Clackula"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Cahoot",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Light"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Theremind", "Fluoress"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Déjà-Jin",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Theremind", "Floot Fly"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Roarick",
    "r": "Rare",
    "c": "Magical",
    "e": ["Bone", "Light"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Clackula", "Fluoress"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Osstax",
    "r": "Rare",
    "c": "Magical",
    "e": ["Bone", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Clackula", "Floot Fly"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Rare Knucklehead",
    "r": "Rare",
    "c": "Magical",
    "e": ["Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Fluoress", "Floot Fly"], "time": "1d 2h 30m", "enhanced": "19h 52m 30s" }
    ]
  },
  {
    "n": "Epic Peckidna",
    "r": "Epic",
    "c": "Magical",
    "e": ["Earth", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Uuduk", "Fwog"], "time": "1d 22h 15m", "enhanced": "1d 10h 41m 15s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Uuduk", "Fwog"], "time": "1d 22h 15m", "enhanced": "1d 10h 41m 15s" }
    ]
  },
  {
    "n": "Epic Knucklehead",
    "r": "Epic",
    "c": "Magical",
    "e": ["Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Larvaluss", "Cahoot"], "time": "2d 3h 49m", "enhanced": "1d 14h 51m 45s" }
    ]
  },
  {
    "n": "Tapricorn",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Water", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Bonkers", "Toe Jammer"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Bonkers", "Toe Jammer"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Spytrap",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Cold", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Gob", "Mammott"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Gob", "Mammott"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Rooba",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Yuggler", "Potbelly"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Yuggler", "Potbelly"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "TooToo",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Pluckbill", "Potbelly"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Pluckbill", "Potbelly"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Withur",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Water", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Denchuhs", "Noggin"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Denchuhs", "Noggin"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Cantorell",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Cold", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Squot", "Noggin"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Squot", "Noggin"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Uuduk",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Hawlo", "Noggin"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Hawlo", "Noggin"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Bridg-it",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Wimmzies", "Noggin"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Wimmzies", "Noggin"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Periscorp",
    "r": "Common",
    "c": "Magical",
    "e": ["Water", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Yuggler", "Toe Jammer"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Yuggler", "Toe Jammer"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Banjaw",
    "r": "Common",
    "c": "Magical",
    "e": ["Water", "Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Hawlo", "Toe Jammer"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Hawlo", "Toe Jammer"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Fiddlement",
    "r": "Common",
    "c": "Magical",
    "e": ["Cold", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Pluckbill", "Mammott"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Pluckbill", "Mammott"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "Clavi Gnat",
    "r": "Common",
    "c": "Magical",
    "e": ["Cold", "Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Wimmzies", "Mammott"], "time": "16h", "enhanced": "12h" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Wimmzies", "Mammott"], "time": "16h", "enhanced": "12h" }
    ]
  },
  {
    "n": "G'day",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Bone", "Light"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Xyster", "Fluoress"], "time": "1d 6h", "enhanced": "22h 30m" }
    ]
  },
  {
    "n": "Larvaluss",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Bone", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Osstax", "Theremind"], "time": "1d 6h", "enhanced": "22h 30m" }
    ]
  },
  {
    "n": "Frondley",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Déjà-Jin", "Fluoress"], "time": "1d 6h", "enhanced": "22h 30m" }
    ]
  },
  {
    "n": "Mushaboom",
    "r": "Common",
    "c": "Magical",
    "e": ["Bone", "Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Osstax", "Fluoress"], "time": "1d 6h", "enhanced": "22h 30m" }
    ]
  },
  {
    "n": "Rare Tapricorn",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Water", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Bonkers", "Toe Jammer"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Bonkers", "Toe Jammer"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Spytrap",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Cold", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Gob", "Mammott"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Gob", "Mammott"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Rooba",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Yuggler", "Potbelly"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Yuggler", "Potbelly"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare TooToo",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Pluckbill", "Potbelly"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Pluckbill", "Potbelly"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Withur",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Water", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Denchuhs", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Denchuhs", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Cantorell",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Cold", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Squot", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Squot", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Uuduk",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Hawlo", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Hawlo", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Bridg-it",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Wimmzies", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Wimmzies", "Noggin"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Periscorp",
    "r": "Rare",
    "c": "Magical",
    "e": ["Water", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Yuggler", "Toe Jammer"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Yuggler", "Toe Jammer"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Banjaw",
    "r": "Rare",
    "c": "Magical",
    "e": ["Water", "Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Hawlo", "Toe Jammer"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Hawlo", "Toe Jammer"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Fiddlement",
    "r": "Rare",
    "c": "Magical",
    "e": ["Cold", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Pluckbill", "Mammott"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Pluckbill", "Mammott"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare Clavi Gnat",
    "r": "Rare",
    "c": "Magical",
    "e": ["Cold", "Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Wimmzies", "Mammott"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Wimmzies", "Mammott"], "time": "1d 1h 30m", "enhanced": "19h 7m 30s" }
    ]
  },
  {
    "n": "Rare G'day",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Bone", "Light"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Xyster", "Fluoress"], "time": "1d 13h 30m", "enhanced": "1d 4h 7m 30s" }
    ]
  },
  {
    "n": "Rare Larvaluss",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Bone", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Osstax", "Theremind"], "time": "1d 13h 30m", "enhanced": "1d 4h 7m 30s" }
    ]
  },
  {
    "n": "Rare Frondley",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Déjà-Jin", "Fluoress"], "time": "1d 13h 30m", "enhanced": "1d 4h 7m 30s" }
    ]
  },
  {
    "n": "Rare Mushaboom",
    "r": "Rare",
    "c": "Magical",
    "e": ["Bone", "Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Osstax", "Fluoress"], "time": "1d 13h 30m", "enhanced": "1d 4h 7m 30s" }
    ]
  },
  {
    "n": "Epic Rooba",
    "r": "Epic",
    "c": "Magical",
    "e": ["Plant", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Periscorp", "Flowah"], "time": "2d 12h 5m", "enhanced": "1d 21h 3m 45s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Periscorp", "Flowah"], "time": "2d 12h 5m", "enhanced": "1d 21h 3m 45s" }
    ]
  },
  {
    "n": "Epic TooToo",
    "r": "Epic",
    "c": "Magical",
    "e": ["Plant", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["Spytrap", "Flowah"], "time": "2d 5h 5m", "enhanced": "1d 15h 48m 45s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["Spytrap", "Flowah"], "time": "2d 5h 5m", "enhanced": "1d 15h 48m 45s" }
    ]
  },
  {
    "n": "Gloptic",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Water", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Rooba", "Toe Jammer"], "time": "1d 8h", "enhanced": "1d" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Rooba", "Toe Jammer"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Blow't",
    "r": "Common",
    "c": "Magical",
    "e": ["Plant", "Cold", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["TooToo", "Mammott"], "time": "1d 8h", "enhanced": "1d" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["TooToo", "Mammott"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Plinkajou",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Water", "Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Banjaw", "Noggin"], "time": "1d 8h", "enhanced": "1d" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Banjaw", "Noggin"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Pladdie",
    "r": "Common",
    "c": "Magical",
    "e": ["Earth", "Cold", "Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Clavi Gnat", "Noggin"], "time": "1d 8h", "enhanced": "1d" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Clavi Gnat", "Noggin"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Enchantling",
    "r": "Common",
    "c": "Magical",
    "e": ["Psychic", "Bone", "Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Larvaluss", "Fluoress"], "time": "2d 2h", "enhanced": "1d 13h 30m" }
    ]
  },
  {
    "n": "Rare Gloptic",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Water", "Fire", "Psychic"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Rooba", "Toe Jammer"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Psychic Island", "combo": ["Rooba", "Toe Jammer"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Blow't",
    "r": "Rare",
    "c": "Magical",
    "e": ["Plant", "Cold", "Fire", "Light"],
    "islands": [
      { "island": "Light Island", "combo": ["TooToo", "Mammott"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Light Island", "combo": ["TooToo", "Mammott"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Plinkajou",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Water", "Fire", "Bone"],
    "islands": [
      { "island": "Bone Island", "combo": ["Banjaw", "Noggin"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Bone Island", "combo": ["Banjaw", "Noggin"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Pladdie",
    "r": "Rare",
    "c": "Magical",
    "e": ["Earth", "Cold", "Fire", "Faerie"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Clavi Gnat", "Noggin"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" },
      { "island": "Magical Nexus", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Faerie Island", "combo": ["Clavi Gnat", "Noggin"], "time": "1d 18h 30m", "enhanced": "1d 7h 52m 30s" }
    ]
  },
  {
    "n": "Rare Enchantling",
    "r": "Rare",
    "c": "Magical",
    "e": ["Psychic", "Bone", "Light", "Faerie"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Larvaluss", "Fluoress"], "time": "2d 14h 30m", "enhanced": "1d 22h 52m 30s" }
    ]
  },
  {
    "n": "Ghazt",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Ethereal Island", "combo": ["Ghazt", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "10h" }
    ]
  },
  {
    "n": "Grumpyre",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow"],
    "islands": [
      { "island": "Cold Island", "combo": ["Deedge", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Ethereal Island", "combo": ["Grumpyre", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "10h" }
    ]
  },
  {
    "n": "Reebro",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Mech"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Ethereal Island", "combo": ["Reebro", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "10h" }
    ]
  },
  {
    "n": "Jeeode",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Crystal"],
    "islands": [
      { "island": "Water Island", "combo": ["Shellbeat", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Ethereal Island", "combo": ["Jeeode", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "10h" }
    ]
  },
  {
    "n": "Humbug",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Poison"],
    "islands": [
      { "island": "Earth Island", "combo": ["Quarrister", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Ethereal Island", "combo": ["Humbug", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" }
    ]
  },
  {
    "n": "Rare Ghazt",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Ethereal Island", "combo": ["Ghazt", "any Single Ethereal"], "obtain": "Teleport", "time": "12h 38m 20s", "enhanced": "9h 28m 45s" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "12h 38m 20s" }
    ]
  },
  {
    "n": "Rare Grumpyre",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Shadow"],
    "islands": [
      { "island": "Cold Island", "combo": ["Deedge", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Ethereal Island", "combo": ["Grumpyre", "any Single Ethereal"], "obtain": "Teleport", "time": "12h 38m 20s", "enhanced": "9h 28m 45s" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "12h 38m 20s" }
    ]
  },
  {
    "n": "Rare Reebro",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Mech"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Ethereal Island", "combo": ["Reebro", "any Single Ethereal"], "obtain": "Teleport", "time": "12h 38m 20s", "enhanced": "9h 28m 45s" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "12h 38m 20s" }
    ]
  },
  {
    "n": "Rare Jeeode",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Crystal"],
    "islands": [
      { "island": "Water Island", "combo": ["Shellbeat", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Ethereal Island", "combo": ["Jeeode", "any Single Ethereal"], "obtain": "Teleport", "time": "12h 38m 20s", "enhanced": "9h 28m 45s" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "12h 38m 20s" }
    ]
  },
  {
    "n": "Rare Humbug",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Poison"],
    "islands": [
      { "island": "Earth Island", "combo": ["Quarrister", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" },
      { "island": "Ethereal Island", "combo": ["Humbug", "any Single Ethereal"], "obtain": "Teleport", "time": "12h 38m 20s", "enhanced": "9h 28m 45s" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Any Triple"], "time": "1d 21h 30m", "enhanced": "1d 10h 7m 30s" }
    ]
  },
  {
    "n": "Epic Ghazt",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Plasma"],
    "islands": [
      { "island": "Plant Island", "combo": ["T-Rox", "Furcorn"], "time": "1d 6h", "enhanced": "22h 30m" },
      { "island": "Ethereal Island", "combo": ["Boodoo", "Dragong"], "obtain": "Teleport", "time": "8h 20m", "enhanced": "6h 15m" },
      { "island": "Mirror Plant Island", "combo": ["T-Rox", "Furcorn"], "time": "1d 6h", "enhanced": "22h 30m" }
    ]
  },
  {
    "n": "Epic Grumpyre",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Shadow"],
    "islands": [
      { "island": "Cold Island", "combo": ["Bowgart", "Dandidoo"], "time": "1d 4h", "enhanced": "21h" },
      { "island": "Ethereal Island", "combo": ["Nebulob", "Fung Pray"], "obtain": "Teleport", "time": "7h 46m 40s", "enhanced": "5h 50m" },
      { "island": "Mirror Cold Island", "combo": ["Bowgart", "Dandidoo"], "time": "1d 4h", "enhanced": "21h" }
    ]
  },
  {
    "n": "Epic Reebro",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Mech"],
    "islands": [
      { "island": "Air Island", "combo": ["T-Rox", "Pango"], "time": "1d 10h", "enhanced": "1d 1h 30m" },
      { "island": "Ethereal Island", "combo": ["Sox", "Kazilleon"], "obtain": "Teleport", "time": "9h 26m 40s", "enhanced": "7h 5m" },
      { "island": "Mirror Air Island", "combo": ["T-Rox", "Pango"], "time": "1d 10h", "enhanced": "1d 1h 30m" }
    ]
  },
  {
    "n": "Epic Jeeode",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Crystal"],
    "islands": [
      { "island": "Water Island", "combo": ["Pummel", "Quibble"], "time": "1d 2h", "enhanced": "19h 30m" },
      { "island": "Ethereal Island", "combo": ["Jellbilly", "Arackulele"], "obtain": "Teleport", "time": "7h 13m 20s", "enhanced": "5h 25m" },
      { "island": "Mirror Water Island", "combo": ["Pummel", "Quibble"], "time": "1d 2h", "enhanced": "19h 30m" }
    ]
  },
  {
    "n": "Epic Humbug",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Poison"],
    "islands": [
      { "island": "Earth Island", "combo": ["Clamble", "Cybop"], "time": "1d 8h", "enhanced": "1d" },
      { "island": "Ethereal Island", "combo": ["Whisp", "Bellowfish"], "obtain": "Teleport", "time": "8h 53m 20s", "enhanced": "6h 40m" },
      { "island": "Mirror Earth Island", "combo": ["Clamble", "Cybop"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Whisp",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Grumpyre"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Nebulob",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Mech"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Reebro"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Sox",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Jeeode"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Jellbilly",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Humbug"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Arackulele",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Mech"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Grumpyre", "Reebro"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Boodoo",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Grumpyre", "Jeeode"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Kazilleon",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Grumpyre", "Humbug"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Bellowfish",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Reebro", "Jeeode"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Dragong",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Reebro", "Humbug"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Fung Pray",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Jeeode", "Humbug"], "time": "1d 18h", "enhanced": "1d 7h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "20h" }
    ]
  },
  {
    "n": "Rare Whisp",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Grumpyre"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Nebulob",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Mech"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Reebro"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Sox",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Jeeode"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Jellbilly",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Ghazt", "Humbug"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Arackulele",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Shadow", "Mech"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Grumpyre", "Reebro"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Boodoo",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Shadow", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Grumpyre", "Jeeode"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Kazilleon",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Shadow", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Grumpyre", "Humbug"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Bellowfish",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Reebro", "Jeeode"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Dragong",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Reebro", "Humbug"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Rare Fung Pray",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Jeeode", "Humbug"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 1h" }
    ]
  },
  {
    "n": "Epic Whisp",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Nebulob", "Kazilleon"], "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Epic Nebulob",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Plasma", "Mech"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Jellbilly", "Boodoo"], "time": "1d 20h", "enhanced": "1d 9h" }
    ]
  },
  {
    "n": "Epic Sox",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Plasma", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Jellbilly", "Bellowfish"], "time": "1d 12h", "enhanced": "1d 3h" }
    ]
  },
  {
    "n": "Epic Jellbilly",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Plasma", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Arackulele", "Fung Pray"], "time": "1d 14h", "enhanced": "1d 4h 30m" }
    ]
  },
  {
    "n": "Epic Arackulele",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Shadow", "Mech"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Sox", "Dragong"], "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Epic Boodoo",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Shadow", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Kazilleon", "Bellowfish"], "time": "1d 18h", "enhanced": "1d 7h 30m" }
    ]
  },
  {
    "n": "Epic Kazilleon",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Shadow", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Sox", "Arackulele"], "time": "1d 14h", "enhanced": "1d 4h 30m" }
    ]
  },
  {
    "n": "Epic Bellowfish",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Whisp", "Dragong"], "time": "1d 22h", "enhanced": "1d 10h 30m" }
    ]
  },
  {
    "n": "Epic Dragong",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Whisp", "Fung Pray"], "time": "1d 12h", "enhanced": "1d 3h" }
    ]
  },
  {
    "n": "Epic Fung Pray",
    "r": "Epic",
    "c": "Ethereal",
    "e": ["Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Nebulob", "Boodoo"], "time": "1d 20h", "enhanced": "1d 9h" }
    ]
  },
  {
    "n": "Yooreek",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Mech"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Plasma Meeb", "Shadow Meeb", "Mech Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Meebkin",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Plasma Meeb", "Shadow Meeb", "Crystal Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Blarret",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Plasma Meeb", "Shadow Meeb", "Poison Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Gaddzooks",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Plasma Meeb", "Mech Meeb", "Crystal Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Auglur",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Plasma Meeb", "Mech Meeb", "Poison Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Flasque",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Plasma Meeb", "Crystal Meeb", "Poison Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Nitebear",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Shadow Meeb", "Mech Meeb", "Crystal Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Piplash",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Shadow Meeb", "Mech Meeb", "Poison Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "X'rt",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Shadow Meeb", "Crystal Meeb", "Poison Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Teeter-Tauter",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Mech", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Mech Meeb", "Crystal Meeb", "Poison Meeb"], "obtain": "Synthesis", "time": "1d 6h", "enhanced": "10h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Rare Yooreek",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Mech"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma (Rare)", "Tuned Up Shadow (Rare)", "Tuned Up Mech (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Meebkin",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma (Rare)", "Tuned Up Shadow (Rare)", "Tuned Up Crystal (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Blarret",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma (Rare)", "Tuned Up Shadow (Rare)", "Tuned Up Poison (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Gaddzooks",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma (Rare)", "Tuned Up Mech (Rare)", "Tuned Up Crystal (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Auglur",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma (Rare)", "Tuned Up Mech (Rare)", "Tuned Up Poison (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Flasque",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma Meeb (Rare)", "Tuned Up Crystal Meeb (Rare)", "Tuned Up Poison Meeb (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Nitebear",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Shadow", "Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Shadow (Rare)", "Tuned Up Mech (Rare)", "Tuned Up Crystal (Rare)"], "obtain": "Synthesis" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Rare Piplash",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Shadow", "Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Shadow (Rare)", "Tuned Up Mech (Rare)", "Tuned Up Poison (Rare)"], "obtain": "Synthesis" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 11h" }
    ]
  },
  {
    "n": "Whaill",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Yooreek", "2 of each Yooreek element Meebs", "3 Crystal Meebs"], "obtain": "Synthesis", "time": "1d 18h", "enhanced": "17h" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Vhenshun",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Mech", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Yooreek", "2 of each Yooreek element Meebs", "3 Poison Meebs"], "obtain": "Synthesis", "time": "1d 18h", "enhanced": "17h" },
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Pentumbra",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Meebkin", "2 of each Meebkin element Meebs", "3 Poison Meebs"], "obtain": "Synthesis", "time": "1d 18h", "enhanced": "17h" },
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Rhysmuth",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Mech", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Gaddzooks", "2 of each Gaddzooks element Meebs", "3 Poison Meebs"], "obtain": "Synthesis", "time": "1d 18h", "enhanced": "17h" },
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 6h" }
    ]
  },
  {
    "n": "Oogiddy",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Shadow", "Mech", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Nitebear", "2 of each Nitebear element Meebs", "3 Poison Meebs"], "obtain": "Synthesis", "time": "1d 18h", "enhanced": "17h" }
    ]
  },
  {
    "n": "Rare Whaill",
    "r": "Rare",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Mech", "Crystal"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Tuned Up Plasma (Rare)", "Tuned Up Shadow (Rare)", "Tuned Up Mech (Rare)", "Tuned Up Crystal (Rare)"], "obtain": "Synthesis" },
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "1d 21h" }
    ]
  },
  {
    "n": "BeMeebEth",
    "r": "Common",
    "c": "Ethereal",
    "e": ["Plasma", "Shadow", "Mech", "Crystal", "Poison"],
    "islands": [
      { "island": "Ethereal Workshop", "combo": ["Whaill", "3 of each Whaill element Meebs", "4 Poison Meebs"], "obtain": "Synthesis", "time": "2d 7h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Hairionette (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Gloptic", "Any Triple"], "time": "1d 8h", "enhanced": "1d" },
      { "island": "Major Paironormal Carnival", "combo": ["Hairionette", "any monster"], "obtain": "Teleport", "time": "1d 8h", "enhanced": "1d" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Any Triple"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Owlesque (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Hoax"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Any Triple"], "time": "1d 10h", "enhanced": "1d 1h 30m" },
      { "island": "Major Paironormal Carnival", "combo": ["Owlesque", "any monster"], "obtain": "Teleport", "time": "1d 10h", "enhanced": "1d 1h 30m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Any Triple"], "time": "1d 10h", "enhanced": "1d 1h 30m" }
    ]
  },
  {
    "n": "Arcorina (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Ruin"],
    "islands": [
      { "island": "Bone Island", "combo": ["Plinkajou", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Major Paironormal Carnival", "combo": ["Arcorina", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Any Triple"], "time": "1d 12h", "enhanced": "1d 3h" }
    ]
  },
  {
    "n": "Shhimmer (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Depths"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Any Triple"], "time": "1d 6h", "enhanced": "22h 30m" },
      { "island": "Major Paironormal Carnival", "combo": ["Shhimmer", "any monster"], "obtain": "Teleport", "time": "1d 6h", "enhanced": "22h 30m" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Any Triple"], "time": "1d 6h", "enhanced": "22h 30m" }
    ]
  },
  {
    "n": "Scallyrags (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Hoax"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Hairionette (Major)", "Owlesque (Major)"], "time": "1d 21h", "enhanced": "1d 9h 45m" }
    ]
  },
  {
    "n": "Raqsoun (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Ruin"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Hairionette (Major)", "Arcorina (Major)"], "time": "1d 21h", "enhanced": "1d 9h 45m" }
    ]
  },
  {
    "n": "eRmA gUrDy (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Depths"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Hairionette (Major)", "Shhimmer (Major)"], "time": "1d 21h", "enhanced": "1d 9h 45m" }
    ]
  },
  {
    "n": "Dakktyl (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Hoax", "Ruin"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Owlesque (Major)", "Arcorina (Major)"], "time": "1d 21h", "enhanced": "1d 9h 45m" }
    ]
  },
  {
    "n": "Jerm (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Hoax", "Ruin"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Dakktyl (Major)", "Hairionette (Major)"], "time": "2d 8h", "enhanced": "1d 18h" }
    ]
  },
  {
    "n": "Galymph (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Hoax", "Depths"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Scallyrags (Major)", "Shhimmer (Major)"], "time": "2d 8h", "enhanced": "1d 18h" }
    ]
  },
  {
    "n": "Illoost (Major)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Hoax", "Ruin", "Depths"],
    "islands": [
      { "island": "Major Paironormal Carnival", "combo": ["Dakktyl (Major)", "Shhimmer (Major)"], "time": "2d 8h", "enhanced": "1d 18h" }
    ]
  },
  {
    "n": "Hairionette (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Hairionette (Major)"], "obtain": "Fuging", "time": "1d 8h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Owlesque (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Hoax"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Owlesque (Major)"], "obtain": "Fuging", "time": "1d 10h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Arcorina (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Ruin"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Arcorina (Major)"], "obtain": "Fuging", "time": "1d 12h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Shhimmer (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Depths"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Shhimmer (Major)"], "obtain": "Fuging", "time": "1d 6h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Scallyrags (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Hoax"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Scallyrags (Major)"], "obtain": "Fuging", "time": "1d 21h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Raqsoun (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Ruin"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Raqsoun (Major)"], "obtain": "Fuging", "time": "1d 21h", "enhanced": "22h" }
    ]
  },
  {
    "n": "eRmA gUrDy (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Depths"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["eRmA gUrDy (Major)"], "obtain": "Fuging", "time": "1d 21h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Dakktyl (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Hoax", "Ruin"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Dakktyl (Major)"], "obtain": "Fuging", "time": "1d 21h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Jerm (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Hoax", "Ruin"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Jerm (Major)"], "obtain": "Fuging", "time": "2d 8h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Galymph (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Control", "Hoax", "Depths"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Galymph (Major)"], "obtain": "Fuging", "time": "2d 8h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Illoost (Minor)",
    "r": "Common",
    "c": "Paironormal",
    "e": ["Hoax", "Ruin", "Depths"],
    "islands": [
      { "island": "Minor Paironormal Carnival", "combo": ["Illoost (Major)"], "obtain": "Fuging", "time": "2d 8h", "enhanced": "22h" }
    ]
  },
  {
    "n": "Lowb",
    "r": "Common",
    "c": "Primordial",
    "e": ["Primordial Plant"],
    "islands": [
      { "island": "Plasma Islet", "combo": null, "obtain": "Harmonizing", "time": "2d 2h" }
    ]
  },
  {
    "n": "Bogle",
    "r": "Common",
    "c": "Primordial",
    "e": ["Primordial Air"],
    "islands": [
      { "island": "Mech Islet", "combo": null, "obtain": "Harmonizing", "time": "2d 2h" }
    ]
  },
  {
    "n": "Fandhul",
    "r": "Common",
    "c": "Primordial",
    "e": ["Primordial Cold"],
    "islands": [
      { "island": "Shadow Islet", "combo": null, "obtain": "Harmonizing", "time": "2d 2h" }
    ]
  },
  {
    "n": "Droah",
    "r": "Common",
    "c": "Primordial",
    "e": ["Primordial Water"],
    "islands": [
      { "island": "Crystal Islet", "combo": null, "obtain": "Harmonizing", "time": "2d 2h" }
    ]
  },
  {
    "n": "Wubbox",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Shards)", "req": "Purchase for 150,000 Shards and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Wublin Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport", "req": "Box monsters" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 75,000,000 Coins and Box monsters", "time": "2d", "enhanced": "1d 12h" }
    ]
  },
  {
    "n": "Rare Wubbox",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Wublin Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport", "req": "Box monsters" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Starpower)", "req": "Purchase for 1 Starpower", "time": "2d 12h", "enhanced": "1d 21h" }
    ]
  },
  {
    "n": "Epic Wubbox",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport", "req": "Box monsters" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 1 Diamond" }
    ]
  },
  {
    "n": "Brump",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Zynth",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Poewk",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Thwok",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Dwumrohl",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Zuuker",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Screemu",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Tympa",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Dermit",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Gheegur",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Whajje",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Creepuscule",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Blipsqueak",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Scargo",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Astropod",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Pixolotl",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Bona-Petite",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Maulch",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Fleechwurm",
    "r": "Common",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Brump",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Zynth",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Poewk",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Thwok",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Dwumrohl",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Zuuker",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Screemu",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Tympa",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Dermit",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Gheegur",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Whajje",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Creepuscule",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Blipsqueak",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Scargo",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Astropod",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Pixolotl",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Bona-Petite",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Maulch",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Fleechwurm",
    "r": "Rare",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Brump",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Zynth",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Poewk",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Thwok",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Dwumrohl",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Zuuker",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Tympa",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Dermit",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Gheegur",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Blipsqueak",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Bona-Petite",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Fleechwurm",
    "r": "Epic",
    "c": "Supernatural",
    "e": ["Electricity"],
    "islands": [
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Shugabush",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "Clamble"], "time": "1d 11h", "enhanced": "1d 2h 15m" },
      { "island": "Shugabush Island", "combo": ["Shugabush", "any monster"], "obtain": "Teleport", "time": "1d 11h", "enhanced": "1d 2h 15m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "Clamble"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugarock",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Mammott"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugabass",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Potbelly"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugajo",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Oaktopus"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugabeats",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Furcorn"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugabuzz",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Quibble"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugitar",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "PomPom"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Shugavox",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Deedge"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "Tawkerr",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Parlsona",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Maggpi",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Stoowarb",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "Charrkoll",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Relics)", "req": "Purchase for 100 Relics", "time": "8h", "enhanced": "6h" }
    ]
  },
  {
    "n": "bbli$zard",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Congle"], "time": "1d 11h", "enhanced": "1d 2h 15m" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Congle"], "time": "1d 11h", "enhanced": "1d 2h 15m" }
    ]
  },
  {
    "n": "T-Pirainha",
    "r": "Common",
    "c": "Legendary",
    "e": ["Legendary"],
    "islands": [
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 500 Diamonds", "time": "2d 2h", "enhanced": "1d 13h 30m" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Diamonds)", "req": "Purchase for 500 Diamonds", "time": "2d 2h", "enhanced": "1d 13h 30m" }
    ]
  },
  {
    "n": "Punkleton",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Spooktacle"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "T-Rox"], "time": "18h", "enhanced": "13h 30m" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "any monster"], "obtain": "Teleport", "time": "18h", "enhanced": "13h 30m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "T-Rox"], "time": "18h", "enhanced": "13h 30m" }
    ]
  },
  {
    "n": "Yool",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Festival of Yay"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Congle"], "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "any monster"], "obtain": "Teleport", "time": "1d 12h", "enhanced": "1d 3h" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Congle"], "time": "1d 12h", "enhanced": "1d 3h" }
    ]
  },
  {
    "n": "Schmoochle",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Season of Love"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Tweedle"], "time": "1d 7h 6m 30s", "enhanced": "23h 19m 52s" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "any monster"], "obtain": "Teleport", "time": "1d 7h 6m 30s", "enhanced": "23h 19m 52s" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Tweedle"], "time": "1d 7h 6m 30s", "enhanced": "23h 19m 52s" }
    ]
  },
  {
    "n": "Blabbit",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Eggs-Travaganza"],
    "islands": [
      { "island": "Water Island", "combo": ["Spunge", "Scups"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Seasonal Shanty", "combo": ["Blabbit", "any monster"], "obtain": "Teleport", "time": "19h", "enhanced": "14h 15m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Scups"], "time": "19h", "enhanced": "14h 15m" }
    ]
  },
  {
    "n": "Hoola",
    "r": "Common",
    "c": "Seasonal",
    "e": ["SummerSong"],
    "islands": [
      { "island": "Air Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Earth Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Seasonal Shanty", "combo": ["Hoola", "any monster"], "obtain": "Teleport", "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Colossingum", "combo": null, "obtain": "Teleport" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Mirror Earth Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" }
    ]
  },
  {
    "n": "Gobbleygourd",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Feast-Ember"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Glowl", "Kayna"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Fire Oasis", "combo": ["Glowl", "Kayna"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Yool"], "obtain": "Teleport", "time": "21h", "enhanced": "15h 45m" }
    ]
  },
  {
    "n": "Clavavera",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Beat Hereafter"],
    "islands": [
      { "island": "Bone Island", "combo": ["Withur", "Clackula"], "time": "22h 11m", "enhanced": "16h 38m 15s" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Schmoochle"], "obtain": "Teleport", "time": "22h 11m", "enhanced": "16h 38m 15s" },
      { "island": "Mirror Bone Island", "combo": ["Withur", "Clackula"], "time": "22h 11m", "enhanced": "16h 38m 15s" }
    ]
  },
  {
    "n": "Viveine",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Echoes of Eco"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Oaktopus"], "time": "1d 2h 5m 20s", "enhanced": "19h 34m" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Blabbit"], "obtain": "Teleport", "time": "1d 2h 5m 20s", "enhanced": "19h 34m" },
      { "island": "Amber Island", "combo": null, "obtain": "Zapping", "time": "1d 2h 5m 20s", "enhanced": "19h 34m" }
    ]
  },
  {
    "n": "Jam Boree",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Anniversary Month"],
    "islands": [
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Hoola"], "obtain": "Teleport", "time": "1d 16h 24m", "enhanced": "1d 6h 18m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" }
    ]
  },
  {
    "n": "Carillong",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Crescendo Moon"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Mushaboom", "Roarick"], "time": "1d 3h 9m 32s", "enhanced": "20h 22m 9s" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Schmoochle"], "obtain": "Teleport", "time": "1d 3h 9m 32s", "enhanced": "20h 22m 9s" }
    ]
  },
  {
    "n": "Whiz-bang",
    "r": "Common",
    "c": "Seasonal",
    "e": ["SkyPainting"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Spytrap"], "time": "1d 4h 6m", "enhanced": "21h 4m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Blabbit"], "obtain": "Teleport", "time": "1d 4h 6m", "enhanced": "21h 4m 30s" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Spytrap"], "time": "1d 4h 6m", "enhanced": "21h 4m 30s" }
    ]
  },
  {
    "n": "Monculus",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Life-Formula"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Nebulob", "Jeeode"], "time": "20h 4m", "enhanced": "15h 3m" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Hoola"], "obtain": "Teleport", "time": "20h 4m", "enhanced": "15h 3m" },
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Ffidyll",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Cloverspell"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Floot Fly"], "time": "22h 44m", "enhanced": "17h 3m" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "Blabbit"], "obtain": "Teleport", "time": "22h 44m", "enhanced": "17h 3m" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Floot Fly"], "time": "22h 44m", "enhanced": "17h 3m" }
    ]
  },
  {
    "n": "Boo'qwurm",
    "r": "Common",
    "c": "Seasonal",
    "e": ["MindBoggle"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Periscorp", "Bonkers"], "time": "1d 6m 24s", "enhanced": "18h 4m 48s" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "Hoola"], "obtain": "Teleport", "time": "1d 6m 24s", "enhanced": "18h 4m 48s" },
      { "island": "Mirror Psychic Island", "combo": ["Periscorp", "Bonkers"], "time": "1d 6m 24s", "enhanced": "18h 4m 48s" }
    ]
  },
  {
    "n": "Spurrit",
    "r": "Common",
    "c": "Seasonal",
    "e": ["Perplexplore"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Wynq", "Maw"], "time": "20h 18m", "enhanced": "15h 13m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Blabbit", "Hoola"], "obtain": "Teleport", "time": "20h 18m", "enhanced": "15h 13m 30s" }
    ]
  },
  {
    "n": "Rare Punkleton",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Spooktacle"],
    "islands": [
      { "island": "Plant Island", "combo": ["Bowgart", "T-Rox"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "any monster"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Bowgart", "T-Rox"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Rare Yool",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Festival of Yay"],
    "islands": [
      { "island": "Cold Island", "combo": ["Thumpies", "Congle"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "any monster"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Thumpies", "Congle"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Rare Schmoochle",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Season of Love"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Tweedle"], "time": "1d 7h 6m 30s", "enhanced": "23h 19m 52s" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "any monster"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Tweedle"], "time": "1d 7h 6m 30s", "enhanced": "23h 19m 52s" }
    ]
  },
  {
    "n": "Rare Blabbit",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Eggs-Travaganza"],
    "islands": [
      { "island": "Water Island", "combo": ["Spunge", "Scups"], "time": "19h", "enhanced": "14h 15m" },
      { "island": "Seasonal Shanty", "combo": ["Blabbit", "any monster"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Spunge", "Scups"], "time": "19h", "enhanced": "14h 15m" }
    ]
  },
  {
    "n": "Rare Hoola",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["SummerSong"],
    "islands": [
      { "island": "Air Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Earth Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Seasonal Shanty", "combo": ["Hoola", "any monster"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" },
      { "island": "Mirror Earth Island", "combo": ["PomPom", "Pango"], "time": "1d 1h", "enhanced": "18h 45m" }
    ]
  },
  {
    "n": "Rare Gobbleygourd",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Feast-Ember"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Glowl", "Kayna"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Fire Oasis", "combo": ["Glowl", "Kayna"], "time": "21h", "enhanced": "15h 45m" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Yool"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Rare Clavavera",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Beat Hereafter"],
    "islands": [
      { "island": "Bone Island", "combo": ["Withur", "Clackula"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Schmoochle"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Mirror Bone Island", "combo": ["Withur", "Clackula"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Rare Viveine",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Echoes of Eco"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "Oaktopus"], "time": "1d 2h 5m 20s", "enhanced": "19h 34m" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Blabbit"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 7h 45m", "enhanced": "13h 2m 40s" }
    ]
  },
  {
    "n": "Rare Jam Boree",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Anniversary Month"],
    "islands": [
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Hoola"], "obtain": "Teleport", "time": "2d 2h", "enhanced": "1d 13h 30m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" }
    ]
  },
  {
    "n": "Rare Carillong",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Crescendo Moon"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Mushaboom", "Roarick"], "time": "1d 3h 9m 32s", "enhanced": "20h 22m 9s" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Schmoochle"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Rare Whiz-bang",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["SkyPainting"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Spytrap"], "time": "1d 4h 6m", "enhanced": "21h 4m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Blabbit"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Spytrap"], "time": "1d 4h 6m", "enhanced": "21h 4m 30s" }
    ]
  },
  {
    "n": "Rare Monculus",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Life-Formula"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Nebulob", "Jeeode"], "time": "20h 4m", "enhanced": "15h 3m" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Hoola"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Rare Ffidyll",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Cloverspell"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "Floot Fly"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "Blabbit"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "Floot Fly"], "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Rare Boo'qwurm",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["MindBoggle"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Periscorp", "Bonkers"], "time": "1d 6m 24s", "enhanced": "18h 4m 48s" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "Hoola"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" },
      { "island": "Mirror Psychic Island", "combo": ["Periscorp", "Bonkers"], "time": "1d 6m 24s", "enhanced": "18h 4m 48s" }
    ]
  },
  {
    "n": "Rare Spurrit",
    "r": "Rare",
    "c": "Seasonal",
    "e": ["Perplexplore"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Wynq", "Maw"], "time": "20h 18m", "enhanced": "15h 13m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Blabbit", "Hoola"], "obtain": "Teleport", "time": "1d 7h 45m", "enhanced": "23h 48m 45s" }
    ]
  },
  {
    "n": "Epic Punkleton",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Spooktacle"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Drumpler"], "time": "1d 7h 10m", "enhanced": "23h 22m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Schmoochle", "Blabbit"], "obtain": "Teleport", "time": "1d 7h 10m", "enhanced": "23h 22m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Drumpler"], "time": "1d 7h 10m", "enhanced": "23h 22m 30s" }
    ]
  },
  {
    "n": "Epic Yool",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Festival of Yay"],
    "islands": [
      { "island": "Cold Island", "combo": ["Deedge", "Pango"], "time": "1d 1h 12m", "enhanced": "18h 54m" },
      { "island": "Seasonal Shanty", "combo": ["Blabbit", "Hoola"], "obtain": "Teleport", "time": "1d 1h 12m", "enhanced": "18h 54m" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Pango"], "time": "1d 1h 12m", "enhanced": "18h 54m" }
    ]
  },
  {
    "n": "Epic Schmoochle",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Season of Love"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Quibble"], "time": "22h 14m", "enhanced": "16h 40m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Hoola"], "obtain": "Teleport", "time": "22h 14m", "enhanced": "16h 40m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Quibble"], "time": "22h 14m", "enhanced": "16h 40m 30s" }
    ]
  },
  {
    "n": "Epic Blabbit",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Eggs-Travaganza"],
    "islands": [
      { "island": "Water Island", "combo": ["Shellbeat", "Oaktopus"], "time": "1d 1h 22m", "enhanced": "19h 1m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Punkleton", "Yool"], "obtain": "Teleport", "time": "1d 1h 22m", "enhanced": "19h 1m 30s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Oaktopus"], "time": "1d 1h 22m", "enhanced": "19h 1m 30s" }
    ]
  },
  {
    "n": "Epic Hoola",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["SummerSong"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Fwog"], "time": "21h 20m", "enhanced": "16h" },
      { "island": "Earth Island", "combo": ["Quarrister", "Dandidoo"], "time": "21h 20m", "enhanced": "16h" },
      { "island": "Seasonal Shanty", "combo": ["Yool", "Schmoochle"], "obtain": "Teleport", "time": "21h 20m", "enhanced": "16h" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Fwog"], "time": "21h 20m", "enhanced": "16h" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Dandidoo"], "time": "21h 20m", "enhanced": "16h" }
    ]
  },
  {
    "n": "Epic Gobbleygourd",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Feast-Ember"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Tring", "Flowah"], "time": "1d 3h 11m", "enhanced": "20h 23m 15s" },
      { "island": "Fire Oasis", "combo": ["Sneyser", "Boskus"], "time": "1d 3h 11m", "enhanced": "20h 23m 15s" },
      { "island": "Seasonal Shanty", "combo": ["Clavavera", "Jam Boree"], "obtain": "Teleport", "time": "1d 3h 11m", "enhanced": "20h 23m 15s" }
    ]
  },
  {
    "n": "Epic Clavavera",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Beat Hereafter"],
    "islands": [
      { "island": "Bone Island", "combo": ["Plinkajou", "Hawlo"], "time": "23h 11m", "enhanced": "17h 23m 15s" },
      { "island": "Seasonal Shanty", "combo": ["Viveine", "Whiz-bang"], "obtain": "Teleport", "time": "23h 11m", "enhanced": "17h 23m 15s" },
      { "island": "Mirror Bone Island", "combo": ["Plinkajou", "Hawlo"], "time": "23h 11m", "enhanced": "17h 23m 15s" }
    ]
  },
  {
    "n": "Epic Viveine",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Echoes of Eco"],
    "islands": [
      { "island": "Shugabush Island", "combo": ["Shugabush", "PomPom"], "time": "1d 8h 10m", "enhanced": "1d 7m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Monculus", "Ffidyll"], "obtain": "Teleport", "time": "1d 8h 10m", "enhanced": "1d 7m 30s" },
      { "island": "Amber Island", "combo": null, "obtain": "Evolve", "time": "1d 8h 10m", "enhanced": "15h 52m 30s" }
    ]
  },
  {
    "n": "Epic Jam Boree",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Anniversary Month"],
    "islands": [
      { "island": "Seasonal Shanty", "combo": ["Gobbleygourd", "Boo'qwurm"], "obtain": "Teleport", "time": "1d 16h 23m", "enhanced": "1d 6h 17m 15s" },
      { "island": "Gold Island", "combo": null, "obtain": "Teleport" }
    ]
  },
  {
    "n": "Epic Carillong",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Crescendo Moon"],
    "islands": [
      { "island": "Magical Sanctum", "combo": ["Enchantling", "Roarick"], "time": "1d 12h 12m", "enhanced": "1d 3h 9m" },
      { "island": "Seasonal Shanty", "combo": ["Whiz-bang", "Monculus"], "obtain": "Teleport", "time": "1d 12h 12m", "enhanced": "1d 3h 9m" }
    ]
  },
  {
    "n": "Epic Whiz-bang",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["SkyPainting"],
    "islands": [
      { "island": "Light Island", "combo": ["Blow't", "Bulbo"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Boo'qwurm", "Spurrit"], "obtain": "Teleport", "time": "1d 6h 30m", "enhanced": "22h 52m 30s" },
      { "island": "Mirror Light Island", "combo": ["Blow't", "Bulbo"], "time": "1d 6h 30m", "enhanced": "22h 52m 30s" }
    ]
  },
  {
    "n": "Epic Monculus",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Life-Formula"],
    "islands": [
      { "island": "Ethereal Island", "combo": ["Whisp", "Humbug"], "time": "2d 9h 31m", "enhanced": "1d 19h 8m 15s" },
      { "island": "Seasonal Shanty", "combo": ["Carillong", "Ffidyll"], "obtain": "Teleport", "time": "2d 9h 31m", "enhanced": "1d 19h 8m 15s" },
      { "island": "Wublin Island", "combo": null, "obtain": "Zapping" }
    ]
  },
  {
    "n": "Epic Ffidyll",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Cloverspell"],
    "islands": [
      { "island": "Faerie Island", "combo": ["Pladdie", "HippityHop"], "time": "1d 6h 17m", "enhanced": "22h 42m 45s" },
      { "island": "Seasonal Shanty", "combo": ["Viveine", "Spurrit"], "obtain": "Teleport", "time": "1d 6h 17m", "enhanced": "22h 42m 45s" },
      { "island": "Mirror Faerie Island", "combo": ["Pladdie", "HippityHop"], "time": "1d 6h 17m", "enhanced": "22h 42m 45s" }
    ]
  },
  {
    "n": "Epic Boo'qwurm",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["MindBoggle"],
    "islands": [
      { "island": "Psychic Island", "combo": ["Gloptic", "Bonkers"], "time": "2d 4h 10m", "enhanced": "1d 15h 7m 30s" },
      { "island": "Seasonal Shanty", "combo": ["Gobbleygourd", "Clavavera"], "obtain": "Teleport", "time": "2d 4h 10m", "enhanced": "1d 15h 7m 30s" },
      { "island": "Mirror Psychic Island", "combo": ["Gloptic", "Bonkers"], "time": "2d 4h 10m", "enhanced": "1d 15h 7m 30s" }
    ]
  },
  {
    "n": "Epic Spurrit",
    "r": "Epic",
    "c": "Seasonal",
    "e": ["Perplexplore"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Sneyser", "Glowl"], "time": "1d 3h 20m", "enhanced": "20h 30m" },
      { "island": "Seasonal Shanty", "combo": ["Jam Boree", "Carillong"], "obtain": "Teleport", "time": "1d 3h 20m", "enhanced": "20h 30m" }
    ]
  },
  {
    "n": "Cataliszt",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Cataliszt"], "obtain": "Teleport", "time": "9h", "enhanced": "6h 45m" }
    ]
  },
  {
    "n": "G'joob",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Plant Island", "combo": ["Pummel", "T-Rox"], "time": "18h", "enhanced": "13h 30m" },
      { "island": "Mythical Island", "combo": ["G'joob", "Cataliszt"], "obtain": "Teleport", "time": "18h", "enhanced": "13h 30m" },
      { "island": "Mirror Plant Island", "combo": ["Pummel", "T-Rox"], "time": "18h", "enhanced": "13h 30m" }
    ]
  },
  {
    "n": "Strombonin",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Cold Island", "combo": ["Spunge", "Bowgart"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mythical Island", "combo": ["Strombonin", "Cataliszt"], "obtain": "Teleport", "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mirror Cold Island", "combo": ["Spunge", "Bowgart"], "time": "23h", "enhanced": "17h 15m" }
    ]
  },
  {
    "n": "Yawstrich",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Air Island", "combo": ["Scups", "T-Rox"], "time": "1d 4h", "enhanced": "21h" },
      { "island": "Mythical Island", "combo": ["Yawstrich", "Cataliszt"], "obtain": "Teleport", "time": "1d 4h", "enhanced": "21h" },
      { "island": "Mirror Air Island", "combo": ["Scups", "T-Rox"], "time": "1d 4h", "enhanced": "21h" }
    ]
  },
  {
    "n": "Anglow",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Water Island", "combo": ["Scups", "Pummel"], "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Mythical Island", "combo": ["Anglow", "Cataliszt"], "obtain": "Teleport", "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Mirror Water Island", "combo": ["Scups", "Pummel"], "time": "1d 9h", "enhanced": "1d 45m" }
    ]
  },
  {
    "n": "Hyehehe",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Earth Island", "combo": ["Thumpies", "PomPom"], "time": "1d 4h", "enhanced": "21h" },
      { "island": "Mythical Island", "combo": ["Hyehehe", "Cataliszt"], "obtain": "Teleport", "time": "1d 4h", "enhanced": "21h" },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "PomPom"], "time": "1d 4h", "enhanced": "21h" }
    ]
  },
  {
    "n": "Buzzinga",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Reedling", "Barrb"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mythical Island", "combo": ["Buzzinga", "Cataliszt"], "obtain": "Teleport", "time": "23h", "enhanced": "17h 15m" }
    ]
  },
  {
    "n": "Cherubble",
    "r": "Common",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Congle", "Woolabee"], "time": "18h", "enhanced": "13h 30m" },
      { "island": "Mythical Island", "combo": ["Cherubble", "Cataliszt"], "obtain": "Teleport", "time": "18h", "enhanced": "13h 30m" }
    ]
  },
  {
    "n": "Rare Cataliszt",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Any Single Mythical"], "obtain": "Teleport", "time": "11h 15m", "enhanced": "8h 26m 15s" }
    ]
  },
  {
    "n": "Rare G'joob",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Plant Island", "combo": ["Pummel", "T-Rox"], "time": "22h 30m", "enhanced": "16h 52m 30s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "G'joob"], "obtain": "Teleport", "time": "22h 30m", "enhanced": "16h 52m 30s", "failed_attempt": true },
      { "island": "Mirror Plant Island", "combo": ["Pummel", "T-Rox"], "time": "22h 30m", "enhanced": "16h 52m 30s" }
    ]
  },
  {
    "n": "Rare Strombonin",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Cold Island", "combo": ["Spunge", "Bowgart"], "time": "1d 4h 45m", "enhanced": "21h 33m 45s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Strombonin"], "obtain": "Teleport", "time": "1d 4h 45m", "enhanced": "21h 33m 45s", "failed_attempt": true },
      { "island": "Mirror Cold Island", "combo": ["Spunge", "Bowgart"], "time": "1d 4h 45m", "enhanced": "21h 33m 45s" }
    ]
  },
  {
    "n": "Rare Yawstrich",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Air Island", "combo": ["Scups", "T-Rox"], "time": "1d 4h", "enhanced": "21h" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Yawstrich"], "obtain": "Teleport", "time": "1d 11h", "enhanced": "1d 2h 15m", "failed_attempt": true },
      { "island": "Mirror Air Island", "combo": ["Scups", "T-Rox"], "time": "1d 4h", "enhanced": "21h" }
    ]
  },
  {
    "n": "Rare Anglow",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Water Island", "combo": ["Scups", "Pummel"], "time": "1d 9h", "enhanced": "1d 45m" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Anglow"], "obtain": "Teleport", "time": "1d 17h 15m", "enhanced": "1d 6h 56m 15s", "failed_attempt": true },
      { "island": "Mirror Water Island", "combo": ["Scups", "Pummel"], "time": "1d 9h", "enhanced": "1d 45m" }
    ]
  },
  {
    "n": "Rare Hyehehe",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Earth Island", "combo": ["Thumpies", "PomPom"], "time": "1d 4h", "enhanced": "21h" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Hyehehe"], "obtain": "Teleport", "time": "1d 11h", "enhanced": "1d 2h 15m", "failed_attempt": true },
      { "island": "Mirror Earth Island", "combo": ["Thumpies", "PomPom"], "time": "1d 4h", "enhanced": "21h" }
    ]
  },
  {
    "n": "Rare Buzzinga",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Reedling", "Barrb"], "time": "23h", "enhanced": "17h 15m" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Buzzinga"], "obtain": "Teleport", "time": "1d 4h 45m", "enhanced": "21h 33m 45s", "failed_attempt": true }
    ]
  },
  {
    "n": "Rare Cherubble",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Congle", "Woolabee"], "time": "18h", "enhanced": "13h 30m" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Cherubble"], "obtain": "Teleport", "time": "22h 30m", "enhanced": "16h 52m 30s", "failed_attempt": true }
    ]
  },
  {
    "n": "Epic G'joob",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Plant Island", "combo": ["Entbrat", "Maw"], "time": "1d 9h 10m", "enhanced": "1d 52m 30s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Yawstrich"], "obtain": "Teleport", "time": "1d 9h 10m", "enhanced": "1d 52m 30s" },
      { "island": "Mirror Plant Island", "combo": ["Entbrat", "Maw"], "time": "1d 9h 10m", "enhanced": "1d 52m 30s" }
    ]
  },
  {
    "n": "Epic Strombonin",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Cold Island", "combo": ["Deedge", "Furcorn"], "time": "1d 10h 30m", "enhanced": "1d 1h 52m 30s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "G'joob"], "obtain": "Teleport", "time": "1d 10h 30m", "enhanced": "1d 1h 52m 30s" },
      { "island": "Mirror Cold Island", "combo": ["Deedge", "Furcorn"], "time": "1d 10h 30m", "enhanced": "1d 1h 52m 30s" }
    ]
  },
  {
    "n": "Epic Yawstrich",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Air Island", "combo": ["Riff", "Fwog"], "time": "1d 14h 23m", "enhanced": "1d 4h 47m 15s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Strombonin"], "obtain": "Teleport", "time": "1d 14h 23m", "enhanced": "1d 4h 47m 15s" },
      { "island": "Mirror Air Island", "combo": ["Riff", "Fwog"], "time": "1d 14h 23m", "enhanced": "1d 4h 47m 15s" }
    ]
  },
  {
    "n": "Epic Anglow",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Water Island", "combo": ["Shellbeat", "Cybop"], "time": "1d 17h 13m", "enhanced": "1d 6h 54m 45s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Cherubble"], "obtain": "Teleport", "time": "1d 17h 13m", "enhanced": "1d 6h 54m 45s" },
      { "island": "Mirror Water Island", "combo": ["Shellbeat", "Cybop"], "time": "1d 17h 13m", "enhanced": "1d 6h 54m 45s" }
    ]
  },
  {
    "n": "Epic Hyehehe",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Earth Island", "combo": ["Quarrister", "Shrubb"], "time": "1d 9h 28m", "enhanced": "1d 1h 6m" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Buzzinga"], "obtain": "Teleport", "time": "1d 9h 28m", "enhanced": "1d 1h 6m" },
      { "island": "Mirror Earth Island", "combo": ["Quarrister", "Shrubb"], "time": "1d 9h 28m", "enhanced": "1d 1h 6m" }
    ]
  },
  {
    "n": "Epic Buzzinga",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Fire Haven", "combo": ["Tring", "Glowl"], "time": "1d 6h 34m", "enhanced": "22h 55m 30s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Anglow"], "obtain": "Teleport", "time": "1d 6h 34m", "enhanced": "22h 55m 30s" }
    ]
  },
  {
    "n": "Epic Cherubble",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Mythical"],
    "islands": [
      { "island": "Fire Oasis", "combo": ["Sneyser", "Boskus"], "time": "1d 17h 13m", "enhanced": "1d 6h 54m 45s" },
      { "island": "Mythical Island", "combo": ["Cataliszt", "Hyehehe"], "obtain": "Teleport", "time": "1d 17h 13m", "enhanced": "1d 6h 54m 45s" }
    ]
  },
  {
    "n": "Bleatnik",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "G'joob"], "time": "1d 3h", "enhanced": "20h 15m" }
    ]
  },
  {
    "n": "Cranchee",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Strombonin"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "Sporerow",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Yawstrich"], "time": "1d 13h", "enhanced": "1d 3h 45m" }
    ]
  },
  {
    "n": "Pinghound",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Anglow"], "time": "1d 18h", "enhanced": "1d 7h 30m" }
    ]
  },
  {
    "n": "Wheezel",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Hyehehe"], "time": "1d 13h", "enhanced": "1d 3h 45m" }
    ]
  },
  {
    "n": "Knurv",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Buzzinga"], "time": "1d 8h", "enhanced": "1d" }
    ]
  },
  {
    "n": "shLep",
    "r": "Common",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Cherubble"], "time": "1d 3h", "enhanced": "20h 15m" }
    ]
  },
  {
    "n": "Rare Bleatnik",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "G'joob"], "time": "1d 3h", "enhanced": "20h 15m" }
    ]
  },
  {
    "n": "Rare Cranchee",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Strombonin"], "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Rare Sporerow",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Yawstrich"], "time": "1d 22h 15m", "enhanced": "1d 10h 41m 15s" }
    ]
  },
  {
    "n": "Rare Pinghound",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Anglow"], "time": "2d 4h 30m", "enhanced": "1d 15h 22m 30s" }
    ]
  },
  {
    "n": "Rare Wheezel",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Hyehehe"], "time": "1d 22h 15m", "enhanced": "1d 10h 41m 15s" }
    ]
  },
  {
    "n": "Rare Knurv",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Buzzinga"], "time": "1d 16h", "enhanced": "1d 6h" }
    ]
  },
  {
    "n": "Rare shLep",
    "r": "Rare",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Cherubble"], "time": "1d 9h 45m", "enhanced": "1d 1h 18m 45s" }
    ]
  },
  {
    "n": "Epic Bleatnik",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Cherubble"], "time": "2d 1h 13m", "enhanced": "1d 12h 54m 45s" }
    ]
  },
  {
    "n": "Epic Cranchee",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Anglow"], "time": "2d 16h 13m", "enhanced": "2d 9m 45s" }
    ]
  },
  {
    "n": "Epic Sporerow",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Hyehehe"], "time": "2d 13h 28m", "enhanced": "1d 22h 6m" }
    ]
  },
  {
    "n": "Epic Pinghound",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Strombonin"], "time": "2d 19h 30m", "enhanced": "2d 2h 37m 30s" }
    ]
  },
  {
    "n": "Epic Knurv",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "G'joob"], "time": "2d 8h 10m", "enhanced": "1d 18h 7m 30s" }
    ]
  },
  {
    "n": "Epic shLep",
    "r": "Epic",
    "c": "Mythical",
    "e": ["Dream", "Mythical"],
    "islands": [
      { "island": "Mythical Island", "combo": ["Cataliszt", "Buzzinga"], "time": "2d 34m", "enhanced": "1d 12h 25m 30s" }
    ]
  },
  {
    "n": "Hornacle",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Furnoss",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Glaishur",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Blasoom",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Syncopite",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Vhamp",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Galvana",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Scaratar",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Loodvigg",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Torrt",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Plixie",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Attmoz",
    "r": "Young",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Hornacle",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Furnoss",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Glaishur",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Blasoom",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Syncopite",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Vhamp",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Galvana",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Scaratar",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Loodvigg",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Torrt",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Plixie",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Adult Attmoz",
    "r": "Adult",
    "c": "Celestial",
    "e": ["Celestial"],
    "islands": []
  },
  {
    "n": "Do",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "Re",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "Mi",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "Fa",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "Sol",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "La",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "Ti",
    "r": "Common",
    "c": "Dipster",
    "e": ["Dipster"],
    "islands": [
      { "island": "Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Fire Haven", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Fire Oasis", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Ethereal Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Magical Sanctum", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 7 Keys" },
      { "island": "Mirror Plant Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 1 Key" },
      { "island": "Mirror Cold Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 2 Keys" },
      { "island": "Mirror Air Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 3 Keys" },
      { "island": "Mirror Water Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 4 Keys" },
      { "island": "Mirror Earth Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 5 Keys" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" },
      { "island": "Mirror Bone Island", "combo": null, "obtain": "Purchase (Keys)", "req": "Purchase for 6 Keys" }
    ]
  },
  {
    "n": "Phosphoran Phlox",
    "r": "Common",
    "c": "Titansoul",
    "e": ["Titansoul"],
    "islands": [
      { "island": "Light Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 10,000,000 Coins", "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Light Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 10,000,000 Coins", "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Cruv'laaphtian Crocus",
    "r": "Common",
    "c": "Titansoul",
    "e": ["Titansoul"],
    "islands": [
      { "island": "Psychic Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 10,000,000 Coins", "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Psychic Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 10,000,000 Coins", "time": "12h", "enhanced": "9h" }
    ]
  },
  {
    "n": "Faesoddoid Fungus",
    "r": "Common",
    "c": "Titansoul",
    "e": ["Titansoul"],
    "islands": [
      { "island": "Faerie Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 10,000,000 Coins", "time": "12h", "enhanced": "9h" },
      { "island": "Mirror Faerie Island", "combo": null, "obtain": "Purchase (Coins)", "req": "Purchase for 10,000,000 Coins", "time": "12h", "enhanced": "9h" }
    ]
  }
  ],

  // ── Zapping targets ──────────────────────────────────────────────────────────
  "zapTargets": [
  {
    "n": "Kayna",
    "island": "Amber Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Potbelly", "eggs": 10 },
      { "monster": "Mammott", "eggs": 10 },
      { "monster": "Tweedle", "eggs": 10 },
      { "monster": "Toe Jammer", "eggs": 10 },
      { "monster": "Noggin", "eggs": 10 },
      { "monster": "Shrubb", "eggs": 8 },
      { "monster": "Oaktopus", "eggs": 8 },
      { "monster": "Furcorn", "eggs": 8 },
      { "monster": "Dandidoo", "eggs": 8 },
      { "monster": "Cybop", "eggs": 8 },
      { "monster": "T-Rox", "eggs": 6 },
      { "monster": "Bowgart", "eggs": 6 },
      { "monster": "Clamble", "eggs": 6 },
      { "monster": "PomPom", "eggs": 6 },
      { "monster": "Scups", "eggs": 6 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Riff", "eggs": 2 },
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Quarrister", "eggs": 2 }
    ]
  },
  {
    "n": "Glowl",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Quibble", "eggs": 2 },
      { "monster": "Dandidoo", "eggs": 2 },
      { "monster": "Pango", "eggs": 2 },
      { "monster": "Flowah", "eggs": 2 },
      { "monster": "Boskus", "eggs": 2 },
      { "monster": "Congle", "eggs": 1 },
      { "monster": "Spunge", "eggs": 1 },
      { "monster": "Thumpies", "eggs": 1 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Spytrap", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 }
    ]
  },
  {
    "n": "Flowah",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Shrubb", "eggs": 4 },
      { "monster": "Oaktopus", "eggs": 5 },
      { "monster": "Furcorn", "eggs": 5 },
      { "monster": "Phangler", "eggs": 2 },
      { "monster": "Boskus", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 1 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Rooba", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 }
    ]
  },
  {
    "n": "Stogg",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 4 },
      { "monster": "Shrubb", "eggs": 4 },
      { "monster": "Cybop", "eggs": 4 },
      { "monster": "Flowah", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Withur", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 }
    ]
  },
  {
    "n": "Phangler",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 2 },
      { "monster": "Oaktopus", "eggs": 2 },
      { "monster": "Quibble", "eggs": 2 },
      { "monster": "Stogg", "eggs": 1 },
      { "monster": "Boskus", "eggs": 1 },
      { "monster": "Pummel", "eggs": 1 },
      { "monster": "Spunge", "eggs": 1 },
      { "monster": "Whaddle", "eggs": 1 },
      { "monster": "Rootitoot", "eggs": 1 },
      { "monster": "Banjaw", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 }
    ]
  },
  {
    "n": "Boskus",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 4 },
      { "monster": "Furcorn", "eggs": 4 },
      { "monster": "Pango", "eggs": 4 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "Floogull", "eggs": 1 },
      { "monster": "Bridg-it", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 }
    ]
  },
  {
    "n": "Barrb",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 5 },
      { "monster": "Quibble", "eggs": 6 },
      { "monster": "Phangler", "eggs": 4 },
      { "monster": "Flowah", "eggs": 4 },
      { "monster": "Gob", "eggs": 2 },
      { "monster": "Pummel", "eggs": 3 },
      { "monster": "Clamble", "eggs": 3 },
      { "monster": "Floogull", "eggs": 2 },
      { "monster": "Rootitoot", "eggs": 1 },
      { "monster": "Withur", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 }
    ]
  },
  {
    "n": "Floogull",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Cybop", "eggs": 4 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "HippityHop", "eggs": 3 },
      { "monster": "Scups", "eggs": 1 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Woolabee", "eggs": 1 },
      { "monster": "Uuduk", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 }
    ]
  },
  {
    "n": "Whaddle",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 6 },
      { "monster": "Maw", "eggs": 6 },
      { "monster": "Glowl", "eggs": 4 },
      { "monster": "Boskus", "eggs": 4 },
      { "monster": "Peckidna", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 5 },
      { "monster": "Scups", "eggs": 5 },
      { "monster": "Floogull", "eggs": 2 },
      { "monster": "Woolabee", "eggs": 1 },
      { "monster": "Sooza", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 }
    ]
  },
  {
    "n": "Woolabee",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Pango", "eggs": 5 },
      { "monster": "Dandidoo", "eggs": 5 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Squot", "eggs": 1 },
      { "monster": "Congle", "eggs": 4 },
      { "monster": "Thumpies", "eggs": 4 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Uuduk", "eggs": 1 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 }
    ]
  },
  {
    "n": "Repatillo",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 7 },
      { "monster": "Maw", "eggs": 7 },
      { "monster": "Stogg", "eggs": 5 },
      { "monster": "Boskus", "eggs": 4 },
      { "monster": "Poppette", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 4 },
      { "monster": "Congle", "eggs": 5 },
      { "monster": "Thrumble", "eggs": 2 },
      { "monster": "Barrb", "eggs": 2 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 }
    ]
  },
  {
    "n": "Rootitoot",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Flowah", "eggs": 4 },
      { "monster": "Furcorn", "eggs": 7 },
      { "monster": "Oaktopus", "eggs": 7 },
      { "monster": "Gob", "eggs": 1 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "Phangler", "eggs": 5 },
      { "monster": "Spunge", "eggs": 4 },
      { "monster": "Tapricorn", "eggs": 1 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 }
    ]
  },
  {
    "n": "Sooza",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 6 },
      { "monster": "Quibble", "eggs": 6 },
      { "monster": "Flowah", "eggs": 4 },
      { "monster": "Boskus", "eggs": 3 },
      { "monster": "Squot", "eggs": 3 },
      { "monster": "Scups", "eggs": 4 },
      { "monster": "PomPom", "eggs": 5 },
      { "monster": "Floogull", "eggs": 2 },
      { "monster": "Whaddle", "eggs": 1 },
      { "monster": "Rooba", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 }
    ]
  },
  {
    "n": "Thrumble",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 6 },
      { "monster": "Drumpler", "eggs": 6 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "HippityHop", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 4 },
      { "monster": "Scups", "eggs": 4 },
      { "monster": "Repatillo", "eggs": 2 },
      { "monster": "Whaddle", "eggs": 1 },
      { "monster": "Withur", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 }
    ]
  },
  {
    "n": "Ziggurab",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 4 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Boskus", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "Bulbo", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 1 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Thrumble", "eggs": 1 },
      { "monster": "Cantorell", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 }
    ]
  },
  {
    "n": "Wynq",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Maw", "eggs": 6 },
      { "monster": "Quibble", "eggs": 6 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Boskus", "eggs": 3 },
      { "monster": "Squot", "eggs": 1 },
      { "monster": "Pummel", "eggs": 4 },
      { "monster": "Bowgart", "eggs": 4 },
      { "monster": "Floogull", "eggs": 1 },
      { "monster": "Woolabee", "eggs": 1 },
      { "monster": "Tapricorn", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 }
    ]
  },
  {
    "n": "Tring",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 4 },
      { "monster": "Shrubb", "eggs": 4 },
      { "monster": "Flowah", "eggs": 3 },
      { "monster": "Boskus", "eggs": 3 },
      { "monster": "Gob", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 1 },
      { "monster": "Reedling", "eggs": 1 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Woolabee", "eggs": 1 },
      { "monster": "Bridg-it", "eggs": 1 },
      { "monster": "Blow't", "eggs": 1 }
    ]
  },
  {
    "n": "Bisonorus",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Fwog", "eggs": 7 },
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Plinkajou", "eggs": 1 },
      { "monster": "Fiddlement", "eggs": 2 },
      { "monster": "Spunge", "eggs": 3 },
      { "monster": "Thumpies", "eggs": 3 },
      { "monster": "Bonkers", "eggs": 3 },
      { "monster": "Whaddle", "eggs": 2 },
      { "monster": "Oaktopus", "eggs": 7 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 7 },
      { "monster": "Barrb", "eggs": 2 }
    ]
  },
  {
    "n": "Yelmut",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Furcorn", "eggs": 4 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Flowah", "eggs": 3 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Wimmzies", "eggs": 3 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Ziggurab", "eggs": 2 },
      { "monster": "Sooza", "eggs": 1 },
      { "monster": "Tapricorn", "eggs": 2 },
      { "monster": "Gloptic", "eggs": 1 }
    ]
  },
  {
    "n": "Flum Ox",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Cybop", "eggs": 7 },
      { "monster": "Shrubb", "eggs": 7 },
      { "monster": "Glowl", "eggs": 4 },
      { "monster": "Phangler", "eggs": 4 },
      { "monster": "Yuggler", "eggs": 2 },
      { "monster": "Reedling", "eggs": 4 },
      { "monster": "Congle", "eggs": 4 },
      { "monster": "Woolabee", "eggs": 2 },
      { "monster": "Repatillo", "eggs": 2 },
      { "monster": "Bridg-it", "eggs": 2 },
      { "monster": "Plinkajou", "eggs": 1 }
    ]
  },
  {
    "n": "Krillby",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Dandidoo", "eggs": 8 },
      { "monster": "Cybop", "eggs": 8 },
      { "monster": "Flowah", "eggs": 6 },
      { "monster": "Bonkers", "eggs": 2 },
      { "monster": "Peckidna", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 5 },
      { "monster": "Reedling", "eggs": 6 },
      { "monster": "Floogull", "eggs": 2 },
      { "monster": "Whaddle", "eggs": 2 },
      { "monster": "Clavi Gnat", "eggs": 2 },
      { "monster": "Blow't", "eggs": 1 }
    ]
  },
  {
    "n": "Sneyser",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 4 },
      { "monster": "Pango", "eggs": 4 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "Poppette", "eggs": 1 },
      { "monster": "Pummel", "eggs": 1 },
      { "monster": "Congle", "eggs": 1 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Periscorp", "eggs": 1 },
      { "monster": "Gloptic", "eggs": 1 }
    ]
  },
  {
    "n": "Edamimi",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Shrubb", "eggs": 6 },
      { "monster": "Oaktopus", "eggs": 7 },
      { "monster": "Stogg", "eggs": 5 },
      { "monster": "Flowah", "eggs": 5 },
      { "monster": "Hawlo", "eggs": 2 },
      { "monster": "Clamble", "eggs": 4 },
      { "monster": "PomPom", "eggs": 5 },
      { "monster": "Barrb", "eggs": 2 },
      { "monster": "Wynq", "eggs": 2 },
      { "monster": "TooToo", "eggs": 2 },
      { "monster": "Blow't", "eggs": 1 }
    ]
  },
  {
    "n": "PongPing",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Shrubb", "eggs": 6 },
      { "monster": "Furcorn", "eggs": 6 },
      { "monster": "Flowah", "eggs": 4 },
      { "monster": "Boskus", "eggs": 4 },
      { "monster": "Bulbo", "eggs": 1 },
      { "monster": "Clamble", "eggs": 4 },
      { "monster": "Thumpies", "eggs": 4 },
      { "monster": "Repatillo", "eggs": 2 },
      { "monster": "Woolabee", "eggs": 2 },
      { "monster": "Cantorell", "eggs": 2 },
      { "monster": "Gloptic", "eggs": 1 }
    ]
  },
  {
    "n": "Incisaur",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Maw", "eggs": 6 },
      { "monster": "Dandidoo", "eggs": 6 },
      { "monster": "Stogg", "eggs": 4 },
      { "monster": "Boskus", "eggs": 4 },
      { "monster": "Denchuhs", "eggs": 1 },
      { "monster": "Bowgart", "eggs": 5 },
      { "monster": "Thumpies", "eggs": 5 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Whaddle", "eggs": 2 },
      { "monster": "Bridg-it", "eggs": 1 },
      { "monster": "Pladdie", "eggs": 1 }
    ]
  },
  {
    "n": "Tiawa",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Maw", "eggs": 7 },
      { "monster": "Quibble", "eggs": 7 },
      { "monster": "Phangler", "eggs": 4 },
      { "monster": "Pluckbill", "eggs": 2 },
      { "monster": "Peckidna", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 5 },
      { "monster": "PomPom", "eggs": 5 },
      { "monster": "Floogull", "eggs": 1 },
      { "monster": "Wynq", "eggs": 2 },
      { "monster": "Spytrap", "eggs": 1 },
      { "monster": "Pladdie", "eggs": 1 }
    ]
  },
  {
    "n": "Candelavra",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Flowah", "eggs": 3 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "Boskus", "eggs": 3 },
      { "monster": "Pluckbill", "eggs": 1 },
      { "monster": "Yuggler", "eggs": 1 },
      { "monster": "Wimmzies", "eggs": 1 },
      { "monster": "Hawlo", "eggs": 1 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Floogull", "eggs": 1 },
      { "monster": "Whaddle", "eggs": 1 },
      { "monster": "Woolabee", "eggs": 1 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Rootitoot", "eggs": 1 },
      { "monster": "Sooza", "eggs": 1 },
      { "monster": "Thrumble", "eggs": 1 },
      { "monster": "Ziggurab", "eggs": 1 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Fiddlement", "eggs": 1 },
      { "monster": "TooToo", "eggs": 1 },
      { "monster": "Rooba", "eggs": 1 },
      { "monster": "Periscorp", "eggs": 1 },
      { "monster": "Bridg-it", "eggs": 1 },
      { "monster": "Clavi Gnat", "eggs": 1 },
      { "monster": "Uuduk", "eggs": 1 },
      { "monster": "Banjaw", "eggs": 1 },
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Sneyser", "eggs": 1 },
      { "monster": "Blow't", "eggs": 1 },
      { "monster": "Gloptic", "eggs": 1 },
      { "monster": "Pladdie", "eggs": 1 },
      { "monster": "Plinkajou", "eggs": 1 }
    ]
  },
  {
    "n": "Drummidary",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "HippityHop", "eggs": 2 },
      { "monster": "Peckidna", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 1 },
      { "monster": "Pummel", "eggs": 1 },
      { "monster": "Clamble", "eggs": 1 },
      { "monster": "PomPom", "eggs": 1 },
      { "monster": "Reedling", "eggs": 1 },
      { "monster": "Scups", "eggs": 1 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Floogull", "eggs": 1 },
      { "monster": "Ziggurab", "eggs": 1 },
      { "monster": "Thrumble", "eggs": 1 },
      { "monster": "Bridg-it", "eggs": 1 },
      { "monster": "Cantorell", "eggs": 1 },
      { "monster": "Withur", "eggs": 1 },
      { "monster": "Uuduk", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 2 },
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Pladdie", "eggs": 1 },
      { "monster": "Plinkajou", "eggs": 1 }
    ]
  },
  {
    "n": "Bowhead",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Quibble", "eggs": 3 },
      { "monster": "Phangler", "eggs": 3 },
      { "monster": "Poppette", "eggs": 2 },
      { "monster": "Denchuhs", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 1 },
      { "monster": "Pummel", "eggs": 1 },
      { "monster": "Bowgart", "eggs": 1 },
      { "monster": "Spunge", "eggs": 1 },
      { "monster": "Congle", "eggs": 1 },
      { "monster": "Scups", "eggs": 1 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Whaddle", "eggs": 1 },
      { "monster": "Rootitoot", "eggs": 1 },
      { "monster": "Thrumble", "eggs": 1 },
      { "monster": "Tapricorn", "eggs": 1 },
      { "monster": "Periscorp", "eggs": 1 },
      { "monster": "Withur", "eggs": 1 },
      { "monster": "Banjaw", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Sneyser", "eggs": 1 },
      { "monster": "Gloptic", "eggs": 1 },
      { "monster": "Plinkajou", "eggs": 1 }
    ]
  },
  {
    "n": "Tuskski",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Boskus", "eggs": 3 },
      { "monster": "Bulbo", "eggs": 2 },
      { "monster": "Squot", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 1 },
      { "monster": "Clamble", "eggs": 1 },
      { "monster": "Bowgart", "eggs": 1 },
      { "monster": "Thumpies", "eggs": 1 },
      { "monster": "Congle", "eggs": 1 },
      { "monster": "PomPom", "eggs": 1 },
      { "monster": "Wynq", "eggs": 1 },
      { "monster": "Woolabee", "eggs": 1 },
      { "monster": "Sooza", "eggs": 1 },
      { "monster": "Ziggurab", "eggs": 1 },
      { "monster": "Spytrap", "eggs": 1 },
      { "monster": "Fiddlement", "eggs": 1 },
      { "monster": "Cantorell", "eggs": 1 },
      { "monster": "Clavi Gnat", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Sneyser", "eggs": 1 },
      { "monster": "Blow't", "eggs": 1 },
      { "monster": "Pladdie", "eggs": 1 }
    ]
  },
  {
    "n": "Gnarls",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 2 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Flowah", "eggs": 3 },
      { "monster": "Gob", "eggs": 2 },
      { "monster": "Bonkers", "eggs": 2 },
      { "monster": "Clamble", "eggs": 1 },
      { "monster": "Pummel", "eggs": 1 },
      { "monster": "Bowgart", "eggs": 1 },
      { "monster": "Reedling", "eggs": 1 },
      { "monster": "Thumpies", "eggs": 1 },
      { "monster": "Spunge", "eggs": 1 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Sooza", "eggs": 1 },
      { "monster": "Rootitoot", "eggs": 1 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Spytrap", "eggs": 1 },
      { "monster": "TooToo", "eggs": 1 },
      { "monster": "Tapricorn", "eggs": 1 },
      { "monster": "Rooba", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Blow't", "eggs": 1 },
      { "monster": "Gloptic", "eggs": 1 }
    ]
  },
  {
    "n": "Viveine",
    "island": "Amber Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 4 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 1 },
      { "monster": "Spunge", "eggs": 1 },
      { "monster": "Rootitoot", "eggs": 1 },
      { "monster": "Barrb", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 1 }
    ]
  },
  {
    "n": "Brump",
    "island": "Wublin Island",
    "limit": "2 Days",
    "requirements": [
      { "monster": "Furcorn", "eggs": 6 },
      { "monster": "Fwog", "eggs": 2 }
    ]
  },
  {
    "n": "Zynth",
    "island": "Wublin Island",
    "limit": "3 Days",
    "requirements": [
      { "monster": "Pango", "eggs": 1 },
      { "monster": "Oaktopus", "eggs": 1 },
      { "monster": "Drumpler", "eggs": 1 },
      { "monster": "Maw", "eggs": 1 },
      { "monster": "Congle", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 1 }
    ]
  },
  {
    "n": "Poewk",
    "island": "Wublin Island",
    "limit": "5 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Reedling", "eggs": 1 },
      { "monster": "Scups", "eggs": 1 },
      { "monster": "PomPom", "eggs": 1 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Dandidoo", "eggs": 2 },
      { "monster": "Pango", "eggs": 1 },
      { "monster": "Shrubb", "eggs": 1 },
      { "monster": "Oaktopus", "eggs": 1 }
    ]
  },
  {
    "n": "Thwok",
    "island": "Wublin Island",
    "limit": "7 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Spunge", "eggs": 4 },
      { "monster": "PomPom", "eggs": 4 },
      { "monster": "Bowgart", "eggs": 4 },
      { "monster": "Quibble", "eggs": 4 },
      { "monster": "Furcorn", "eggs": 4 }
    ]
  },
  {
    "n": "Dwumrohl",
    "island": "Wublin Island",
    "limit": "14 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 3 },
      { "monster": "Quarrister", "eggs": 3 },
      { "monster": "Deedge", "eggs": 3 },
      { "monster": "Riff", "eggs": 3 },
      { "monster": "Entbrat", "eggs": 3 },
      { "monster": "Reedling", "eggs": 4 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "PomPom", "eggs": 4 },
      { "monster": "Congle", "eggs": 4 },
      { "monster": "Pummel", "eggs": 4 },
      { "monster": "Bowgart", "eggs": 4 },
      { "monster": "Tweedle", "eggs": 4 },
      { "monster": "Potbelly", "eggs": 4 },
      { "monster": "Noggin", "eggs": 8 },
      { "monster": "Toe Jammer", "eggs": 8 },
      { "monster": "Mammott", "eggs": 8 }
    ]
  },
  {
    "n": "Zuuker",
    "island": "Wublin Island",
    "limit": "10 Days",
    "requirements": [
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 4 },
      { "monster": "T-Rox", "eggs": 6 },
      { "monster": "Oaktopus", "eggs": 6 },
      { "monster": "Furcorn", "eggs": 6 },
      { "monster": "Fwog", "eggs": 4 }
    ]
  },
  {
    "n": "Screemu",
    "island": "Wublin Island",
    "limit": "5 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Spunge", "eggs": 6 },
      { "monster": "Quibble", "eggs": 6 },
      { "monster": "Shrubb", "eggs": 6 }
    ]
  },
  {
    "n": "Tympa",
    "island": "Wublin Island",
    "limit": "14 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 8 },
      { "monster": "Pummel", "eggs": 12 },
      { "monster": "Clamble", "eggs": 12 },
      { "monster": "T-Rox", "eggs": 12 },
      { "monster": "Drumpler", "eggs": 24 }
    ]
  },
  {
    "n": "Dermit",
    "island": "Wublin Island",
    "limit": "3 Days",
    "requirements": [
      { "monster": "Quarrister", "eggs": 3 },
      { "monster": "Entbrat", "eggs": 3 },
      { "monster": "Scups", "eggs": 4 },
      { "monster": "Thumpies", "eggs": 4 },
      { "monster": "Fwog", "eggs": 12 }
    ]
  },
  {
    "n": "Gheegur",
    "island": "Wublin Island",
    "limit": "7 Days",
    "requirements": [
      { "monster": "Riff", "eggs": 6 },
      { "monster": "Reedling", "eggs": 6 },
      { "monster": "Scups", "eggs": 4 },
      { "monster": "PomPom", "eggs": 4 },
      { "monster": "Cybop", "eggs": 6 }
    ]
  },
  {
    "n": "Whajje",
    "island": "Wublin Island",
    "limit": "10 Days",
    "requirements": [
      { "monster": "Deedge", "eggs": 7 },
      { "monster": "Reedling", "eggs": 10 },
      { "monster": "Dandidoo", "eggs": 10 },
      { "monster": "Cybop", "eggs": 10 },
      { "monster": "Tweedle", "eggs": 6 }
    ]
  },
  {
    "n": "Creepuscule",
    "island": "Wublin Island",
    "limit": "7 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 5 },
      { "monster": "Deedge", "eggs": 5 },
      { "monster": "Congle", "eggs": 8 },
      { "monster": "Pummel", "eggs": 6 },
      { "monster": "T-Rox", "eggs": 6 },
      { "monster": "Quibble", "eggs": 10 },
      { "monster": "Noggin", "eggs": 12 }
    ]
  },
  {
    "n": "Blipsqueak",
    "island": "Wublin Island",
    "limit": "5 Days",
    "requirements": [
      { "monster": "Deedge", "eggs": 4 },
      { "monster": "PomPom", "eggs": 4 },
      { "monster": "T-Rox", "eggs": 6 },
      { "monster": "Cybop", "eggs": 6 },
      { "monster": "Toe Jammer", "eggs": 4 }
    ]
  },
  {
    "n": "Scargo",
    "island": "Wublin Island",
    "limit": "3 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 3 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Clamble", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 3 }
    ]
  },
  {
    "n": "Astropod",
    "island": "Wublin Island",
    "limit": "10 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 5 },
      { "monster": "Deedge", "eggs": 5 },
      { "monster": "Reedling", "eggs": 8 },
      { "monster": "Scups", "eggs": 6 },
      { "monster": "Spunge", "eggs": 8 },
      { "monster": "Toe Jammer", "eggs": 10 }
    ]
  },
  {
    "n": "Pixolotl",
    "island": "Wublin Island",
    "limit": "14 Days",
    "requirements": [
      { "monster": "Riff", "eggs": 6 },
      { "monster": "Entbrat", "eggs": 6 },
      { "monster": "Scups", "eggs": 10 },
      { "monster": "Pummel", "eggs": 8 },
      { "monster": "T-Rox", "eggs": 8 },
      { "monster": "Cybop", "eggs": 14 },
      { "monster": "Fwog", "eggs": 10 }
    ]
  },
  {
    "n": "Bona-Petite",
    "island": "Wublin Island",
    "limit": "10 Days",
    "requirements": [
      { "monster": "Riff", "eggs": 5 },
      { "monster": "Entbrat", "eggs": 5 },
      { "monster": "PomPom", "eggs": 6 },
      { "monster": "Bowgart", "eggs": 6 },
      { "monster": "T-Rox", "eggs": 6 },
      { "monster": "Fwog", "eggs": 10 },
      { "monster": "Drumpler", "eggs": 10 },
      { "monster": "Maw", "eggs": 10 },
      { "monster": "Mammott", "eggs": 10 }
    ]
  },
  {
    "n": "Maulch",
    "island": "Wublin Island",
    "limit": "7 Days",
    "requirements": [
      { "monster": "Quarrister", "eggs": 4 },
      { "monster": "Entbrat", "eggs": 4 },
      { "monster": "Spunge", "eggs": 6 },
      { "monster": "Pummel", "eggs": 6 },
      { "monster": "Clamble", "eggs": 4 },
      { "monster": "Furcorn", "eggs": 8 },
      { "monster": "Noggin", "eggs": 6 }
    ]
  },
  {
    "n": "Fleechwurm",
    "island": "Wublin Island",
    "limit": "5 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 3 },
      { "monster": "Quarrister", "eggs": 3 },
      { "monster": "Reedling", "eggs": 3 },
      { "monster": "Spunge", "eggs": 3 },
      { "monster": "Pummel", "eggs": 4 },
      { "monster": "Dandidoo", "eggs": 4 },
      { "monster": "Furcorn", "eggs": 4 }
    ]
  },
  {
    "n": "Wubbox",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Brump", "eggs": 1 },
      { "monster": "Zynth", "eggs": 1 },
      { "monster": "Poewk", "eggs": 1 },
      { "monster": "Thwok", "eggs": 1 },
      { "monster": "Dwumrohl", "eggs": 1 },
      { "monster": "Zuuker", "eggs": 1 },
      { "monster": "Screemu", "eggs": 1 },
      { "monster": "Tympa", "eggs": 1 },
      { "monster": "Dermit", "eggs": 1 },
      { "monster": "Gheegur", "eggs": 1 },
      { "monster": "Whajje", "eggs": 1 },
      { "monster": "Creepuscule", "eggs": 1 },
      { "monster": "Blipsqueak", "eggs": 1 },
      { "monster": "Scargo", "eggs": 1 },
      { "monster": "Astropod", "eggs": 1 },
      { "monster": "Pixolotl", "eggs": 1 },
      { "monster": "Bona-Petite", "eggs": 1 },
      { "monster": "Maulch", "eggs": 1 },
      { "monster": "Fleechwurm", "eggs": 1 }
    ]
  },
  {
    "n": "Monculus",
    "island": "Wublin Island",
    "limit": "10 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Clamble", "eggs": 1 },
      { "monster": "PomPom", "eggs": 1 },
      { "monster": "Thumpies", "eggs": 1 },
      { "monster": "Reedling", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 1 }
    ]
  },
  {
    "n": "Rare Brump",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Furcorn", "eggs": 3 },
      { "monster": "Rare Fwog", "eggs": 1 }
    ]
  },
  {
    "n": "Rare Zynth",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Pango", "eggs": 1 },
      { "monster": "Rare Oaktopus", "eggs": 1 },
      { "monster": "Rare Drumpler", "eggs": 1 },
      { "monster": "Rare Maw", "eggs": 1 },
      { "monster": "Rare Congle", "eggs": 1 },
      { "monster": "Rare T-Rox", "eggs": 1 }
    ]
  },
  {
    "n": "Rare Poewk",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Reedling", "eggs": 1 },
      { "monster": "Rare Scups", "eggs": 1 },
      { "monster": "Rare PomPom", "eggs": 1 },
      { "monster": "Rare Clamble", "eggs": 1 },
      { "monster": "Rare Dandidoo", "eggs": 1 },
      { "monster": "Rare Pango", "eggs": 1 },
      { "monster": "Rare Shrubb", "eggs": 1 },
      { "monster": "Rare Oaktopus", "eggs": 1 }
    ]
  },
  {
    "n": "Rare Thwok",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Entbrat", "eggs": 1 },
      { "monster": "Rare Deedge", "eggs": 1 },
      { "monster": "Rare Riff", "eggs": 1 },
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Quarrister", "eggs": 1 },
      { "monster": "Rare Spunge", "eggs": 2 },
      { "monster": "Rare PomPom", "eggs": 2 },
      { "monster": "Rare Bowgart", "eggs": 2 },
      { "monster": "Rare Quibble", "eggs": 2 },
      { "monster": "Rare Furcorn", "eggs": 2 }
    ]
  },
  {
    "n": "Rare Dwumrohl",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Entbrat", "eggs": 1 },
      { "monster": "Rare Deedge", "eggs": 1 },
      { "monster": "Rare Riff", "eggs": 1 },
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Quarrister", "eggs": 1 },
      { "monster": "Rare Reedling", "eggs": 2 },
      { "monster": "Rare Scups", "eggs": 1 },
      { "monster": "Rare Thumpies", "eggs": 1 },
      { "monster": "Rare PomPom", "eggs": 2 },
      { "monster": "Rare Congle", "eggs": 2 },
      { "monster": "Rare Pummel", "eggs": 2 },
      { "monster": "Rare Bowgart", "eggs": 2 },
      { "monster": "Rare Tweedle", "eggs": 2 },
      { "monster": "Rare Potbelly", "eggs": 2 },
      { "monster": "Rare Noggin", "eggs": 3 },
      { "monster": "Rare Toe Jammer", "eggs": 3 },
      { "monster": "Rare Mammott", "eggs": 3 }
    ]
  },
  {
    "n": "Rare Zuuker",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Entbrat", "eggs": 1 },
      { "monster": "Rare Deedge", "eggs": 1 },
      { "monster": "Rare Bowgart", "eggs": 2 },
      { "monster": "Rare T-Rox", "eggs": 3 },
      { "monster": "Rare Oaktopus", "eggs": 3 },
      { "monster": "Rare Furcorn", "eggs": 3 },
      { "monster": "Rare Fwog", "eggs": 2 }
    ]
  },
  {
    "n": "Rare Screemu",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Spunge", "eggs": 3 },
      { "monster": "Rare Quibble", "eggs": 3 },
      { "monster": "Rare Shrubb", "eggs": 3 }
    ]
  },
  {
    "n": "Rare Tympa",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 3 },
      { "monster": "Rare T-Rox", "eggs": 4 },
      { "monster": "Rare Pummel", "eggs": 4 },
      { "monster": "Rare Clamble", "eggs": 4 },
      { "monster": "Rare Drumpler", "eggs": 8 }
    ]
  },
  {
    "n": "Rare Dermit",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Entbrat", "eggs": 1 },
      { "monster": "Rare Quarrister", "eggs": 1 },
      { "monster": "Rare Scups", "eggs": 2 },
      { "monster": "Rare Thumpies", "eggs": 2 },
      { "monster": "Rare Fwog", "eggs": 4 }
    ]
  },
  {
    "n": "Rare Gheegur",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Riff", "eggs": 3 },
      { "monster": "Rare Reedling", "eggs": 3 },
      { "monster": "Rare Scups", "eggs": 2 },
      { "monster": "Rare PomPom", "eggs": 2 },
      { "monster": "Rare Cybop", "eggs": 3 }
    ]
  },
  {
    "n": "Rare Whajje",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Deedge", "eggs": 3 },
      { "monster": "Rare Dandidoo", "eggs": 4 },
      { "monster": "Rare Cybop", "eggs": 4 },
      { "monster": "Rare Reedling", "eggs": 4 },
      { "monster": "Rare Tweedle", "eggs": 3 }
    ]
  },
  {
    "n": "Rare Creepuscule",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Deedge", "eggs": 2 },
      { "monster": "Rare Shellbeat", "eggs": 2 },
      { "monster": "Rare T-Rox", "eggs": 3 },
      { "monster": "Rare Pummel", "eggs": 3 },
      { "monster": "Rare Congle", "eggs": 3 },
      { "monster": "Rare Quibble", "eggs": 4 },
      { "monster": "Rare Noggin", "eggs": 4 }
    ]
  },
  {
    "n": "Rare Blipsqueak",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Deedge", "eggs": 2 },
      { "monster": "Rare PomPom", "eggs": 2 },
      { "monster": "Rare T-Rox", "eggs": 3 },
      { "monster": "Rare Cybop", "eggs": 3 },
      { "monster": "Rare Toe Jammer", "eggs": 2 }
    ]
  },
  {
    "n": "Rare Scargo",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Clamble", "eggs": 1 },
      { "monster": "Rare Pummel", "eggs": 1 },
      { "monster": "Rare Spunge", "eggs": 1 },
      { "monster": "Rare Shrubb", "eggs": 1 },
      { "monster": "Rare Dandidoo", "eggs": 1 }
    ]
  },
  {
    "n": "Rare Astropod",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 2 },
      { "monster": "Rare Deedge", "eggs": 2 },
      { "monster": "Rare Reedling", "eggs": 3 },
      { "monster": "Rare Scups", "eggs": 3 },
      { "monster": "Rare Spunge", "eggs": 3 },
      { "monster": "Rare Toe Jammer", "eggs": 4 }
    ]
  },
  {
    "n": "Rare Pixolotl",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Entbrat", "eggs": 3 },
      { "monster": "Rare Riff", "eggs": 3 },
      { "monster": "Rare Scups", "eggs": 4 },
      { "monster": "Rare Pummel", "eggs": 3 },
      { "monster": "Rare T-Rox", "eggs": 3 },
      { "monster": "Rare Cybop", "eggs": 4 },
      { "monster": "Rare Fwog", "eggs": 4 }
    ]
  },
  {
    "n": "Rare Bona-Petite",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Riff", "eggs": 2 },
      { "monster": "Rare Entbrat", "eggs": 2 },
      { "monster": "Rare PomPom", "eggs": 3 },
      { "monster": "Rare Bowgart", "eggs": 3 },
      { "monster": "Rare T-Rox", "eggs": 3 },
      { "monster": "Rare Fwog", "eggs": 4 },
      { "monster": "Rare Drumpler", "eggs": 4 },
      { "monster": "Rare Maw", "eggs": 4 },
      { "monster": "Rare Mammott", "eggs": 4 }
    ]
  },
  {
    "n": "Rare Maulch",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Entbrat", "eggs": 2 },
      { "monster": "Rare Quarrister", "eggs": 2 },
      { "monster": "Rare Spunge", "eggs": 3 },
      { "monster": "Rare Pummel", "eggs": 3 },
      { "monster": "Rare Clamble", "eggs": 2 },
      { "monster": "Rare Furcorn", "eggs": 3 },
      { "monster": "Rare Noggin", "eggs": 3 }
    ]
  },
  {
    "n": "Rare Fleechwurm",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Quarrister", "eggs": 1 },
      { "monster": "Rare Reedling", "eggs": 1 },
      { "monster": "Rare Spunge", "eggs": 1 },
      { "monster": "Rare Pummel", "eggs": 2 },
      { "monster": "Rare Dandidoo", "eggs": 2 },
      { "monster": "Rare Furcorn", "eggs": 2 }
    ]
  },
  {
    "n": "Rare Wubbox",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Any 10 of the 19 Rare Wublins", "eggs": 1 }
    ]
  },
  {
    "n": "Rare Monculus",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Rare Shellbeat", "eggs": 1 },
      { "monster": "Rare Quarrister", "eggs": 1 },
      { "monster": "Rare Deedge", "eggs": 1 },
      { "monster": "Rare Riff", "eggs": 1 },
      { "monster": "Rare Entbrat", "eggs": 1 },
      { "monster": "Rare Clamble", "eggs": 1 },
      { "monster": "Rare PomPom", "eggs": 1 },
      { "monster": "Rare Thumpies", "eggs": 1 },
      { "monster": "Rare Reedling", "eggs": 1 },
      { "monster": "Rare T-Rox", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Brump",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Furcorn", "eggs": 1 },
      { "monster": "Epic Fwog", "eggs": 1 },
      { "monster": "Epic Stogg", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Zynth",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Pango", "eggs": 1 },
      { "monster": "Epic Oaktopus", "eggs": 1 },
      { "monster": "Epic Drumpler", "eggs": 1 },
      { "monster": "Epic Maw", "eggs": 1 },
      { "monster": "Epic Congle", "eggs": 1 },
      { "monster": "Epic T-Rox", "eggs": 1 },
      { "monster": "Epic Phangler", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Poewk",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Shellbeat", "eggs": 1 },
      { "monster": "Epic Reedling", "eggs": 1 },
      { "monster": "Epic Scups", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic Clamble", "eggs": 1 },
      { "monster": "Epic Dandidoo", "eggs": 1 },
      { "monster": "Epic Pango", "eggs": 1 },
      { "monster": "Epic Shrubb", "eggs": 1 },
      { "monster": "Epic Oaktopus", "eggs": 1 },
      { "monster": "Epic Glowl", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Thwok",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Entbrat", "eggs": 1 },
      { "monster": "Epic Deedge", "eggs": 1 },
      { "monster": "Epic Riff", "eggs": 1 },
      { "monster": "Epic Shellbeat", "eggs": 1 },
      { "monster": "Epic Quarrister", "eggs": 1 },
      { "monster": "Epic Spunge", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic Bowgart", "eggs": 1 },
      { "monster": "Epic Quibble", "eggs": 1 },
      { "monster": "Epic Furcorn", "eggs": 1 },
      { "monster": "Epic Boskus", "eggs": 1 },
      { "monster": "Epic Whaddle", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Dwumrohl",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Entbrat", "eggs": 1 },
      { "monster": "Epic Deedge", "eggs": 1 },
      { "monster": "Epic Riff", "eggs": 1 },
      { "monster": "Epic Shellbeat", "eggs": 1 },
      { "monster": "Epic Quarrister", "eggs": 1 },
      { "monster": "Epic Reedling", "eggs": 1 },
      { "monster": "Epic Scups", "eggs": 1 },
      { "monster": "Epic Thumpies", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic Congle", "eggs": 1 },
      { "monster": "Epic Pummel", "eggs": 1 },
      { "monster": "Epic Bowgart", "eggs": 1 },
      { "monster": "Epic Tweedle", "eggs": 1 },
      { "monster": "Epic Potbelly", "eggs": 1 },
      { "monster": "Epic Noggin", "eggs": 1 },
      { "monster": "Epic Toe Jammer", "eggs": 1 },
      { "monster": "Epic Mammott", "eggs": 1 },
      { "monster": "Epic Repatillo", "eggs": 1 },
      { "monster": "Epic Rootitoot", "eggs": 1 },
      { "monster": "Epic Tring", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Zuuker",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Entbrat", "eggs": 1 },
      { "monster": "Epic Deedge", "eggs": 1 },
      { "monster": "Epic Bowgart", "eggs": 1 },
      { "monster": "Epic T-Rox", "eggs": 1 },
      { "monster": "Epic Oaktopus", "eggs": 1 },
      { "monster": "Epic Furcorn", "eggs": 1 },
      { "monster": "Epic Fwog", "eggs": 1 },
      { "monster": "Epic Floogull", "eggs": 1 },
      { "monster": "Epic Krillby", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Tympa",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Drumpler", "eggs": 4 },
      { "monster": "Epic Pummel", "eggs": 2 },
      { "monster": "Epic Clamble", "eggs": 2 },
      { "monster": "Epic T-Rox", "eggs": 2 },
      { "monster": "Epic Shellbeat", "eggs": 1 },
      { "monster": "Epic Ziggurab", "eggs": 1 },
      { "monster": "Epic Repatillo", "eggs": 1 },
      { "monster": "Epic PongPing", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Dermit",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Fwog", "eggs": 2 },
      { "monster": "Epic Thumpies", "eggs": 1 },
      { "monster": "Epic Scups", "eggs": 1 },
      { "monster": "Epic Quarrister", "eggs": 1 },
      { "monster": "Epic Entbrat", "eggs": 1 },
      { "monster": "Epic Sneyser", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Gheegur",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Cybop", "eggs": 1 },
      { "monster": "Epic Reedling", "eggs": 1 },
      { "monster": "Epic Scups", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic Riff", "eggs": 1 },
      { "monster": "Epic Sooza", "eggs": 1 },
      { "monster": "Epic Thrumble", "eggs": 1 },
      { "monster": "Epic Sneyser", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Blipsqueak",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Toe Jammer", "eggs": 1 },
      { "monster": "Epic Cybop", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic T-Rox", "eggs": 1 },
      { "monster": "Epic Deedge", "eggs": 1 },
      { "monster": "Epic Glowl", "eggs": 1 },
      { "monster": "Epic Wynq", "eggs": 1 }
    ]
  },
   {
    "n": "Epic Bona-Petite",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Mammott", "eggs": 1 },
      { "monster": "Epic Fwog", "eggs": 1 },
      { "monster": "Epic Drumpler", "eggs": 1 },
      { "monster": "Epic Maw", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic Bowgart", "eggs": 1 },
      { "monster": "Epic T-Rox", "eggs": 1 },
      { "monster": "Epic Riff", "eggs": 1 },
      { "monster": "Epic Entbrat", "eggs": 1 },
      { "monster": "Epic Sooza", "eggs": 1 },
      { "monster": "Epic Woolabee", "eggs": 1 },
      { "monster": "Epic Bisonorus", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Fleechwurm",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Dandidoo", "eggs": 1 },
      { "monster": "Epic Furcorn", "eggs": 1 },
      { "monster": "Epic Reedling", "eggs": 1 },
      { "monster": "Epic Spunge", "eggs": 1 },
      { "monster": "Epic Pummel", "eggs": 1 },
      { "monster": "Epic Shellbeat", "eggs": 1 },
      { "monster": "Epic Quarrister", "eggs": 1 },
      { "monster": "Epic Phangler", "eggs": 1 }
    ]
  },
  {
    "n": "Epic Monculus",
    "island": "Wublin Island",
    "limit": "No Time Limit",
    "requirements": [
      { "monster": "Epic Shellbeat", "eggs": 1 },
      { "monster": "Epic Quarrister", "eggs": 1 },
      { "monster": "Epic Deedge", "eggs": 1 },
      { "monster": "Epic Riff", "eggs": 1 },
      { "monster": "Epic Entbrat", "eggs": 1 },
      { "monster": "Epic Clamble", "eggs": 1 },
      { "monster": "Epic PomPom", "eggs": 1 },
      { "monster": "Epic Thumpies", "eggs": 1 },
      { "monster": "Epic Reedling", "eggs": 1 },
      { "monster": "Epic T-Rox", "eggs": 1 },
      { "monster": "Epic Kayna", "eggs": 1 }
    ]
  },
  {
    "n": "Hornacle (Young)",
    "island": "Celestial Island",
    "limit": "12 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 3 },
      { "monster": "Pummel", "eggs": 5 },
      { "monster": "Bowgart", "eggs": 4 },
      { "monster": "Scups", "eggs": 4 },
      { "monster": "Congle", "eggs": 3 },
      { "monster": "Spunge", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 12 },
      { "monster": "Quibble", "eggs": 8 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Fwog", "eggs": 15 },
      { "monster": "Maw", "eggs": 9 },
      { "monster": "Toe Jammer", "eggs": 50 }
    ]
  },
  {
    "n": "Adult Hornacle",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Quibble", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Riff", "eggs": 2 },
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Carillong", "eggs": 1 },
      { "monster": "Rare Flex (Water)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Water)(3)", "eggs": 1 },
      { "monster": "Rare Flex (Water)(4)", "eggs": 1 }
    ]
  },
  {
    "n": "Furnoss (Young)",
    "island": "Celestial Island",
    "limit": "25 Days",
    "requirements": [
      { "monster": "Tring", "eggs": 2 },
      { "monster": "Floogull", "eggs": 4 },
      { "monster": "Barrb", "eggs": 3 },
      { "monster": "Repatillo", "eggs": 3 },
      { "monster": "Reedling", "eggs": 3 },
      { "monster": "Glowl", "eggs": 7 },
      { "monster": "Flowah", "eggs": 5 },
      { "monster": "Stogg", "eggs": 5 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Cybop", "eggs": 2 },
      { "monster": "Dandidoo", "eggs": 2 },
      { "monster": "Kayna", "eggs": 15 },
      { "monster": "Tweedle", "eggs": 5 },
      { "monster": "Potbelly", "eggs": 10 },
      { "monster": "Noggin", "eggs": 25 }
    ]
  },
  {
    "n": "Adult Furnoss",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Kayna", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Flowah", "eggs": 2 },
      { "monster": "Stogg", "eggs": 2 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Floogull", "eggs": 1 },
      { "monster": "Barrb", "eggs": 1 },
      { "monster": "Repatillo", "eggs": 1 },
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Fluoress", "eggs": 5 },
      { "monster": "Gob", "eggs": 3 },
      { "monster": "Bulbo", "eggs": 3 },
      { "monster": "Pluckbill", "eggs": 3 },
      { "monster": "Spytrap", "eggs": 2 },
      { "monster": "TooToo", "eggs": 2 },
      { "monster": "Fiddlement", "eggs": 2 },
      { "monster": "Blow't", "eggs": 1 },
      { "monster": "Schmoochle", "eggs": 1 },
      { "monster": "Rare Flex (Light)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Fire)(3)", "eggs": 1 }
    ]
  },
  {
    "n": "Glaishur (Young)",
    "island": "Celestial Island",
    "limit": "10 Days",
    "requirements": [
      { "monster": "Deedge", "eggs": 4 },
      { "monster": "Bowgart", "eggs": 3 },
      { "monster": "PomPom", "eggs": 3 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Clamble", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Pango", "eggs": 8 },
      { "monster": "Furcorn", "eggs": 10 },
      { "monster": "Drumpler", "eggs": 7 },
      { "monster": "Maw", "eggs": 5 },
      { "monster": "Mammott", "eggs": 40 }
    ]
  },
  {
    "n": "Adult Glaishur",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Riff", "eggs": 2 },
      { "monster": "Quarrister", "eggs": 2 },
      { "monster": "Ffidyll", "eggs": 1 },
      { "monster": "Rare Flex (Cold)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Cold)(3)", "eggs": 1 },
      { "monster": "Rare Flex (Cold)(4)", "eggs": 1 }
    ]
  },
  {
    "n": "Blasoom (Young)",
    "island": "Celestial Island",
    "limit": "14 Days",
    "requirements": [
      { "monster": "Entbrat", "eggs": 3 },
      { "monster": "Clamble", "eggs": 5 },
      { "monster": "Reedling", "eggs": 4 },
      { "monster": "Thumpies", "eggs": 4 },
      { "monster": "Bowgart", "eggs": 3 },
      { "monster": "Pummel", "eggs": 3 },
      { "monster": "Spunge", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 9 },
      { "monster": "Dandidoo", "eggs": 8 },
      { "monster": "Oaktopus", "eggs": 5 },
      { "monster": "Shrubb", "eggs": 5 },
      { "monster": "Potbelly", "eggs": 20 }
    ]
  },
  {
    "n": "Adult Blasoom",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Quarrister", "eggs": 2 },
      { "monster": "Blabbit", "eggs": 1 },
      { "monster": "Rare Flex (Plant)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Plant)(3)", "eggs": 1 },
      { "monster": "Rare Flex (Plant)(4)", "eggs": 1 }
    ]
  },
  {
    "n": "Syncopite (Young)",
    "island": "Celestial Island",
    "limit": "11 Days",
    "requirements": [
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Pummel", "eggs": 4 },
      { "monster": "Spunge", "eggs": 6 },
      { "monster": "Reedling", "eggs": 4 },
      { "monster": "Scups", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 6 },
      { "monster": "Quibble", "eggs": 6 },
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 5 },
      { "monster": "Shrubb", "eggs": 2 },
      { "monster": "Fwog", "eggs": 10 },
      { "monster": "Tweedle", "eggs": 6 },
      { "monster": "Potbelly", "eggs": 12 },
      { "monster": "Toe Jammer", "eggs": 30 },
      { "monster": "Noggin", "eggs": 75 }
    ]
  },
  {
    "n": "Adult Syncopite",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Quibble", "eggs": 3 },
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Clackula", "eggs": 5 },
      { "monster": "Peckidna", "eggs": 3 },
      { "monster": "Denchuhs", "eggs": 3 },
      { "monster": "Hawlo", "eggs": 3 },
      { "monster": "Withur", "eggs": 2 },
      { "monster": "Uuduk", "eggs": 2 },
      { "monster": "Banjaw", "eggs": 2 },
      { "monster": "Plinkajou", "eggs": 1 },
      { "monster": "Spurrit", "eggs": 1 },
      { "monster": "Rare Flex (Bone)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Fire)(3)", "eggs": 1 }
    ]
  },
  {
    "n": "Vhamp (Young)",
    "island": "Celestial Island",
    "limit": "8 Days",
    "requirements": [
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Scups", "eggs": 3 },
      { "monster": "Congle", "eggs": 3 },
      { "monster": "PomPom", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 4 },
      { "monster": "Cybop", "eggs": 15 },
      { "monster": "Pango", "eggs": 5 },
      { "monster": "Quibble", "eggs": 5 },
      { "monster": "Tweedle", "eggs": 9 },
      { "monster": "Drumpler", "eggs": 12 },
      { "monster": "Maw", "eggs": 7 },
      { "monster": "Fwog", "eggs": 5 },
      { "monster": "Mammott", "eggs": 35 },
      { "monster": "Toe Jammer", "eggs": 50 },
      { "monster": "Noggin", "eggs": 40 }
    ]
  },
  {
    "n": "Adult Vhamp",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Quibble", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Sneyser", "eggs": 1 },
      { "monster": "Monculus", "eggs": 1 },
      { "monster": "Mythical Flex", "eggs": 3 },
      { "monster": "Rare Flex (Fire)(4)", "eggs": 2 }
    ]
  },
  {
    "n": "Galvana (Young)",
    "island": "Celestial Island",
    "limit": "28 Days",
    "requirements": [
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Floogull", "eggs": 2 },
      { "monster": "Barrb", "eggs": 2 },
      { "monster": "Repatillo", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 3 },
      { "monster": "Spunge", "eggs": 3 },
      { "monster": "PomPom", "eggs": 3 },
      { "monster": "Reedling", "eggs": 3 },
      { "monster": "Scups", "eggs": 3 },
      { "monster": "Pummel", "eggs": 3 },
      { "monster": "Clamble", "eggs": 3 },
      { "monster": "Bowgart", "eggs": 3 },
      { "monster": "Congle", "eggs": 3 },
      { "monster": "T-Rox", "eggs": 3 },
      { "monster": "Glowl", "eggs": 3 },
      { "monster": "Flowah", "eggs": 3 },
      { "monster": "Stogg", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 4 },
      { "monster": "Oaktopus", "eggs": 4 },
      { "monster": "Pango", "eggs": 4 },
      { "monster": "Quibble", "eggs": 4 },
      { "monster": "Cybop", "eggs": 4 },
      { "monster": "Dandidoo", "eggs": 4 },
      { "monster": "Furcorn", "eggs": 4 },
      { "monster": "Kayna", "eggs": 6 },
      { "monster": "Tweedle", "eggs": 10 },
      { "monster": "Potbelly", "eggs": 10 },
      { "monster": "Maw", "eggs": 5 },
      { "monster": "Fwog", "eggs": 5 },
      { "monster": "Drumpler", "eggs": 5 },
      { "monster": "Mammott", "eggs": 10 },
      { "monster": "Toe Jammer", "eggs": 10 },
      { "monster": "Noggin", "eggs": 10 }
    ]
  },
  {
    "n": "Adult Galvana",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Barrb", "eggs": 2 },
      { "monster": "Floogull", "eggs": 2 },
      { "monster": "Repatillo", "eggs": 2 },
      { "monster": "Whaddle", "eggs": 2 },
      { "monster": "Woolabee", "eggs": 2 },
      { "monster": "Wynq", "eggs": 2 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Riff", "eggs": 1 },
      { "monster": "Shellbeat", "eggs": 1 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Tring", "eggs": 1 },
      { "monster": "Sneyser", "eggs": 1 },
      { "monster": "Hoola", "eggs": 1 },
      { "monster": "Rare Flex (Air)(4)", "eggs": 1 },
      { "monster": "Rare Flex (Plant)(4)", "eggs": 1 },
      { "monster": "Rare Flex (Earth)(4)", "eggs": 1 },
      { "monster": "Rare Flex (Water)(4)", "eggs": 1 },
      { "monster": "Rare Flex (Cold)(4)", "eggs": 1 }
    ]
  },
  {
    "n": "Scaratar (Young)",
    "island": "Celestial Island",
    "limit": "9 Days",
    "requirements": [
      { "monster": "Quarrister", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 4 },
      { "monster": "Clamble", "eggs": 3 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "PomPom", "eggs": 1 },
      { "monster": "Dandidoo", "eggs": 5 },
      { "monster": "Furcorn", "eggs": 7 },
      { "monster": "Shrubb", "eggs": 6 },
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Drumpler", "eggs": 4 },
      { "monster": "Tweedle", "eggs": 6 },
      { "monster": "Potbelly", "eggs": 16 },
      { "monster": "Mammott", "eggs": 25 },
      { "monster": "Noggin", "eggs": 36 }
    ]
  },
  {
    "n": "Adult Scaratar",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "Floot Fly", "eggs": 5 },
      { "monster": "HippityHop", "eggs": 3 },
      { "monster": "Squot", "eggs": 3 },
      { "monster": "Wimmzies", "eggs": 3 },
      { "monster": "Cantorell", "eggs": 2 },
      { "monster": "Bridg-it", "eggs": 2 },
      { "monster": "Clavi Gnat", "eggs": 2 },
      { "monster": "Pladdie", "eggs": 1 },
      { "monster": "Boo'qwurm", "eggs": 1 },
      { "monster": "Rare Flex (Faerie)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Fire)(3)", "eggs": 1 }
    ]
  },
  {
    "n": "Loodvigg (Young)",
    "island": "Celestial Island",
    "limit": "8 Days",
    "requirements": [
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 5 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Spunge", "eggs": 1 },
      { "monster": "Oaktopus", "eggs": 8 },
      { "monster": "Furcorn", "eggs": 6 },
      { "monster": "Dandidoo", "eggs": 5 },
      { "monster": "Quibble", "eggs": 4 },
      { "monster": "Pango", "eggs": 2 },
      { "monster": "Tweedle", "eggs": 8 },
      { "monster": "Potbelly", "eggs": 6 },
      { "monster": "Maw", "eggs": 15 },
      { "monster": "Mammott", "eggs": 25 },
      { "monster": "Toe Jammer", "eggs": 30 }
    ]
  },
  {
    "n": "Adult Loodvigg",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Quibble", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "Deedge", "eggs": 1 },
      { "monster": "Gloptic", "eggs": 1 },
      { "monster": "Pladdie", "eggs": 1 },
      { "monster": "Plinkajou", "eggs": 1 },
      { "monster": "Blow't", "eggs": 1 },
      { "monster": "Viveine", "eggs": 1 },
      { "monster": "Clavavera", "eggs": 1 },
      { "monster": "Whiz-bang", "eggs": 1 },
      { "monster": "Rare Flex (Psychic)(2)", "eggs": 1 },
      { "monster": "Rare Flex (Bone)(2)", "eggs": 1 },
      { "monster": "Rare Flex (Light)(2)", "eggs": 1 },
      { "monster": "Rare Flex (Faerie)(2)", "eggs": 1 }
    ]
  },
  {
    "n": "Torrt (Young)",
    "island": "Celestial Island",
    "limit": "7 Days",
    "requirements": [
      { "monster": "Quarrister", "eggs": 1 },
      { "monster": "PomPom", "eggs": 3 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Scups", "eggs": 1 },
      { "monster": "T-Rox", "eggs": 6 },
      { "monster": "Shrubb", "eggs": 4 },
      { "monster": "Cybop", "eggs": 6 },
      { "monster": "Drumpler", "eggs": 6 },
      { "monster": "Fwog", "eggs": 4 },
      { "monster": "Noggin", "eggs": 50 }
    ]
  },
  {
    "n": "Adult Torrt",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Quarrister", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 2 },
      { "monster": "Riff", "eggs": 2 },
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Punkleton", "eggs": 1 },
      { "monster": "Rare Flex (Earth)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Earth)(3)", "eggs": 1 },
      { "monster": "Rare Flex (Earth)(4)", "eggs": 1 }
    ]
  },
  {
    "n": "Plixie (Young)",
    "island": "Celestial Island",
    "limit": "13 Days",
    "requirements": [
      { "monster": "Entbrat", "eggs": 5 },
      { "monster": "Bowgart", "eggs": 3 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 4 },
      { "monster": "Oaktopus", "eggs": 15 },
      { "monster": "Shrubb", "eggs": 8 },
      { "monster": "Furcorn", "eggs": 7 },
      { "monster": "Potbelly", "eggs": 16 },
      { "monster": "Maw", "eggs": 35 },
      { "monster": "Fwog", "eggs": 20 },
      { "monster": "Drumpler", "eggs": 12 },
      { "monster": "Mammott", "eggs": 25 },
      { "monster": "Toe Jammer", "eggs": 25 },
      { "monster": "Noggin", "eggs": 70 }
    ]
  },
  {
    "n": "Adult Plixie",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Shrubb", "eggs": 3 },
      { "monster": "Oaktopus", "eggs": 3 },
      { "monster": "Furcorn", "eggs": 3 },
      { "monster": "Fwog", "eggs": 3 },
      { "monster": "Drumpler", "eggs": 3 },
      { "monster": "Maw", "eggs": 3 },
      { "monster": "Pummel", "eggs": 2 },
      { "monster": "Clamble", "eggs": 2 },
      { "monster": "Bowgart", "eggs": 2 },
      { "monster": "T-Rox", "eggs": 2 },
      { "monster": "Entbrat", "eggs": 1 },
      { "monster": "Theremind", "eggs": 5 },
      { "monster": "Bonkers", "eggs": 3 },
      { "monster": "Poppette", "eggs": 3 },
      { "monster": "Yuggler", "eggs": 3 },
      { "monster": "Tapricorn", "eggs": 2 },
      { "monster": "Rooba", "eggs": 2 },
      { "monster": "Periscorp", "eggs": 2 },
      { "monster": "Gloptic", "eggs": 1 },
      { "monster": "Gobbleygourd", "eggs": 1 },
      { "monster": "Rare Flex (Psychic)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Fire)(3)", "eggs": 1 }
    ]
  },
  {
    "n": "Attmoz (Young)",
    "island": "Celestial Island",
    "limit": "12 Days",
    "requirements": [
      { "monster": "Riff", "eggs": 3 },
      { "monster": "PomPom", "eggs": 3 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Reedling", "eggs": 1 },
      { "monster": "Cybop", "eggs": 8 },
      { "monster": "Pango", "eggs": 6 },
      { "monster": "Quibble", "eggs": 6 },
      { "monster": "Dandidoo", "eggs": 5 },
      { "monster": "Tweedle", "eggs": 25 }
    ]
  },
  {
    "n": "Adult Attmoz",
    "island": "Celestial Island",
    "limit": "End of Month",
    "requirements": [
      { "monster": "Cybop", "eggs": 3 },
      { "monster": "Dandidoo", "eggs": 3 },
      { "monster": "Pango", "eggs": 3 },
      { "monster": "Quibble", "eggs": 3 },
      { "monster": "Reedling", "eggs": 2 },
      { "monster": "Scups", "eggs": 2 },
      { "monster": "PomPom", "eggs": 2 },
      { "monster": "Congle", "eggs": 2 },
      { "monster": "Thumpies", "eggs": 2 },
      { "monster": "Spunge", "eggs": 2 },
      { "monster": "Deedge", "eggs": 2 },
      { "monster": "Riff", "eggs": 2 },
      { "monster": "Shellbeat", "eggs": 2 },
      { "monster": "Quarrister", "eggs": 2 },
      { "monster": "Yool", "eggs": 1 },
      { "monster": "Rare Flex (Air)(2)", "eggs": 2 },
      { "monster": "Rare Flex (Air)(3)", "eggs": 1 },
      { "monster": "Rare Flex (Air)(4)", "eggs": 1 }
    ]
  }
  ],

  // ── Wubbox requirements ─────────────────────────────────────────────────────
  "wubbox": {
  "Plant Island": {
    "common": ["Potbelly", "Noggin", "Toe Jammer", "Mammott", "Shrubb", "Oaktopus", "Furcorn", "Fwog", "Drumpler", "Maw", "Pummel", "Clamble", "Bowgart", "T-Rox", "Entbrat"],
    "rare": ["Rare Potbelly", "Rare Noggin", "Rare Toe Jammer", "Rare Mammott", "Rare Shrubb", "Rare Oaktopus", "Rare Furcorn", "Rare Fwog", "Rare Drumpler", "Rare Maw", "Rare Pummel", "Rare Clamble", "Rare Bowgart", "Rare T-Rox", "Rare Entbrat"],
    "epic": ["Epic Potbelly", "Epic Noggin", "Epic Toe Jammer", "Epic Mammott", "Epic Shrubb", "Epic Oaktopus", "Epic Furcorn", "Epic Fwog", "Epic Drumpler", "Epic Maw", "Epic Pummel", "Epic Clamble", "Epic Bowgart", "Epic T-Rox", "Epic Entbrat"]
  },
  "Cold Island": {
    "common": ["Tweedle", "Potbelly", "Toe Jammer", "Mammott", "Dandidoo", "Quibble", "Pango", "Oaktopus", "Furcorn", "Maw", "Spunge", "Thumpies", "Congle", "Bowgart", "Deedge"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Toe Jammer", "Rare Mammott", "Rare Dandidoo", "Rare Quibble", "Rare Pango", "Rare Oaktopus", "Rare Furcorn", "Rare Maw", "Rare Spunge", "Rare Thumpies", "Rare Congle", "Rare Bowgart", "Rare Deedge"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Toe Jammer", "Epic Mammott", "Epic Dandidoo", "Epic Quibble", "Epic Pango", "Epic Oaktopus", "Epic Furcorn", "Epic Maw", "Epic Spunge", "Epic Thumpies", "Epic Congle", "Epic Bowgart", "Epic Deedge"]
  },
  "Air Island": {
    "common": ["Tweedle", "Noggin", "Toe Jammer", "Mammott", "Cybop", "Quibble", "Pango", "Fwog", "Drumpler", "Maw", "Scups", "PomPom", "Congle", "T-Rox", "Riff"],
    "rare": ["Rare Tweedle", "Rare Noggin", "Rare Toe Jammer", "Rare Mammott", "Rare Cybop", "Rare Quibble", "Rare Pango", "Rare Fwog", "Rare Drumpler", "Rare Maw", "Rare Scups", "Rare PomPom", "Rare Congle", "Rare T-Rox", "Rare Riff"],
    "epic": ["Epic Tweedle", "Epic Noggin", "Epic Toe Jammer", "Epic Mammott", "Epic Cybop", "Epic Quibble", "Epic Pango", "Epic Fwog", "Epic Drumpler", "Epic Maw", "Epic Scups", "Epic PomPom", "Epic Congle", "Epic T-Rox", "Epic Riff"]
  },
  "Water Island": {
    "common": ["Tweedle", "Potbelly", "Noggin", "Toe Jammer", "Dandidoo", "Cybop", "Quibble", "Shrubb", "Oaktopus", "Fwog", "Reedling", "Spunge", "Scups", "Pummel", "Shellbeat"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Noggin", "Rare Toe Jammer", "Rare Dandidoo", "Rare Cybop", "Rare Quibble", "Rare Shrubb", "Rare Oaktopus", "Rare Fwog", "Rare Reedling", "Rare Spunge", "Rare Scups", "Rare Pummel", "Rare Shellbeat"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Noggin", "Epic Toe Jammer", "Epic Dandidoo", "Epic Cybop", "Epic Quibble", "Epic Shrubb", "Epic Oaktopus", "Epic Fwog", "Epic Reedling", "Epic Spunge", "Epic Scups", "Epic Pummel", "Epic Shellbeat"]
  },
  "Earth Island": {
    "common": ["Tweedle", "Potbelly", "Noggin", "Mammott", "Dandidoo", "Cybop", "Pango", "Shrubb", "Furcorn", "Drumpler", "Reedling", "Thumpies", "PomPom", "Clamble", "Quarrister"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Noggin", "Rare Mammott", "Rare Dandidoo", "Rare Cybop", "Rare Pango", "Rare Shrubb", "Rare Furcorn", "Rare Drumpler", "Rare Reedling", "Rare Thumpies", "Rare PomPom", "Rare Clamble", "Rare Quarrister"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Noggin", "Epic Mammott", "Epic Dandidoo", "Epic Cybop", "Epic Pango", "Epic Shrubb", "Epic Furcorn", "Epic Drumpler", "Epic Reedling", "Epic Thumpies", "Epic PomPom", "Epic Clamble", "Epic Quarrister"]
  },
  "Fire Haven": {
    "common": ["Tweedle", "Potbelly", "Noggin", "Kayna", "Dandidoo", "Cybop", "Glowl", "Shrubb", "Flowah", "Stogg", "Reedling", "Barrb", "Floogull", "Repatillo", "Tring"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Noggin", "Rare Kayna", "Rare Dandidoo", "Rare Cybop", "Rare Glowl", "Rare Shrubb", "Rare Flowah", "Rare Stogg", "Rare Reedling", "Rare Barrb", "Rare Floogull", "Rare Repatillo", "Rare Tring"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Noggin", "Epic Kayna", "Epic Dandidoo", "Epic Cybop", "Epic Glowl", "Epic Shrubb", "Epic Flowah", "Epic Stogg", "Epic Reedling", "Epic Barrb", "Epic Floogull", "Epic Repatillo", "Epic Tring"]
  },
  "Fire Oasis": {
    "common": ["Tweedle", "Toe Jammer", "Mammott", "Kayna", "Quibble", "Pango", "Glowl", "Maw", "Phangler", "Boskus", "Congle", "Whaddle", "Woolabee", "Wynq", "Sneyser"],
    "rare": ["Rare Tweedle", "Rare Toe Jammer", "Rare Mammott", "Rare Kayna", "Rare Quibble", "Rare Pango", "Rare Glowl", "Rare Maw", "Rare Phangler", "Rare Boskus", "Rare Congle", "Rare Whaddle", "Rare Woolabee", "Rare Wynq", "Rare Sneyser"],
    "epic": ["Epic Tweedle", "Epic Toe Jammer", "Epic Mammott", "Epic Kayna", "Epic Quibble", "Epic Pango", "Epic Glowl", "Epic Maw", "Epic Phangler", "Epic Boskus", "Epic Congle", "Epic Whaddle", "Epic Woolabee", "Epic Wynq", "Epic Sneyser"]
  },
  "Ethereal Island": {
    "common": ["Ghazt", "Grumpyre", "Reebro", "Jeeode", "Humbug", "Whisp", "Nebulob", "Sox", "Jellbilly", "Arackulele", "Boodoo", "Kazilleon", "Bellowfish", "Dragong", "Fung Pray"],
    "rare": ["Rare Ghazt", "Rare Grumpyre", "Rare Reebro", "Rare Jeeode", "Rare Humbug", "Rare Whisp", "Rare Nebulob", "Rare Sox", "Rare Jellbilly", "Rare Arackulele", "Rare Boodoo", "Rare Kazilleon", "Rare Bellowfish", "Rare Dragong", "Rare Fung Pray"],
    "epic": ["Epic Ghazt", "Epic Grumpyre", "Epic Reebro", "Epic Jeeode", "Epic Humbug", "Epic Whisp", "Epic Nebulob", "Epic Sox", "Epic Jellbilly", "Epic Arackulele", "Epic Boodoo", "Epic Kazilleon", "Epic Bellowfish", "Epic Dragong", "Epic Fung Pray"]
  },
  "Mirror Plant Island": {
    "common": ["Potbelly", "Noggin", "Toe Jammer", "Mammott", "Shrubb", "Oaktopus", "Furcorn", "Fwog", "Drumpler", "Maw", "Pummel", "Clamble", "Bowgart", "T-Rox", "Entbrat"],
    "rare": ["Rare Potbelly", "Rare Noggin", "Rare Toe Jammer", "Rare Mammott", "Rare Shrubb", "Rare Oaktopus", "Rare Furcorn", "Rare Fwog", "Rare Drumpler", "Rare Maw", "Rare Pummel", "Rare Clamble", "Rare Bowgart", "Rare T-Rox", "Rare Entbrat"],
    "epic": ["Epic Potbelly", "Epic Noggin", "Epic Toe Jammer", "Epic Mammott", "Epic Shrubb", "Epic Oaktopus", "Epic Furcorn", "Epic Fwog", "Epic Drumpler", "Epic Maw", "Epic Pummel", "Epic Clamble", "Epic Bowgart", "Epic T-Rox", "Epic Entbrat"]
  },
  "Mirror Cold Island": {
    "common": ["Tweedle", "Potbelly", "Toe Jammer", "Mammott", "Dandidoo", "Quibble", "Pango", "Oaktopus", "Furcorn", "Maw", "Spunge", "Thumpies", "Congle", "Bowgart", "Deedge"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Toe Jammer", "Rare Mammott", "Rare Dandidoo", "Rare Quibble", "Rare Pango", "Rare Oaktopus", "Rare Furcorn", "Rare Maw", "Rare Spunge", "Rare Thumpies", "Rare Congle", "Rare Bowgart", "Rare Deedge"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Toe Jammer", "Epic Mammott", "Epic Dandidoo", "Epic Quibble", "Epic Pango", "Epic Oaktopus", "Epic Furcorn", "Epic Maw", "Epic Spunge", "Epic Thumpies", "Epic Congle", "Epic Bowgart", "Epic Deedge"]
  },
  "Mirror Air Island": {
    "common": ["Tweedle", "Noggin", "Toe Jammer", "Mammott", "Cybop", "Quibble", "Pango", "Fwog", "Drumpler", "Maw", "Scups", "PomPom", "Congle", "T-Rox", "Riff"],
    "rare": ["Rare Tweedle", "Rare Noggin", "Rare Toe Jammer", "Rare Mammott", "Rare Cybop", "Rare Quibble", "Rare Pango", "Rare Fwog", "Rare Drumpler", "Rare Maw", "Rare Scups", "Rare PomPom", "Rare Congle", "Rare T-Rox", "Rare Riff"],
    "epic": ["Epic Tweedle", "Epic Noggin", "Epic Toe Jammer", "Epic Mammott", "Epic Cybop", "Epic Quibble", "Epic Pango", "Epic Fwog", "Epic Drumpler", "Epic Maw", "Epic Scups", "Epic PomPom", "Epic Congle", "Epic T-Rox", "Epic Riff"]
  },
  "Mirror Water Island": {
    "common": ["Tweedle", "Potbelly", "Noggin", "Toe Jammer", "Dandidoo", "Cybop", "Quibble", "Shrubb", "Oaktopus", "Fwog", "Reedling", "Spunge", "Scups", "Pummel", "Shellbeat"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Noggin", "Rare Toe Jammer", "Rare Dandidoo", "Rare Cybop", "Rare Quibble", "Rare Shrubb", "Rare Oaktopus", "Rare Fwog", "Rare Reedling", "Rare Spunge", "Rare Scups", "Rare Pummel", "Rare Shellbeat"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Noggin", "Epic Toe Jammer", "Epic Dandidoo", "Epic Cybop", "Epic Quibble", "Epic Shrubb", "Epic Oaktopus", "Epic Fwog", "Epic Reedling", "Epic Spunge", "Epic Scups", "Epic Pummel", "Epic Shellbeat"]
  },
  "Mirror Earth Island": {
    "common": ["Tweedle", "Potbelly", "Noggin", "Mammott", "Dandidoo", "Cybop", "Pango", "Shrubb", "Furcorn", "Drumpler", "Reedling", "Thumpies", "PomPom", "Clamble", "Quarrister"],
    "rare": ["Rare Tweedle", "Rare Potbelly", "Rare Noggin", "Rare Mammott", "Rare Dandidoo", "Rare Cybop", "Rare Pango", "Rare Shrubb", "Rare Furcorn", "Rare Drumpler", "Rare Reedling", "Rare Thumpies", "Rare PomPom", "Rare Clamble", "Rare Quarrister"],
    "epic": ["Epic Tweedle", "Epic Potbelly", "Epic Noggin", "Epic Mammott", "Epic Dandidoo", "Epic Cybop", "Epic Pango", "Epic Shrubb", "Epic Furcorn", "Epic Drumpler", "Epic Reedling", "Epic Thumpies", "Epic PomPom", "Epic Clamble", "Epic Quarrister"]
  }
  }

};
