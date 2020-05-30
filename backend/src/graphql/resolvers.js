const ProductService = require('../services/ProductService');
const OrderService = require('../services/OrderService');
const CategoryService = require('../services/CategoryService');

const resolvers = {
    products: async () => {
        const productService = new ProductService();
        const products = await productService.getAllProducts();
        return products;
    },
    productsFromCategory: async (queryVariables) => {
        const productService = new ProductService();
        const products = await productService.getAllProductsFromCategory(queryVariables.category);
        return products;
    },
    product: async (queryVariables) => {
        const productService = new ProductService();
        const product = await productService.getProductById(queryVariables._id);
        return product;
    },
    createProduct: async (product) => {
        const productService = new ProductService();
        const newProduct = await productService.createProduct(product);
        return newProduct;
    },
    orders: async () => {
        const orderService = new OrderService();
        const orders = await orderService.getAllOrders();
        return orders;
    },
    order: async (queryVariables) => {
        const orderService = new OrderService();
        const order = await orderService.getOrderById(queryVariables._id);
        return order;
    },
    createOrder: async (order) => {
        const orderService = new OrderService();
        const newOrder = await orderService.createOrder(order);
        return newOrder;
    },
    categories: async () => {
        const categoryService = new CategoryService();
        const categories = await categoryService.getAllCategories();
        return categories;
    },
    createCategory: async (category) => {
        const categoryService = new CategoryService();
        const newCategory = await categoryService.createCategory(category);
        return newCategory;
    },
  };

module.exports = resolvers;
