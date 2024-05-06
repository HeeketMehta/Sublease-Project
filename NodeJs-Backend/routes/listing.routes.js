const { verifySignUp } = require("../middleware");
const ListingController = require("../controllers/listing.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/listingpost",
    ListingController.addListing
  );


  app.post(
    "/api/get_listings_of_user",
    ListingController.getListing
  );


  app.get(
    "/api/get_all_listings",
    ListingController.getAllListings
  );


  app.post(
    "/api/get_listing_by_id",
    ListingController.getListingByID
  );
  
};