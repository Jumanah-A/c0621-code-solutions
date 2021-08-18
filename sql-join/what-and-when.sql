select "films"."releaseYear" as "Release Year",
"categories"."name" as "Category Name"
from "films"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie';
