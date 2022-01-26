const express = require("express");
const {getAllproducts, createProduct, deleteProduct, getProductDetails, createProductReview,getProductReviews,deleteReview, getAdminAllproducts, updateProduct} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles  } = require("../middleware/auth");

const router = express.Router();

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route("/product/:id").get(getProductDetails)
// admin

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);


router.route("/products").get(getAllproducts);

// admin
router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"),getAdminAllproducts);


router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);



module.exports = router