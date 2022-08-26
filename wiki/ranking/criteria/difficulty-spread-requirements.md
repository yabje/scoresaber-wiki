# Difficulty Spread Requirements
*as part of the ScoreSaber Ranking Criteria*

A mapset must contain a reasonable difficulty progression starting from the highest  difficulty level submitted for rank and ending at or below the lowest difficulty level required for the song's length, following the rules outlined in Progression Requirements.
- Difficulty is measured in Swings per Second (SPS) with the Swings per Second Calculator. Place the calculator inside the map folder or a folder containing the zipped map files and run, or run the calculator on the command line with “--help” to see more options. The overall combined SPS is considered the SPS for the map.
  - If it does not print, it is likely because there are special characters in the info.dat. Workaround: Run the calculator on the zipped files instead.
  - Source Code if you would like to build it yourself or run on a non-Windows platform.
- Song length is defined as the length listed in the official metadata of the song, or the time difference between the start of the first significant musical element and the end of the last significant musical element if the official metadata is not available.

## Lowest Required Difficulty Level
Starting from the highest SPS difficulty submitted for rank, there must be a difficulty or difficulties following the progression requirements until either the SPS Requirements or the Total Downmap Requirements are met.

### SPS Requirements:
- If the song length is less than 2:00.0, the lowest difficulty submitted for rank must have less than 3.20 SPS.
- If the song length is 2:00.0 to 3:59.99, the lowest difficulty submitted for rank must have less than 4.20 SPS.
- If the song length is 4:00.0 to 5:59.99:
  - If the top difficulty submitted for rank has 5.20 SPS or more, there must be at least one lower difficulty that follows the progression requirements.
  - If the top difficulty submitted for rank has less than 5.20 SPS, the mapset is exempt from difficulty and progression requirements. However, mapping multiple difficulties is still encouraged.
- If the song length is 6:00.0 or more, the mapset is exempt from difficulty and progression requirements. However, mapping multiple difficulties is still encouraged.

## OR
### Total Downmap Requirements:
- If the song length is less than 4:00.0, the lowest difficulty submitted for rank must have a minimum SPS reduction of 60% from the highest SPS difficulty submitted for rank.
- If the song length is 4:00.0 to 5:59.99, the SPS Requirements should be applied instead.
- If the song length is 6:00.0 or greater, the mapset is exempt from difficulty and progression requirements. However, mapping multiple difficulties is still encouraged.

## Progression Requirements
As one progresses down from the highest difficulty in the mapset, these rules should be followed:
- The overall swings per second in the interactive portion of the map must be decreased by 10.00-40.00% from the previous difficulty.
  - An exception can be made if the SPS decreases by less than 10% but the effective BPM of the highest effective BPM sections decreases by more than 40%. This primarily concerns cases where high effective BPM one-handed sections are converted into lower effective BPM sections that utilize both hands.
- The mapping in periods of peak difficulty must be made easier.
- The average effective BPM in the hardest section(s) must decrease OR the hardest sections should be made significantly shorter.
- The average effective BPM must decrease.
- Complexity, the difficulty involved in reading and executing the movements required to hit the notes, must not increase, unless justified by a large decrease in other components of difficulty.
- The duration of the period(s) of peak difficulty must not significantly increase, unless justified by a large decrease in other components of difficulty.
- The overall interactive object density should decrease.
- Spacing, the distance between successive notes of the same color on the 4x3 grid, should not increase within a section if the average effective BPM remains the same in that section.

## Miscellaneous
- If the spread causes the mapset to exceed the 5 difficulty limit, the easiest or hardest additional levels should be placed in a separate mapset.
- All difficulty labels must be appropriately named in relation to the difficulty of the map they represent.
- Difficulty labels must not contain obscene content including derogatory terms, sexual content, or other explicit terminology.
- Having multiple guest difficulties of the same relative difficulty is okay, as long as all difficulties are appropriately named to reflect their difficulty.
- All difficulties in the mapset going for rank must go through the ranking process at the same time, and all decisions are final once any difficulties in the mapset are ranked.
- Any difficulties which are not going for rank must not be inserted between difficulties going for rank. This includes lightshows, challenge difficulties, difficulties that require external mods, etc.
