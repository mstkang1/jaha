package com.knpharm.jaha.service.store;

import com.knpharm.jaha.dto.StoreDto;

import java.util.List;

public interface StoreService {
    List<StoreDto> selectStoreList(StoreDto storeDto) throws Exception;
}
