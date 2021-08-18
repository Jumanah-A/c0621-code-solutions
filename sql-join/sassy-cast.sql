select "actors"."firstName" as "First Name",
"actors"."lastName" as "Last Name"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';
