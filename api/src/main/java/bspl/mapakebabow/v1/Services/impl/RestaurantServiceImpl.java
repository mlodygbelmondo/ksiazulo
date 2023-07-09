package bspl.mapakebabow.v1.Services.impl;

import bspl.mapakebabow.v1.DTOs.RestaurantDTO;
import bspl.mapakebabow.v1.DTOs.RestaurantResponse;
import bspl.mapakebabow.v1.Entities.Position;
import bspl.mapakebabow.v1.Entities.Restaurant;
import bspl.mapakebabow.v1.Exceptions.ResourceNotFoundException;
import bspl.mapakebabow.v1.Repositories.PositionRepository;
import bspl.mapakebabow.v1.Repositories.RestaurantRepository;
import bspl.mapakebabow.v1.Services.RestaurantService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantServiceImpl implements RestaurantService {


    private RestaurantRepository restaurantRepository;

    private ModelMapper modelMapper;

    private PositionRepository positionRepository;

    public RestaurantServiceImpl(RestaurantRepository restaurantRepository,
                                 ModelMapper modelMapper,
                                 PositionRepository positionRepository) {
        this.restaurantRepository = restaurantRepository;
        this.modelMapper = modelMapper;
        this.positionRepository = positionRepository;
    }

    @Override
    public RestaurantDTO getRestaurantById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "Restaurant", "id", id));
        return mapToDTO(restaurant);
    }

    @Override
    public RestaurantDTO createRestaurant(RestaurantDTO restaurantDTO) {
        Position position = positionRepository.findById(restaurantDTO.getPositionId())
                .orElseThrow(() -> new ResourceNotFoundException("Position", "id", restaurantDTO.getPositionId()));

        Restaurant restaurant = mapToEntity(restaurantDTO);
        restaurant.setPosition(position);
        Restaurant createdRestaurant = restaurantRepository.save(restaurant);

        RestaurantDTO restaurantResponse = mapToDTO(createdRestaurant);
        return restaurantResponse;
    }

    @Override
    public RestaurantResponse getAllRestaurants(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);

        Page<Restaurant> restaurants = restaurantRepository.findAll(pageable);

        List<Restaurant> listOfRestaurants = restaurants.getContent();

        List<RestaurantDTO> content = listOfRestaurants.stream().
                map(restaurant -> mapToDTO(restaurant)).collect(Collectors.toList());

        RestaurantResponse restaurantResponse = new RestaurantResponse();
        restaurantResponse.setContent(content);
        restaurantResponse.setPageNo(restaurants.getNumber());
        restaurantResponse.setPageSize(restaurants.getSize());
        restaurantResponse.setLast(restaurants.isLast());
        restaurantResponse.setTotalElements(restaurants.getTotalElements());
        restaurantResponse.setTotalPages(restaurants.getTotalPages());

        return restaurantResponse;
    }

    @Override
    public List<RestaurantDTO> getRestaurantsByPositionId(long positionId) {
        List<Restaurant> restaurants = restaurantRepository.findByPositionId(positionId);

        return restaurants.stream().map(restaurant -> mapToDTO(restaurant)).collect(Collectors.toList());
    }

    @Override
    public RestaurantDTO updateRestaurant(RestaurantDTO restaurantDTO, Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));

        Position position = positionRepository.findById(restaurantDTO.getPositionId())
                        .orElseThrow(() -> new ResourceNotFoundException("Position", "id", restaurantDTO.getPositionId()));

        restaurant.setName(restaurantDTO.getName());
        restaurant.setRating(restaurantDTO.getRating());
        restaurant.setPosition(position);
        restaurant.setYtUrl(restaurantDTO.getYtUrl());
        Restaurant updatedRestaurant = restaurantRepository.save(restaurant);
        return mapToDTO(updatedRestaurant);
    }

    @Override
    public void deletePostById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Restaurant", "id", id));
        restaurantRepository.delete(restaurant);
    }

    private RestaurantDTO mapToDTO(Restaurant restaurant){
        RestaurantDTO restaurantDTO = modelMapper.map(restaurant, RestaurantDTO.class);
        return restaurantDTO;
    }

    private Restaurant mapToEntity(RestaurantDTO restaurantDTO){
        Restaurant restaurant = modelMapper.map(restaurantDTO, Restaurant.class);
        return restaurant;
    }
}
