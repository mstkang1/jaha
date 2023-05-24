package com.knpharm.jaha.service.product;

import com.knpharm.jaha.dto.ProductDto;

import java.util.List;

public interface ProductService {
    List<ProductDto> selectProductList(String brandCode) throws Exception;

    ProductDto selectProduct(String productName) throws Exception;

}
