const db = require("../models");
const User = db.user;
const Listing = db.listing;

const Op = db.Sequelize.Op;




exports.addListing = (req, res) => {


    console.log("Request.body is" + req.body);
    console.log("In the Add Listing function of the listing.controller.js file....");


    console.log("Username -- ", req.body.username);
    console.log("Title -- ", req.body.title);

    console.log("listing_rent_amount -- ", req.body.rent);


    console.log("listing_no_of_bedrooms -- ", req.body.bedrooms);


    console.log("listing_no_of_bathrooms -- ", req.body.bathrooms);


    console.log("listing_street_address -- ", req.body.Street);


    console.log("listing_zipcode -- ", req.body.Zipcode);


    console.log("listing_city -- ", req.body.City);

    console.log("listing_state -- ", req.body.State);

    // console.log("listing_status -- ", req.body.listing_status);

    console.log("listing_description -- ", req.body.Description);

    // console.log("listing_available_date -- ", req.body.listing_available_date);


    Listing.create({
        username: req.body.username,
        listing_title: req.body.title,
        listing_rent_amount: req.body.rent,
        listing_no_of_bedrooms: req.body.bedrooms,
        listing_no_of_bathrooms: req.body.bathrooms,
        listing_street_address: req.body.Street,
        listing_zipcode: req.body.Zipcode,
        listing_city: req.body.City,
        listing_state: req.body.State,

        // listing_status: req.body.listing_status,
        // listing_available_date: req.body.listing_available_date,
        listing_description: req.body.Description,
        // listing_Image: req.body.listing_Image,

        
    }).then(listing => {
        console.log("The listing was successfully done....")
        res.send({message:"Successfully Listed...."});
    }).catch((err)=>{
        console.log("Error has occurred with the following message - "+ err.message);
    })



};




exports.getListing = async (req, res) => {


    const username_obtained = req.body.username;
    console.log("In the getListing method of listing.controller.js, we get username as --- " + username_obtained);

    const data = await Listing.findAll({
        where: {
        username: username_obtained, 
      },
      attributes: [
        'listing_title',
        'listing_rent_amount',
        'listing_no_of_bedrooms',
        'listing_no_of_bathrooms',
        'listing_street_address',
        'listing_zipcode',
        'listing_city',
        'listing_state',
        'listing_description',
        "listing_id"
      ],
      raw: true
    })
    console.log("The data for the getListing method of listing.controller.js is ---");
    console.log(data);
    res.send({message:"Successfully Showing....", ListingData: data});
};







exports.getAllListings = async (req, res) => {


    
    console.log("In the getAllListings method of listing.controller.js");

    const data = await Listing.findAll({
      attributes: [
        'listing_title',
        'listing_rent_amount',
        'listing_no_of_bedrooms',
        'listing_no_of_bathrooms',
        'listing_street_address',
        'listing_zipcode',
        'listing_city',
        'listing_state',
        'listing_description',
        'username',
        'listing_id'
      ],
      raw: true
    })
    console.log("The data for the getAllListings method of listing.controller.js is ---");
    console.log(data);
    res.send({message:"Successfully Showing....", ListingData: data});
};










exports.getListingByID = async (req, res) => {

    const listing_id_passed = req.body.ListingId;
    
    console.log("In the getListingByID method of listing.controller.js");

    const data = await Listing.findOne({
        where: {
            listing_id: listing_id_passed, 
          },
      attributes: [
        'listing_title',
        'listing_rent_amount',
        'listing_no_of_bedrooms',
        'listing_no_of_bathrooms',
        'listing_street_address',
        'listing_zipcode',
        'listing_city',
        'listing_state',
        'listing_description',
        'username',
        'listing_id'
      ],
      raw: true
    })
    console.log("The data for the getListingByID method of listing.controller.js is ---");
    console.log(data);
    res.send({message:"Successfully Showing....", ListingData: data});
};