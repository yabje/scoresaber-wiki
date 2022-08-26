# Formatting and Metadata

## Rules
The data on external sources do not have to abide by these rules, but should be kept relevant to the song and artist. You may add additional tags and other information. The metadata rules in this document are for in-game purposes.

Refer to any official metadata for accurate information, then follow the formatting as laid out here. In the case of a contradiction, follow the official metadata unless it requires the use of special Unicode characters. Special Unicode characters should not be used because Beat Saber’s search feature does not support them. Instead, use the official translation when one exists and romanization when there is no official translation.

## Regular Use Case
In the vast majority of cases, song metadata should follow this format:

```:no-line-numbers
levelAuthorName: Mapper
songAuthorName: Artist of the song
songName: Song name
songSubName: All following tags: (Short Ver.), (ft. Hatsune Miku), etc.
```

If there are multiple tags, then put them alongside each other in the songSubName in any order. Do not add any tags that are not specified in this document or the official metadata. The type(s) of brackets used in tags, if used, should follow the official metadata if available.

#### *Example:*

```:no-line-numbers
levelAuthorName: Uninstaller
songAuthorName: Camellia
songName: Bassline Yatteru? w
songSubName: feat. Nanahira (Cranky Remix) (Short Ver.)
```

### Track is a remix or other musical modification of the original
The remix, bootleg, etc. tag must go into songSubName in brackets regardless of official or source metadata.

#### *Example:*

```:no-line-numbers
songAuthorName: DJ'TEKINA//SOMETHING
songName: Internet Bitch
songSubName: (P*Light Remix)
```

### Track is a cover
The cover artist, followed by “Cover”, must go into songSubName in brackets regardless of official or source metadata.

#### *Example:*

```:no-line-numbers
songAuthorName: 150p
songName: Kodoku no Kakurenbo
songSubName: (Himeringo Cover)
```

### Track has an official length modification
If the track is an official length modification, the source metadata should be followed.

#### *Example:*

```:no-line-numbers
songAuthorName: Camellia as "fluX Xroise"
songName: Xronier
songSubName: (”geneXe” Long ver.)
```

### Track has an unofficial length modification
If the track is modified in such a way that it is similar enough to an official version of the track, the source metadata of that version of the track should be used.

If the track is a shortened version of the full version of the track for the purpose of animation openings or endings, then (TV Size) must be added to the songSubName.

#### *Example:*

```:no-line-numbers
songAuthorName: PENGUIN RESEARCH
songName: HETENA
songSubName: (TV Size)
```

If the track is simply shortened, then (Short Edit) or (Short Ver.) must be added to the songSubName. If the original track metadata already has a length designation, (Short Edit) or (Short Ver.) must replace the original length designation.

#### *Example:*

```:no-line-numbers
songAuthorName: VINXIS
songName: Sidetracked Day
songSubName: (Short Edit)
```

If the track is extended in some way, (Extended Edit) or (Extended Ver.) must be added to the songSubName. If the original track metadata already has a length designation, (Extended Edit) or (Extended Ver.) must replace the original length designation.

#### *Example:*

```:no-line-numbers
songAuthorName: ExileLord
songName: Soulless 5
songSubName: (Extended Edit)
```

### Track is a mashup
Use the information provided by the artist.

#### *Examples:*

```:no-line-numbers
songAuthorName: gmtn. vs. kozato (fw. LUZE) & gmtn. (witch’s slave)
songName: squartatrice vs disperagioia

songAuthorName: Kove x Perfume
songName: Stellar x Polyrhythm
songSubName: (TANUKI Mashup)
```

### Track has vocals from a Vocaloid
Vocaloids are rarely the sole artist for a song. The producer or artist must be placed in the songAuthorName, and the Vocaloid featured must be added to the songSubName.

#### *Example:*

```:no-line-numbers
songAuthorName: Rasen Hikou
songName: Omoi
songSubName: [ft. Hatsune Miku]
```

### Track has multiple artists
#### Comma separation
Source metadata must be used, and the artist names should be separated by a whitespace.

#### *Example:*

```:no-line-numbers
songAuthorName: TEA, ginkiha
songName: Luvin’Epoch
```

#### vs. (Versus)
vs., VS, and Versus are commonly used to indicate a collaboration between two artists. The source metadata should be followed as is.

#### *Example:*

```:no-line-numbers
songAuthorName: C-Show vs. DJ Genki
songName: BLACK LABEL
```


#### With
With is commonly used to indicate a collaboration between two artists. The source metadata should be followed as is.

#### *Example:*

```:no-line-numbers
songAuthorName: Minazuki Airi with Atsushi
songName: Daisuki, Evolution
```

#### And (or &)
And (or &) is commonly used to indicate a collaboration between the two artists. The source metadata should be followed as is. Do not replace an ampersand with “and” or vice versa.

#### *Example:*

```:no-line-numbers
songAuthorName: Draw The Emotional & Foreground Eclipse
songName: Sad Spring
```

#### Feat (or ft.)
Featuring (aka. feat. / ft.) is commonly used to indicate a collaboration between the two artists. This can appear in both the artist name and the title name. Always put the feat/ft. Sections inside songSubName.

#### *Example:*

```:no-line-numbers
songAuthorName: The Black Eyed Peas
songName: DOPENESS
songSubName: (feat. CL)
```

#### CV (Character Voice)
Character Voice (CV) is typically used when the vocalist is singing under the alias of a character from a show. This is rarely consistent so is enforced as such, in spite of official metadata.

The correct way to format CV designations is to use the romanised name of the character within brackets, followed by the romanised name of the vocalist with CV: as a prefix, in brackets.

#### *Examples:*

```:no-line-numbers
songAuthorName: Emilia (CV: Rie Takahashi)
songName: Stay Alive

songAuthorName: Tanya Degurechaff (CV: Yuki Aoi)
songName: Los! Los! Los!
```

### Track has 3 or more artists
When 3 or more artists are involved with a track, Various Artists should be used instead.

#### *Example:*

```:no-line-numbers
songAuthorName: Various Artists
songName: Songs Compilation
```

### Map has multiple contributors
When there are two or more contributors, each contributor can be named individually as long as the in-game character limit is not exceeded; in doing so, all contributor names must be present and separated with the correct punctuation.

Should the character limit be exceeded, the levelAuthorName must be replaced with "Various Mappers" or an alternative group name, and all contributors must be credited on the relevant beatmap source pages or listed inside custom DAT file fields.

Alternative group names are allowed for a collaboration of 2 contributors or more. A group name must not exceed the character limit unless the group name is 15 characters or less.

#### *Example:*

```:no-line-numbers
levelAuthorName: Amanatsu & Kikis  
songAuthorName: Camellia  
songName: finorza  
songSubName: feat.Nanahira  

levelAuthorName: DE125, Skeelie, & Vilawes
songAuthorName: ReeK
songName: Possesed By The Blood Moon
```
