package com.knpharm.jaha.service.banner;

import com.knpharm.jaha.dto.BannerDto;

import java.util.List;

public interface BannerService {
    List<BannerDto> selectBannerList(String brandCode) throws Exception;

    BannerDto selectBanner(int bannerSeq) throws Exception;

}
