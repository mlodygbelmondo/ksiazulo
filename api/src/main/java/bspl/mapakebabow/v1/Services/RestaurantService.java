package bspl.mapakebabow.v1.Services;

import bspl.mapakebabow.v1.DTOs.RestaurantDTO;
import bspl.mapakebabow.v1.DTOs.RestaurantResponse;

import java.util.List;

public interface RestaurantService {
    RestaurantDTO getRestaurantById(Long id);

    RestaurantDTO createRestaurant(RestaurantDTO restaurantDTO);

    RestaurantResponse getAllRestaurants(int pageNo, int pageSize, String sortBy, String sortDir);

    List<RestaurantDTO> getRestaurantsByPositionId(long positionId);

    RestaurantDTO updateRestaurant(RestaurantDTO restaurantDTO, Long id);

    void deletePostById(Long id);
}
