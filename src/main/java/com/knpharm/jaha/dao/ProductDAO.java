package com.knpharm.jaha.dao;

import com.knpharm.jaha.domain.ProductVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductDAO {
    public List<ProductVO> listProduct(ProductVO productVO);
}
