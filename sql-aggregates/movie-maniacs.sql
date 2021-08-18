select "c"."firstName" as "firstName", "c"."lastName" as "lastName",
sum("p"."amount") as "totalPaid"
from "customers" as "c"
join "rentals" as "r" using ("customerId")
join "payments" as "p" using ("rentalId")
group by "c"."customerId"
order by "totalPaid" desc;
