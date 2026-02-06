package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.entities.SubcategoryItem;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SubcategoryItemRowMapper implements RowMapper<SubcategoryItem> {
    @Override
    public SubcategoryItem mapRow(ResultSet rs, int rowNum) throws SQLException {
        SubcategoryItem e = new SubcategoryItem();
        e.setId(rs.getInt("subcategory_item_id"));
        e.setName(rs.getString("name"));
        e.setSubcategoryId(rs.getInt("subcategory_id"));
        return e;
    }
}