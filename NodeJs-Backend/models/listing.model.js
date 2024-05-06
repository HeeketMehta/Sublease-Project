module.exports = (sequelize, Sequelize) => {
    const Listing = sequelize.define("listings", {
      username: {
        type: Sequelize.STRING
      },
      listing_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      listing_title: {
        type: Sequelize.STRING
      },
      listing_rent_amount: {
        type: Sequelize.STRING
      },
      listing_no_of_bedrooms: {
        type: Sequelize.STRING
      },
      listing_no_of_bathrooms: {
        type: Sequelize.STRING
      },
      listing_street_address: {
        type: Sequelize.STRING
      },
      listing_zipcode: {
        type: Sequelize.INTEGER
      },
      listing_city: {
        type: Sequelize.STRING
      },
      listing_state: {
        type: Sequelize.STRING
      },
      // listing_status: {
      //   type: Sequelize.STRING
      // },
      // listing_available_date: {
      //   type: Sequelize.STRING
      // },
      
      listing_description: {
        type: Sequelize.STRING
      },
      // listing_Image: {
      //   imageData: Sequelize.BLOB('long'),
      //   allowNull: true 
      // }
    });
  
    return Listing;
  };