import { Router } from "express";

import { createCountry } from "../controller/country";
import { getCountry } from "../controller/country";
import { getCountries } from "../controller/country";
import { updateCountry } from "../controller/country";
import { deleteCountry } from "../controller/country";

import { upload } from "../utils/multer";

const router = Router();

router.route("/").post(upload.array("images"), createCountry).get(getCountries);

router
  .route("/:countryId")
  .get(getCountry)
  .put(updateCountry)
  .delete(deleteCountry);

export default router;
