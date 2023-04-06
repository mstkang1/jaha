package com.knpharm.jaha.dao;

import com.knpharm.jaha.domain.SubwayVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SubwayDAO {
    public List<SubwayVO> listSubway();
}
