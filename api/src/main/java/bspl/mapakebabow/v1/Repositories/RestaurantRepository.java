package bspl.mapakebabow.v1.Repositories;

import bspl.mapakebabow.v1.Entities.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    List<Restaurant> findRestaurantById(Long id);

    List<Restaurant> findByPositionId(Long id);
}
