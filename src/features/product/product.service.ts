import Product from '../../entities/product';
import CreateProductRequest from './product.model';

class ProductService {
  public create = async (data: CreateProductRequest) => {
    const { name, price, description } = data;

    const newProduct = await Product.create({
      name,
      price,
      description
    });

    return { product: newProduct.toObject({ getters: true }) };
  };
}

const productService = new ProductService();
export default productService;
