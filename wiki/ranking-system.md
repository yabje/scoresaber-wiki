# How does ScoreSaber and the PP system work ? 

## Earning PP
PP is in return awarded to players for submitting a score on ranked maps,. The curve available below shows the percentage of points you get relative to the assigned PP value of a map based on your performance on said map. 

ScoreSaber calculates your total PP, which you can see next to your ScoreSaber profile, based on a weighted total of all your ranked map completions. Your highest PP play will give 100% of the PP earned from the play, but every play after that is weighted at a percentage 5% lower than the play above it. The weighting is 0.965^(n-1), where n is the ranking of a specific play amongst all your PP plays. A new play will give PP at the weight based on its position in your ranked plays, but it also pushes down the weighting of play below it. That is why your PP gains for completing ranked maps don’t necessarily sum up with the numbers shown in your profile.

![PP Curve](~@images/ranking/pp-curve.png)

## Ranking process
The Ranking Team ranks maps through a communal evaluation process. A map is first chosen by a team member to be checked; if the map seems to meet everything from the [ranking-criteria](./ranking/ranking-criteria.md), it is then added to the [ranking-queue](#rankqueueinfo) and will eventually reach the top of said queue until it is qualified with 3 upvotes. Once the map is qualified by the Nomination Assessment Team, a timer of 7 days is started for players to give feedback to the mapper. Finally, when the 7 day timer comes to an end, the map will be approved, and ranked.

When a map is ranked, it is then assigned a Performance Points (commonly referred to as *PP*) value based on an algorithm which determines the difficulty of said map, this is based of a variety of factors. 

For any question that was not answered on this page please refer to our [FAQ](#FAQ)
