package bspl.mapakebabow.v1.Services.impl;

import bspl.mapakebabow.v1.DTOs.RestaurantDTO;
import bspl.mapakebabow.v1.DTOs.RestaurantDetailedDTO;
import bspl.mapakebabow.v1.DTOs.RestaurantResponse;
import bspl.mapakebabow.v1.Entities.Category;
import bspl.mapakebabow.v1.Entities.City;
import bspl.mapakebabow.v1.Entities.Position;
import bspl.mapakebabow.v1.Entities.Restaurant;
import bspl.mapakebabow.v1.Exceptions.ResourceNotFoundException;
import bspl.mapakebabow.v1.Repositories.CategoryRepository;
import bspl.mapakebabow.v1.Repositories.CityRepository;
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

    private CategoryRepository categoryRepository;

    private CityRepository cityRepository;

    public RestaurantServiceImpl(RestaurantRepository restaurantRepository,
                                 ModelMapper modelMapper,
                                 PositionRepository positionRepository,
                                 CategoryRepository categoryRepository,
                                 CityRepository cityRepository) {
        this.restaurantRepository = restaurantRepository;
        this.modelMapper = modelMapper;
        this.positionRepository = positionRepository;
        this.categoryRepository = categoryRepository;
        this.cityRepository = cityRepository;
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

        Category category = categoryRepository.findById(restaurantDTO.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category", "id", restaurantDTO.getCategoryId()));

        City city = cityRepository.findById(restaurantDTO.getCityId())
                .orElseThrow(() -> new ResourceNotFoundException("City", "id", restaurantDTO.getCityId()));

        Restaurant restaurant = mapToEntity(restaurantDTO);
        restaurant.setPosition(position);
        restaurant.setCategory(category);
        restaurant.setCity(city);
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
        if(restaurants.isEmpty()){
            throw new ResourceNotFoundException("Restaurant", "positionId", positionId);
        }
        return restaurants.stream().map(restaurant -> mapToDTO(restaurant)).collect(Collectors.toList());
    }



    @Override
    public List<RestaurantDTO> getRestaurantsByCategoryId(Long categoryId) {
        List<Restaurant> restaurants = restaurantRepository.findByCategoryId(categoryId);

        return restaurants.stream().map(restaurant -> mapToDTO(restaurant)).collect(Collectors.toList());
    }

    @Override
    public RestaurantDTO updateRestaurant(RestaurantDTO restaurantDTO, Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));

        Position position = positionRepository.findById(restaurantDTO.getPositionId())
                        .orElseThrow(() -> new ResourceNotFoundException("Position", "id", restaurantDTO.getPositionId()));

        Category category = categoryRepository.findById(restaurantDTO.getCategoryId())
                        .orElseThrow(() -> new ResourceNotFoundException("Category", "id", restaurantDTO.getCategoryId()));

        restaurant.setName(restaurantDTO.getName());
        restaurant.setRating(restaurantDTO.getRating());
        restaurant.setPosition(position);
        restaurant.setYtUrl(restaurantDTO.getYtUrl());
        restaurant.setCategory(category);
        restaurant.setImgUrl(restaurantDTO.getImgUrl());
        restaurant.setMapUrl(restaurantDTO.getMapUrl());
        Restaurant updatedRestaurant = restaurantRepository.save(restaurant);
        return mapToDTO(updatedRestaurant);
    }

    @Override
    public RestaurantDetailedDTO getDetailedRestaurantById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Restaurant", "id", id));
        RestaurantDTO restaurantDTO = modelMapper.map(restaurant, RestaurantDTO.class);

        Category category = categoryRepository.findById(restaurantDTO.getCategoryId()).orElseThrow(() ->
                new ResourceNotFoundException("Category", "id", restaurantDTO.getCategoryId()));

        City city = cityRepository.findById(restaurantDTO.getCityId()).orElseThrow(() ->
                new ResourceNotFoundException("City", "id", restaurantDTO.getCityId()));

        RestaurantDetailedDTO restaurantDetailedDTO = new RestaurantDetailedDTO();

        restaurantDetailedDTO = modelMapper.map(restaurant, RestaurantDetailedDTO.class);
        restaurantDetailedDTO.setCity(city.getName());
        restaurantDetailedDTO.setCategory(category.getName());

        return restaurantDetailedDTO;
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
