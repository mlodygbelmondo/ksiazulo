package bspl.mapakebabow.v1.Services;

import bspl.mapakebabow.v1.DTOs.CityDTO;
import bspl.mapakebabow.v1.Entities.City;

import java.util.List;

public interface CityService {

    CityDTO createCity(CityDTO cityDTO);

    List<CityDTO> getAllCities();

    CityDTO updateCity(CityDTO cityDTO, Long id);

    void deleteCity(Long id);
}
