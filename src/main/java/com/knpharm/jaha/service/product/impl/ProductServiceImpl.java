package com.knpharm.jaha.service.product.impl;

import com.knpharm.jaha.mapper.ProductMapper;
import com.knpharm.jaha.dto.ProductDto;
import com.knpharm.jaha.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;
    @Override
    public List<ProductDto> selectProductList(String brandCode) throws Exception {
        return productMapper.selectProductList(brandCode);
    }

    @Override
    public ProductDto selectProduct(String productName) throws Exception {
        return productMapper.selectProduct(productName);
    }
}
