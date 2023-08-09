package bspl.mapakebabow.v1.Repositories;

import bspl.mapakebabow.v1.Entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
