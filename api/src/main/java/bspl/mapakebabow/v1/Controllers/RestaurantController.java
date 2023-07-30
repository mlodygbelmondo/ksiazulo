package bspl.mapakebabow.v1.Controllers;

import bspl.mapakebabow.v1.DTOs.RestaurantDTO;
import bspl.mapakebabow.v1.DTOs.RestaurantResponse;
import bspl.mapakebabow.v1.Services.RestaurantService;
import bspl.mapakebabow.v1.Utils.AppConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class RestaurantController {

    private RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/restaurants/{id}")
    public ResponseEntity<RestaurantDTO> getRestaurantById(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok(restaurantService.getRestaurantById(id));
    }

    @GetMapping("/position/{positionId}/restaurants")
    public List<RestaurantDTO> getRestaurantsByPositionId(@PathVariable(value = "positionId") long positionId){
        return restaurantService.getRestaurantsByPositionId(positionId);
    }

    @GetMapping("/restaurants")
    public RestaurantResponse getAllRestaurants(
            @RequestParam(value = "pageNo", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER, required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE, required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = AppConstants.DEFAULT_SORT_DIRECTION, required = false) String sortDir
    ){
        return restaurantService.getAllRestaurants(pageNo, pageSize, sortBy, sortDir);
    }

    @PostMapping("/restaurants")
    public ResponseEntity<RestaurantDTO> createRestaurant(@RequestBody RestaurantDTO restaurantDTO){
        return new ResponseEntity<>(restaurantService.createRestaurant(restaurantDTO), HttpStatus.CREATED);
    }

    @PutMapping("/restaurants/{id}")
    public ResponseEntity<RestaurantDTO> updateRestaurant(@RequestBody RestaurantDTO restaurantDTO,
                                                          @PathVariable(name = "id") Long id){
        RestaurantDTO restaurantResponse = restaurantService.updateRestaurant(restaurantDTO, id);
        return new ResponseEntity<>(restaurantResponse, HttpStatus.OK);
    }

    @DeleteMapping("/restaurants/{id}")
    public ResponseEntity<String> deletePost(@PathVariable(name = "id") Long id){
        restaurantService.deletePostById(id);
        return new ResponseEntity<>("Restaurant deleted successfully.", HttpStatus.OK);
    }
}
