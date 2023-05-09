package com.knpharm.jaha.service.product;

import com.knpharm.jaha.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> selectProductList(ProductDto productDto) throws Exception;

}
