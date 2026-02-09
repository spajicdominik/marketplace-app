package com.dspajic.marketplace.mappers;

import com.dspajic.marketplace.dto.ProductMenuDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductMenuDtoMapper implements RowMapper<ProductMenuDto> {
    @Override
    public ProductMenuDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProductMenuDto pmd = new ProductMenuDto();
        pmd.setName(rs.getString("name"));
        return pmd;
    }
}
