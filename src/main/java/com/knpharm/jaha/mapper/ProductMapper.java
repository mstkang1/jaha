package com.knpharm.jaha.mapper;

import com.knpharm.jaha.dto.ProductDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    List<ProductDto> selectProductList(String brandCode) throws Exception;

    ProductDto selectProduct(String productName) throws Exception;
}
