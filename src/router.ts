import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategoryController";
import { FindProductController } from "./controllers/FindProductController";
import { FindCategoryController } from "./controllers/FindCategoryController";

const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()
const createProductWithExistCategory = new CreateProductWithExistCategory()

const findProduct = new FindProductController()
const findCategory = new FindCategoryController()

router.post("/product",createProduct.handler)
router.post("/category",createCategory.handler)
router.post("/categoryProduct",createProductCategory.handler)
router.post("/productWithCategory",createProductWithExistCategory.handler)
router.get("/product/:id",findProduct.handler)
router.get("/category/:id",findCategory.handler)

export {router}