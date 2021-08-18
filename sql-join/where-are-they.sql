select "addresses"."line1",
"addresses"."district",
"cities"."name" as "City",
"countries"."name" as "Country"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId");
