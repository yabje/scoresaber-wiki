# Mapping Criteria

## About the Mapping Criteria

The mapping criteria involves two sections: one for rules, and one for guidelines.

 - Rules are criteria that must be followed for a map to be considered rankable.
 - Guidelines are criteria that should be followed for a map to be considered rankable but can be broken under proper setup or justification.

Further included in this document are a glossary, addendum, and appendix.

- The glossary includes definitions for important terms in the criteria.
- The addendum includes suggestions that are not explicitly about rankability but can aid a map in getting through quality checks.
- Note that while sections in the addendum do not have to be followed explicitly, excessive abuse of the suggestions can be reason for a map to be denied.

Lastly, the appendix includes examples and clarification of issues referenced in the mapping criteria.

Formatting for referencing criteria is as follows:
(Main Section).(Subsection).(Criteria). The main section designations are R for rules, G for guidelines, and A for addendum. The subsections are designated by a number underneath each main section. Each individual criteria is ordered alphabetically under the subsection to which it applies.

:::tip For any comments, questions, or concerns about material included or not included within the criteria, feel free to message a member of the Criteria Assurance Team at ScoreSaber.
:::

## Glossary

### Setup
**Mapset**: A set of difficulty .dat files with one info.dat file that references them.  
**Difficulty Spread**: The set of difficulty levels present in the map. An example of a mapset with a 3 difficulty spread would be a mapset consisting of a Normal, Hard, and Expert difficulty.  
**Gameplay Modifiers**: Disappearing Arrows, Ghost Notes, Faster Song, etc.  
**Game Mode**: 360 Degrees, 90 Degrees, Standard, One Saber, etc.  
**4x3 Grid**: The allowed 12 spaces for note placement in Standard mode.

### Timing
**BPM**: Beats Per Minute. Defines the tempo of the song.  
**Variable BPM**: Describes songs which change BPM irregularly.  
**Offset**: The time difference between the start of the sound file and the beat of the song, used in the editor to align the beat lines with the beat of the song.  
**Beat**: 1 fraction of a minute as defined by the BPM of the song.  
**(Timing) Precision**: Precision, measured in fractions of a beat. For example, ¼ precision refers to ¼ of a beat.  
**Effective BPM**: The speed in which one hand is making a ½ precision movement relative to the BPM. For example, the effective BPM of a ¼  precision 1 hand motion in a 100 BPM song would be 200 BPM.

- **Sliders**: The effective bpm for a slider to the next note is defined as the distance from the last note of the slider to the next note of the same color as the slider.

**Musical Element**: Includes but not limited to: lyrics, sounds produced by instruments, and sounds that are part of a melody, harmony, or beat.  
**Overmapping**: Placing notes at timings other than those of the instrument(s) that are being followed.  
**Undermapping**: Mapping to a subset of timings of the instrument(s) that are being followed.

### Patterns
**Objects**: Bombs, notes, walls or arcs.  
**Interactive Objects**: Bombs and notes, as well as walls that force you to dodge or duck.  
**Hitbox**: An invisible box around an object that is used to detect collisions and cuts.  
**Swing path**: The path of a swing used to hit a note. Can be divided into the Pre-cut swing and the follow-through swing.  

- Pre-cut swing: The portion of a swing before making contact with a note.
- Follow-through swing: The portion of a swing after cutting through the note.

**On the same snap**: Refers to motions that are intended to be made at the same point in time.  
**Dot Note**: The note type that can be scored on by a cut from any direction.  
**Slider**: A set of notes that follow each other at a set timing precision such that they appear at distinct timings but can still be hit with a single swing. [EXAMPLE](./mapping-criteria.md#slider-examples)  
**Double directional**: Two consecutive notes of the same color in the same direction.  
**Reset**: A motion where hand/arm position or rotation are adjusted without a corresponding note for that hand.  
**Bomb reset**: Using bombs to force a reset.  
**Wrist reset**: A motion where hand rotation is adjusted before or during a swing to enable a note to be hit.  
**Pronation**: The inward rotation of the arm which extends to about 90°-100° from a palm down position.  
**Supination**: The outward rotation of the arm which extends to about 180°-210° from a palm down position.

## Rules

### 1. Gameplay
Maps must not require the use of any external mods or programs to play.  
Maps must be designed to be played without any gameplay modifiers.  
Maps must be ‘Standard’ game mode maps.  
Note jump speed must remain constant within each difficulty.  

### 2. Patterns

#### A. Mismaps
A map cannot have any objects that are clearly placed or positioned unintentionally by the mapper.

#### B. Notes
Multiple notes of the same color on the same swing must not be parallel to one another. [EXAMPLE](./mapping-criteria.md#r-2-b-parallel-notes)  
If there are multiple notes of the same color on the same swing, each note must lead into the expected cut direction of the next note.  
Multiple notes of the same color on the same snap must not differ in cut direction from each other by more than 45 degrees.  
Notes must not be placed in the pre-cut swing path of a note of the opposite color. [EXAMPLE](./mapping-criteria.md#r-2-b-pre-cut-swing-path)  
Notes should not be placed in the follow-through path of a note of the opposite color ([EXAMPLE](./mapping-criteria.md#r-2-b-hitboxes)) unless the notes are on the same snap or there is sufficient time for the other color saber to swing clear of the note.  
No patterns should have a swing path into the bad cut hitbox for a note of the same color in the same swing.  
Notes must not be placed inside walls or be completely blocked from the player’s view by walls.  
A pattern must not induce a variation in swing speed within a single swing.  
A pattern must not be at a significantly higher effective BPM than what is justified within the rest of the map.  
Dot notes must use angle offsets divisible by 45 degrees.  
Arrow notes must have an angle offset of 0.  
Dot notes will be treated as having the most direct possible swing direction of the four face-centered swing directions allowed by the notes orientation. This rule does not apply to multinote hits. [EXAMPLE](./mapping-criteria.md#r-2-b-dot-note-swing-direction)  

#### C. Walls
There must not be a wall or combination of walls that force the player to take damage. [EXAMPLE](./mapping-criteria.md#r-2-c-walls-1)  
There must not be a wall or combination of walls that force the player into the outside lanes of the playfield.  
Walls must have positive width.  
Interactive walls must have a duration of at least 15ms. That allows for 1/16 precision up to 250BPM and ⅛ precision up to 500BPM.  
No part of a wall can lie outside the 4x3 grid.  
Walls must be one of the two standard heights. Full height or crouch wall height. [EXAMPLE](./mapping-criteria.md#r-2-c-walls-1)  

#### D. Bombs
Bombs must not be placed such that they interfere with the pre-cut or follow-through swing for a note.  
Bombs must not be placed in a way that forces a saber to stay outside the 4x3 grid in order to avoid contacting the bombs. [EXAMPLE](./mapping-criteria.md#r-2-d-bombs)  
Bombs must be accompanied with an acceptable level of lighting.  
Bombs must not be placed inside of walls or be completely blocked from the player’s view by walls.  
Bombs may not overlap with other objects in game and must be placed at least 20 ms apart from other bombs in the same space. If the NJS is not too low,   that allows for 1/16 precision up to 180 BPM and ⅛ precision up to 360 BPM.  

#### E. Arcs
Arcs must be connected to a note.  
Arcs must not be active with notes of the same color not connected with the arc.  
There can at most be one arc active per hand.  
Direction of the arc must match the arrow direction. For dot notes the arc must follow the direction of parity.  
Arcs must not be attached to multinote hits.  
Notes connected by an arc must be rankable even if the arc was removed.  
Head and tail multipliers must not be less than 0.1 or exceed 1.5.  
Arcs must not be misleading. [EXAMPLE](./mapping-criteria.md#r-2-e-misleading-arcs)  

#### F. Chains
See [technical limitations](./technical-limitations-criteria.md#current-limits)

### 3. Timing

#### A. Setup
The map’s BPM must perfectly match one of the BPMs of the song or a multiple of one of the BPMs of the song.  
A map may use the effective BPM of a section during the map as the base BPM as long as the difficulty of the section represents the overall difficulty of the map.  
Maps with variable BPM timing must be timed as accurately as possible.  
The map’s offset must be as close to perfect as possible.  

#### B. Notes
All notes must be perfectly on time to a distinct sound in the music.  
The first note of a slider must be on time to the sound the slider is mapping. The precision of the following notes may be adjusted for playability.  

#### C. Undermapping
Undermapped sections must not have a single note off time, and each note in an undermapped section must have a corresponding sound in the music.  

#### D. Overmapping
Rhythmic overmapping is not allowed. A single sound cannot be represented by multiple notes unless those notes fall into a single swing.  
Simplifying timing inconsistencies to match an understandable rhythm is allowed if the inconsistencies do not arise from a BPM or rhythm change.  

### 4. Formatting and Metadata
[All rules on formatting are here](./formatting-and-metadata.md)

### 5. Difficulty Spread Requirements
[All rules on difficulty spread requirements are here](./difficulty-spread-requirements.md)

### 6. Miscellaneous

#### A. Lighting
A map must have sufficient lighting throughout the song.

#### B. Intro/Outro
A map must have an intro period of at least 1.5 seconds with no interactive objects.  
A map must have an outro period of more than 2 seconds, counting from the end of the last interactive object of the map.  
A map must have an outro period of less than 15 seconds, counting from the point the last object disappears or the last lighting element change.

#### C. Audio
A map’s audio must not be modified to add excessive amounts of silence anywhere in the song.  
A map’s audio must consist of musical elements set to an identifiable structure.  
The length of the map’s audio, ignoring any added silence, must be longer than 20 seconds.

#### D. Accompanying Text and Images
There must not be nudity, near-nudity, sexual references, extreme violence, gore, substance abuse, or any other form of explicit content anywhere in the files contained in the map.  
There must not be content that harasses or denigrates any individual or group anywhere in the files contained in the map.

#### E. Custom Difficulty Names
For any game mode in a mapset with a difficulty going for rank:  

- Difficulty names must be clearly progressive and accurately indicative of their respective difficulties, excluding the highest difficulty.
- Difficulty naming must follow a common theme relating to the song or map, unless the difficulty names are abbreviations of the default Beat Saber difficulty names.
- If there are multiple difficulties with similar relative difficulty, the difficulty names must share a commonality that indicates that they are of the same relative difficulty.
- Difficulty names must not be so long that they overlap with other UI elements.
- Difficulty names must not exceed 30 characters in length.
- Difficulty names must not solely consist of one or more usernames. Words that happen to be usernames are acceptable within difficulty names as long as they relate to the song.

#### F. DAT Editing
All difficulties in a mapset that are going for rank must not contain any form of unfair modification via editing of the .dat file manually or through external mappers. This includes any form of custom walls, map reversal, and note jumping.

## Guidelines

### 1. Patterns

#### A. Resets
Resetting patterns in a map should allow an appropriate amount of time between the resetting notes, consistent with the difficulty of the map.

- This includes any of the following: Double directionals, bomb resets, or wrist resets through extreme pronation or supination.

#### B. Sliders
Each note in a slider should follow the previous note in the slider with the same timing precision.  
Sliders should have a speed similar to the general swing speed of the map or have a speed appropriate to the sound being mapped.  
Sliders should not have direction changes of more than 45 degrees.  
Sliders should not have more than one direction change.

#### C. Collisions
There should be no patterns where the arc of the pre-cut swing on one hand overlaps with the pre-cut swing of the other hand. [EXAMPLE](./mapping-criteria.md#g-1-c-pre-cut-collisions)  
There should be no patterns where the arc of the follow-through swing on one hand overlaps with the follow-through swing of the other hand. [EXAMPLE](./mapping-criteria.md#g-1-c-follow-through-collisions)

#### D. Vision Blocks
No object should impede vision of other interactive objects without an indication and/or implication of where and what the blocked objects will be.

#### E. Emphasis
Patterns and sections of a map should not excessively overrepresent the music.  
Patterns and sections of a map should not excessively exceed the difficulty of the rest of the map unless supported by the music.

#### F. Multinote Hits
The direction of dot notes in multinote hits should accurately and consistently represent the sounds they are mapped to through the map.  
In a multinote hit, all notes should visually be indicated to be part of the same swing.

### 2. Timing

#### A. Walls
Walls should correspond to a musical element.

#### B. Bombs
Bombs should be mapped to a musical element unless used to clarify a reset or set up for a subsequent pattern. In those cases, the bombs should be mapped to a musical element wherever possible.

#### C. Arcs
Arcs should correspond to a musical element.

## Addendum

### 1. Consistency
Repeated sections of music should feel similar, and similar sections should not play excessively differently unless there is some change in the music.  
Within a section, representation of a repeated sound with the same volume and pitch in the absence of other sounds should not excessively change.  
Mapping decisions around consistent representation should be understandable.

### 2. Variety
Varying the mapping as the music changes is important to musical representation. Big changes in the music should correspond to a change in the mapping.  
This does not require that patterns must change with every change in the music, nor does it disallow variation in sections where the music stays the same.

### 3. Emphasis
The patterns & lighting used should reflect the intensity level of the music being mapped.  
The intensity of the mapping in each section relative to other sections should be somewhat in line with the intensity of the music. Deviation is allowed as long as a section’s intensity is not excessively raised or lowered relative to the intensity of the rest of the song.

## Appendix

### Rule Explanations and Background

#### R.2.C (Walls)
Thin walls, which have close to 0 duration, are not allowed because they do not consistently damage the player.  
Fake walls, which have negative width, are not allowed because they are not an intended part of the base game.  
Fast walls, which have negative duration, are not allowed because they are not an intended part of the base game.

#### R.6.A (Lighting)
Sufficient lighting means that some form of lighting that follows the music should be present in sections of the map that contain interactive objects.   Any form of automatic light generation that creates lighting that fits this criteria is allowed.

#### G.1.E (Vision Blocks)
When a note is vision blocked, the location should always be deducible from previous note placements.  
When a note is vision blocked, the cut direction should always be deducible from previous note placements, unless the note is a dot note.

### Images

#### Slider Examples
![Slider Examples](~@images\ranking\mapping-criteria\Picture1.png)

#### R.2.B (Parallel Notes)
These are examples of parallel same color notes on the same snap.  
![Parallel Notes](~@images\ranking\mapping-criteria\Picture2.png)

#### R.2.B (Pre-cut Swing Path)
The blue note is in the pre-cut swing path of the red note.  
![Pre-cut Swing Path](~@images\ranking\mapping-criteria\Picture3.png)

#### R.2.B (Hitboxes)
The red up note is in the follow-through path of the blue up note.  
![Hitboxes](~@images\ranking\mapping-criteria\Picture8.png)

#### R.2.B (Dot Note Swing Direction)
The implicit circling of the dot notes causes a hitbox issue.   
![Dot Hitbox Circle](~@images\ranking\mapping-criteria\dot-hitbox-circle.png)  

#### R.2.C (Walls)
These walls force the player to take damage because there is no space for the player to pass through.  
![Walls](~@images\ranking\mapping-criteria\Picture4.png)  

Full height wall and a crouch wall.  
![Example walls](~@images\ranking\mapping-criteria\walls.png)

#### R.2.D (Bombs)
These bombs that force a saber to stay outside the 4x3 grid in order to avoid contact.  
![Bombs](~@images\ranking\mapping-criteria\Picture5.png)

#### R.2.E (Misleading Arcs)
Arc ends prematurely, misleading the player about scoring.  
![Premature-arc](~@images\ranking\mapping-criteria\arc-premature-end.png)  

Arc suggesting a swing through an opposite colored note.  
![Arc through note](~@images\ranking\mapping-criteria\arc-through-note.png)  

#### G.1.C (Pre-cut Collisions)
The arcs of the pre-cut swings overlap.  
![Pre-cut Collisions](~@images\ranking\mapping-criteria\Picture6.png)

#### G.1.C (Follow-through Collisions)
The arcs of the follow-through swings overlap.  
![Follow-through Collisions](~@images\ranking\mapping-criteria\Picture7.png)

### Links

- [Changelog](https://docs.google.com/document/d/1yiaybXp7oLYHPLqQQfwDoNUo5cGCge0n4Jo-V4IpBmA/edit)
- [ScoreSaber Ranking Criteria v1](https://docs.google.com/document/d/1mtVihRO1LomyptXayoDNDTQYgX_TQPp6ZYDmtwR2jMI/edit)

### Translations

- [Korean Translation](https://docs.google.com/document/d/1K1iRlM7_kHYbMVzVoUuDmVUl53i3P1D58QapjfNX8Fc/edit#heading=h.3bevwybqdvva)

## Credits

**Written by:**  
*Uninstaller  
Fern*

**WIth Contributions from:**  
*OrangeW  
Amanatsu  
Umbranox  
The ScoreSaber Ranking Team  
ScoreSaber Ranking Criteria v1 Contributors*  

*Transferred to the Wiki by riasuh*
