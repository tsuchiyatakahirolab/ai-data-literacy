# Fictional data for a half-day itinerary

All facilities, travel times, fares, and opening hours below are invented for practicing constraint checking. Do not use them as real transport or facility information.

## Task constraints

Five university students leave Kyoto Station at 13:00 and return by 17:30. Use walking or public transport. Transport costs must be no more than JPY 1,500 per person. Include a quiet place and a break of at least 30 minutes.

Food and admission are outside the transport limit. All exercise facilities have free admission, and buying food is unnecessary. All five students pay the same fares; assume no capacity or reservation constraints. Waiting time is included in the travel times below.

## Fictional facilities

| Place | Available hours | Requirement |
|---|---|---|
| Museum A | 13:00–17:00 | Quiet place; stay at least 45 minutes. |
| Park B | 13:00–18:00 | Stay at least 30 minutes. |
| Rest area C | 14:00–17:00 | Take a break of at least 30 minutes. |

## Travel table

Each row gives a one-way duration and fare per person. Use the same values in the reverse direction. For a route absent from the table, combine listed segments and add their times and fares.

| Segment | Duration | Fare per person | Mode |
|---|---:|---:|---|
| Kyoto Station–Museum A | 30 minutes | JPY 230 | Public transport |
| Museum A–Rest area C | 20 minutes | JPY 230 | Public transport |
| Rest area C–Park B | 15 minutes | JPY 230 | Public transport |
| Park B–Kyoto Station | 30 minutes | JPY 230 | Public transport |

## Change one condition

Increase the stay at Museum A from 45 to 60 minutes. Keep all other conditions and revise the itinerary.

## One possible checked answer

Leave Kyoto Station at 13:00; Museum A 13:30–14:15; Rest area C 14:35–15:05; Park B 15:20–15:50; return to Kyoto Station at 16:20. Transport is JPY 920 per person, or JPY 4,600 for five.

After the change, leave Museum A at 14:30, take the break at Rest area C from 14:50–15:20, visit Park B from 15:35–16:05, and return at 16:35. Fares remain unchanged because the route segments are unchanged. Other answers are valid if they satisfy every constraint and the travel table.
