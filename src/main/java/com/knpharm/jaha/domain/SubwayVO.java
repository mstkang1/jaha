package com.knpharm.jaha.domain;

import lombok.Data;

@Data
public class SubwayVO {
    private int subwaySeq;
    private String station;
    private long longitude;
    private long latitude;
}
