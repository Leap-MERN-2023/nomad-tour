import { Router } from "express";

import { createCountry } from "../controller/country";
import { getCountry } from "../controller/country";
import { getCountries } from "../controller/country";
import { updateCountry } from "../controller/country";
import { deleteCountry } from "../controller/country";

const router = Router();

router.route("/").post(createCountry).get(getCountries);

router
  .route("/:countryId")
  .get(getCountry)
  .put(updateCountry)
  .delete(deleteCountry);

export default router;
