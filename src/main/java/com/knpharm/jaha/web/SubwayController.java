package com.knpharm.jaha.web;

import com.knpharm.jaha.dao.SubwayDAO;
import com.knpharm.jaha.domain.SubwayVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class SubwayController {
    private Logger logger = LoggerFactory.getLogger(SubwayController.class);

    @Autowired
    private SubwayDAO subwayDAO;

    @RequestMapping("/subway")
    public @ResponseBody Map<String, Object> subway() throws Exception {
        Map<String, Object> rtnObj = new HashMap<>();

        List<SubwayVO> subwayList = subwayDAO.listSubway();
        logger.info("subway -> " + subwayList.toString());

        rtnObj.put("subway_list", subwayList);
        return rtnObj;
    }


}
