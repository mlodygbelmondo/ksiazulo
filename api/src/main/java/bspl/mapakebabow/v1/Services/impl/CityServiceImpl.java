package bspl.mapakebabow.v1.Services.impl;

import bspl.mapakebabow.v1.DTOs.CityDTO;
import bspl.mapakebabow.v1.Entities.City;
import bspl.mapakebabow.v1.Exceptions.ResourceNotFoundException;
import bspl.mapakebabow.v1.Repositories.CityRepository;
import bspl.mapakebabow.v1.Services.CityService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityServiceImpl implements CityService {

    private CityRepository cityRepository;

    private ModelMapper modelMapper;

    public CityServiceImpl(CityRepository cityRepository, ModelMapper modelMapper) {
        this.cityRepository = cityRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CityDTO createCity(CityDTO cityDTO) {
        City city = modelMapper.map(cityDTO, City.class);
        City savedCity = cityRepository.save(city);
        return modelMapper.map(savedCity, CityDTO.class);
    }

    @Override
    public List<CityDTO> getAllCities() {
        List<City> cities = cityRepository.findAll();
        return cities.stream().map((city) -> modelMapper.map(city, CityDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public CityDTO updateCity(CityDTO cityDTO, Long id) {
        City city = cityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("City", "id", id));
        city.setName(cityDTO.getName());

        City updatedCity = cityRepository.save(city);
        return modelMapper.map(updatedCity, CityDTO.class);
    }

    @Override
    public void deleteCity(Long id) {
        City city = cityRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("City", "id", id));
        cityRepository.delete(city);
    }
}
