package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.dto.favourite.FavouriteDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FavouriteMapper implements RowMapper<FavouriteDto>{
    @Override
    public FavouriteDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        FavouriteDto dto = new FavouriteDto();
        dto.setPost_id(rs.getInt("post_id"));
        dto.setUser_id(rs.getInt("user_id"));
        return dto;
    }
}
