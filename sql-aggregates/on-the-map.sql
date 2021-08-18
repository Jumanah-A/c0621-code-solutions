select "c"."name" as "Country",
       count("city".*) as "totalCities"
  from "countries" as "c"
  join "cities" as "city" using ("countryId")
 group by "c"."countryId";
