package com.knpharm.jaha.dao;

import com.knpharm.jaha.domain.StoreVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreDAO {
    public List<StoreVO> listStore(StoreVO storeVO);
}
