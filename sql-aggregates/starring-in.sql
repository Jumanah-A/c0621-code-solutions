select "categories"."name" as "categoryName",
count("films".*) as "totalFilms"
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "films" using ("filmId")
join "actors" using ("actorId")
where "firstName"='Lisa' and "lastName"='Monroe'
group by "categories"."categoryId";
