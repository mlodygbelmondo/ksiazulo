package bspl.mapakebabow.v1.Services;

import bspl.mapakebabow.v1.DTOs.CategoryDTO;
import bspl.mapakebabow.v1.Entities.Category;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getAllCategories();

    CategoryDTO createCategory(CategoryDTO categoryDTO);

    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long id);

    CategoryDTO getCategoryById(Long id);
    void deleteCategory(Long id);
}
